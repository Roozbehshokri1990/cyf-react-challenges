import React from "react";
import allCountryScores from "./scores";
import "./App.css";

function Table() {
  return (
    <div id="div1">
      <h1>High score per Country</h1>
      <div>
        {allCountryScores.map(({ name, scores }, index) => {
          return (
            <div key={index} id="div2">
              <table className="table">
                <thead>
                  <tr className="tr1">
                    <th scope="col">{name}</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map(({ n, s }, index) => {
                    return (
                      <tr key={index} className="tr1">
                        <td className="tr1">{n}</td>
                        <td className="tr1">{s}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Table;