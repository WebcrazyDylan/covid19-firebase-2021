import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      <table style={{ width: "100%" }}>
        <tbody>
          {countries.map((country, idx) => (
            <tr key={idx}>
              <td>
                {idx + 1}
                {". "}
                {country.country}
              </td>
              <td>
                <strong>{numeral(country.cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
