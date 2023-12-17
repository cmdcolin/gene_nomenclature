import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>WormBase - gene classes from WormBase</h1>
      <p>Downloaded Dec 16, 2023 from AllianceMine</p>

      <table>
        <thead>
          <tr>
            <th>Gene symbol</th>
            <th>Gene name</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./wormbase_genes.csv", "utf8")
            .split("\n")
            .filter((f) => !f.startsWith("#"))
            .map((line, idx) => {
              const [dbxref, symbol, name] = line.split("\t");
              return (
                <tr key={`${line}-${idx}`}>
                  <td>
                    <a
                      href={`https://wormbase.org/species/c_elegans/gene/${dbxref.replace(
                        "WB:",
                        "",
                      )}`}
                    >
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
