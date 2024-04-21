import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import NavBarr from './components/NavBarr';

const Table = () => {
  const initialData = [
    { rok: 2020, zuzycie: "150 kWh", wartosc: "$100" },
    { rok: 2021, zuzycie: "200 kWh", wartosc: "$130" },
    { rok: 2022, zuzycie: "180 kWh", wartosc: "$120" },
  ];

  // Dane miesięczne z rokiem
  const monthlyData = [
    { miesiac: 'Styczeń', rok: 2020, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Luty', rok: 2020, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Marzec', rok: 2020, zuzycie: "343 kWh", wartosc: "$150" },
    { miesiac: 'Kwiecień', rok: 2020, zuzycie: "443 kWh", wartosc: "$135" },
    { miesiac: 'Maj', rok: 2020, zuzycie: "44 kWh", wartosc: "$150" },
    { miesiac: 'Czerwiec', rok: 2020, zuzycie: "64 kWh", wartosc: "$135" },
    { miesiac: 'Lipiec', rok: 2020, zuzycie: "12 kWh", wartosc: "$150" },
    { miesiac: 'Sierpień', rok: 2020, zuzycie: "43 kWh", wartosc: "$135" },
    { miesiac: 'Wrzesień', rok: 2020, zuzycie: "76 kWh", wartosc: "$150" },
    { miesiac: 'Październik', rok: 2020, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Listopad', rok: 2020, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Grudzień', rok: 2020, zuzycie: "165 kWh", wartosc: "$135" },
    // Dodaj wszystkie miesiące dla lat 2020, 2021, 2022
    { miesiac: 'Styczeń', rok: 2021, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Luty', rok: 2021, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Marzec', rok: 2021, zuzycie: "343 kWh", wartosc: "$150" },
    { miesiac: 'Kwiecień', rok: 2021, zuzycie: "443 kWh", wartosc: "$135" },
    { miesiac: 'Maj', rok: 2021, zuzycie: "44 kWh", wartosc: "$150" },
    { miesiac: 'Czerwiec', rok: 2021, zuzycie: "64 kWh", wartosc: "$135" },
    { miesiac: 'Lipiec', rok: 2021, zuzycie: "12 kWh", wartosc: "$150" },
    { miesiac: 'Sierpień', rok: 2021, zuzycie: "43 kWh", wartosc: "$135" },
    { miesiac: 'Wrzesień', rok: 2021, zuzycie: "76 kWh", wartosc: "$150" },
    { miesiac: 'Październik', rok: 2021, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Listopad', rok: 2021, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Grudzień', rok: 2021, zuzycie: "165 kWh", wartosc: "$135" },
    // I tak dalej dla każdego miesiąca i roku
    { miesiac: 'Styczeń', rok: 2022, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Luty', rok: 2022, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Marzec', rok: 2022, zuzycie: "343 kWh", wartosc: "$150" },
    { miesiac: 'Kwiecień', rok: 2022, zuzycie: "443 kWh", wartosc: "$135" },
    { miesiac: 'Maj', rok: 2022, zuzycie: "44 kWh", wartosc: "$150" },
    { miesiac: 'Czerwiec', rok: 2022, zuzycie: "64 kWh", wartosc: "$135" },
    { miesiac: 'Lipiec', rok: 2022, zuzycie: "12 kWh", wartosc: "$150" },
    { miesiac: 'Sierpień', rok: 2022, zuzycie: "43 kWh", wartosc: "$135" },
    { miesiac: 'Wrzesień', rok: 2022, zuzycie: "76 kWh", wartosc: "$150" },
    { miesiac: 'Październik', rok: 2022, zuzycie: "165 kWh", wartosc: "$135" },
    { miesiac: 'Listopad', rok: 2022, zuzycie: "180 kWh", wartosc: "$150" },
    { miesiac: 'Grudzień', rok: 2022, zuzycie: "165 kWh", wartosc: "$135" },
  ];

  const [data, setData] = useState(initialData);
  const [selectedYear, setSelectedYear] = useState(2020);
  const [monthData, setMonthData] = useState(monthlyData.filter(d => d.rok === selectedYear));
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  const sortData = (key, data, setDataFunction) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
    setDataFunction(sortedData);
    setSortConfig({ key, direction });
  };

  const handleYearChange = (event) => {
    const year = parseInt(event.target.value);
    setSelectedYear(year);
    setMonthData(monthlyData.filter(d => d.rok === year));
  };

  return (
    <div>
      <NavBarr />
      <div className="page-centered-content">
        <section className="table-info">
          <h2>Dane roczne</h2>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rok 
                  <Button size="sm" onClick={() => sortData('rok', data, setData)}>Sort</Button>
                </th>
                <th scope="col">Średnie zużycie roczne
                  <Button size="sm" onClick={() => sortData('zuzycie', data, setData)}>Sort</Button>
                </th>
                <th scope="col">Wartość 
                  <Button size="sm" onClick={() => sortData('wartosc', data, setData)}>Sort</Button>
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

          <h2>Dane miesięczne</h2>
          <select value={selectedYear} onChange={handleYearChange}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Miesiąc 
                  <Button size="sm" onClick={() => sortData('miesiac', monthData, setMonthData)}>Sort</Button>
                </th>
                <th scope="col">Średnie zużycie miesięczne
                  <Button size="sm" onClick={() => sortData('zuzycie', monthData, setMonthData)}>Sort</Button>
                </th>
                <th scope="col">Wartość 
                  <Button size="sm" onClick={() => sortData('wartosc', monthData, setMonthData)}>Sort</Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {monthData.map((row, index) => (
                <tr key={index}>
                  <td>{row.miesiac}</td>
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
