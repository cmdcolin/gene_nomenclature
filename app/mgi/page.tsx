import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>Mouse genes</h1>
      <p>Downloaded Dec 16, 2023 from AllianceMine</p>

      <table>
        <thead>
          <tr>
            <th>Gene symbol</th>
            <th>Gene description</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./mouse_genes.csv", "utf8")
            .split("\n")
            .filter((f) => !f.startsWith("#"))
            .map((line, idx) => {
              const [dbxref, symbol, name] = line.split("\t");
              return (
                <tr key={`${line}-${idx}`}>
                  <td>
                    <a
                      href={`https://www.informatics.jax.org/marker/${dbxref}`}
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
