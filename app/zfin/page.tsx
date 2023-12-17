import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>Zfin - gene names extracted from AllianceMine</h1>
      <p>Downloaded Dec 17, 2023</p>

      <table>
        <thead>
          <tr>
            <th>Short name</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./zfin_genes.csv", "utf8")
            .split("\n")
            .filter((f) => !f.startsWith("#"))
            .map((line, idx) => {
              const [dbxref, symbol, name] = line.split("\t");
              return (
                <tr key={`${line}-${idx}`}>
                  <td>
                    <a href={`https://zfin.org/${dbxref.replace("ZFIN:", "")}`}>
                      {symbol}
                    </a>
                  </td>
                  <td>{name}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
