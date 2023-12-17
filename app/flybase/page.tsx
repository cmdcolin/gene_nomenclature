import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>
        FlyBase - gene names symbols extracted from dmel GFF, filtered out
        various sort of uninteresting symbols
      </h1>
      <p>
        Downloaded Dec 16, 2023 from{" "}
        <a href="http://ftp.flybase.net/releases/current/dmel_r6.55/gff/">
          http://ftp.flybase.net/releases/current/dmel_r6.55/gff/
        </a>
      </p>

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
