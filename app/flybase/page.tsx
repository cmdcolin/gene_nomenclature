import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>FlyBase</h1>
      <p>Downloaded Dec 16, 2023 from AllianceMine</p>

      <table>
        <thead>
          <tr>
            <th>Short name</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./flybase_genes.csv", "utf8")
            .split("\n")
            .filter((f) => !f.startsWith("#"))
            .map((line, idx) => {
              const [dbxref, symbol, name] = line.split("\t");
              return (
                <tr key={`${line}-${idx}`}>
                  <td>
                    <a
                      href={`http://flybase.org/reports/${dbxref.replace(
                        "FB:",
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
