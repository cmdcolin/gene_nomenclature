import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>WormBase - gene class names from WormBase</h1>
      <p>Downloaded Dec 16, 2023 from WormMine</p>

      <table>
        <thead>
          <tr>
            <th>Gene class (not specific gene)</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./wormbase_genes.csv", "utf8")
            .split("\n")
            .filter((f) => !f.startsWith("#"))
            .map((line, idx) => (
              <tr key={`${line}-${idx}`}>
                {line.split("\t").map((r, idx) => (
                  <td key={`${r}-${idx}`}>{r}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
