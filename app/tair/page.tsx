import fs from "fs";
import "./styles.css";

export default function TAIR() {
  return (
    <div>
      <h1>TAIR - Registered Arabidopsis gene name symbols</h1>
      <p>Downloaded Dec 16, 2023</p>
      <ul>
        <li>
          <a href="https://www.arabidopsis.org/portals/nomenclature/guidelines.jsp">
            Guidelines for TAIR gene nomenclature
          </a>
        </li>

        <li>
          <a href="https://www.arabidopsis.org/servlets/processor?type=genesymbol&update_action=view_symbol&symbol_type=all&startwith=all">
            All symbols
          </a>
        </li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Full name</th>
          </tr>
        </thead>
        <tbody>
          {fs
            .readFileSync("./arabidopsis_genes.csv", "utf8")
            .split("\n")
            .map((line, idx) => (
              <tr key={`${line}-${idx}`}>
                {line.split(",").map((r, idx) => (
                  <td key={`${r}-${idx}`}>{r}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
