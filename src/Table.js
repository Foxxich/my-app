import React, { useEffect, useState, useCallback } from "react";
import NavBarr from "./components/NavBarr";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./App.css";

const Table = () => {
  const data = [
    { rok: 2020, zuzycie: "150 kWh", wartosc: "$100" },
    { rok: 2021, zuzycie: "200 kWh", wartosc: "$130" },
    { rok: 2022, zuzycie: "180 kWh", wartosc: "$120" },
  ];

  return (
    <div>
      <NavBarr />
      <div className="centered-content">
        <div className="about-content">
          <h1>About Counter</h1>
          <p>
            This is a simple table to demonstrate data rendering in React with
            Bootstrap styling.
          </p>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rok</th>
                <th scope="col">Zużycie</th>
                <th scope="col">Wartość</th>
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
        </div>
      </div>
    </div>
  );
};

export default Table;
