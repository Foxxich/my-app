import React, { useState } from "react";
import NavBarr from "./components/NavBarr";
import Button from "react-bootstrap/Button";
import "./App.css";

const Table = () => {
  const initialData = [
    { rok: 2020, zuzycie: "150 kWh", wartosc: "$100" },
    { rok: 2021, zuzycie: "200 kWh", wartosc: "$130" },
    { rok: 2022, zuzycie: "180 kWh", wartosc: "$120" },
  ];

  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  // Function to sort data
  const sortData = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <NavBarr />
      <div className="page-centered-content">
        <section className="table-info">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rok 
                  <Button size="sm" onClick={() => sortData('rok')}>Sort</Button>
                </th>
                <th scope="col">Zużycie 
                  <Button size="sm" onClick={() => sortData('zuzycie')}>Sort</Button>
                </th>
                <th scope="col">Wartość 
                  <Button size="sm" onClick={() => sortData('wartosc')}>Sort</Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.rok}</td>
                  <td>{row.zuzycie}</td>
                  <td>{row.wartosc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Table;
