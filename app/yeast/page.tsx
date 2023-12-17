import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>Yeast - gene names extracted from AllianceMine</h1>
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
            .readFileSync("./yeast_genes.csv", "utf8")
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
