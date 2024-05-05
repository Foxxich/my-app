import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import NavBarr from './components/NavBarr';

const Table = () => {
  const initialData = [
    { rok: 2020, zuzycie: 150, wartosc: 100 },
    { rok: 2021, zuzycie: 200, wartosc: 130 },
    { rok: 2022, zuzycie: 180, wartosc: 120 },
  ];

  // Dane miesięczne z rokiem
  const monthlyData = [
    { miesiac: 'Styczeń', rok: 2020, zuzycie: "180 kWh", wartosc: "PLN 150" },
    { miesiac: 'Luty', rok: 2020, zuzycie: "165 kWh", wartosc: "PLN 135" },
    { miesiac: 'Marzec', rok: 2020, zuzycie: "343 kWh", wartosc: "PLN 150" },
    { miesiac: 'Kwiecień', rok: 2020, zuzycie: "443 kWh", wartosc: "PLN 135" },
    { miesiac: 'Maj', rok: 2020, zuzycie: "44 kWh", wartosc: "PLN 150" },
    { miesiac: 'Czerwiec', rok: 2020, zuzycie: "64 kWh", wartosc: "PLN 135" },
    { miesiac: 'Lipiec', rok: 2020, zuzycie: "12 kWh", wartosc: "PLN 150" },
    { miesiac: 'Sierpień', rok: 2020, zuzycie: "43 kWh", wartosc: "PLN 135" },
    { miesiac: 'Wrzesień', rok: 2020, zuzycie: "76 kWh", wartosc: "PLN 150" },
    { miesiac: 'Październik', rok: 2020, zuzycie: "165 kWh", wartosc: "PLN 135" },
    { miesiac: 'Listopad', rok: 2020, zuzycie: "180 kWh", wartosc: "PLN 150" },
    { miesiac: 'Grudzień', rok: 2020, zuzycie: "165 kWh", wartosc: "PLN 135" },
    // Dane dla 2021
    { miesiac: 'Styczeń', rok: 2021, zuzycie: "190 kWh", wartosc: "PLN 160" },
    { miesiac: 'Luty', rok: 2021, zuzycie: "170 kWh", wartosc: "PLN 140" },
    { miesiac: 'Marzec', rok: 2021, zuzycie: "350 kWh", wartosc: "PLN 155" },
    { miesiac: 'Kwiecień', rok: 2021, zuzycie: "450 kWh", wartosc: "PLN 140" },
    { miesiac: 'Maj', rok: 2021, zuzycie: "50 kWh", wartosc: "PLN 155" },
    { miesiac: 'Czerwiec', rok: 2021, zuzycie: "70 kWh", wartosc: "PLN 140" },
    { miesiac: 'Lipiec', rok: 2021, zuzycie: "15 kWh", wartosc: "PLN 155" },
    { miesiac: 'Sierpień', rok: 2021, zuzycie: "45 kWh", wartosc: "PLN 140" },
    { miesiac: 'Wrzesień', rok: 2021, zuzycie: "80 kWh", wartosc: "PLN 155" },
    { miesiac: 'Październik', rok: 2021, zuzycie: "170 kWh", wartosc: "PLN 140" },
    { miesiac: 'Listopad', rok: 2021, zuzycie: "185 kWh", wartosc: "PLN 155" },
    { miesiac: 'Grudzień', rok: 2021, zuzycie: "170 kWh", wartosc: "PLN 140" },
    // Dane dla 2022
    { miesiac: 'Styczeń', rok: 2022, zuzycie: "185 kWh", wartosc: "PLN 160" },
    { miesiac: 'Luty', rok: 2022, zuzycie: "170 kWh", wartosc: "PLN 145" },
    { miesiac: 'Marzec', rok: 2022, zuzycie: "350 kWh", wartosc: "PLN 155" },
    { miesiac: 'Kwiecień', rok: 2022, zuzycie: "450 kWh", wartosc: "PLN 145" },
    { miesiac: 'Maj', rok: 2022, zuzycie: "50 kWh", wartosc: "PLN 155" },
    { miesiac: 'Czerwiec', rok: 2022, zuzycie: "70 kWh", wartosc: "PLN 145" },
    { miesiac: 'Lipiec', rok: 2022, zuzycie: "15 kWh", wartosc: "PLN 155" },
    { miesiac: 'Sierpień', rok: 2022, zuzycie: "45 kWh", wartosc: "PLN 145" },
    { miesiac: 'Wrzesień', rok: 2022, zuzycie: "80 kWh", wartosc: "PLN 155" },
    { miesiac: 'Październik', rok: 2022, zuzycie: "170 kWh", wartosc: "PLN 145" },
    { miesiac: 'Listopad', rok: 2022, zuzycie: "185 kWh", wartosc: "PLN 160" },
    { miesiac: 'Grudzień', rok: 2022, zuzycie: "170 kWh", wartosc: "PLN 145" },
  ];

  const tariffs = {
    Standardowa: 0.15,
    Nocna: 0.10,
    Weekendowa: 0.13,
    Ekologiczna: 0.12,
    Dynamiczna: 0.20
  };

  const [data, setData] = useState(initialData);
  const [selectedYear, setSelectedYear] = useState(2020);
  const [monthData, setMonthData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [tariff, setTariff] = useState('Standardowa');

  const sortData = (key, data, setDataFunction) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
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

  useEffect(() => {
    setMonthData(monthlyData.filter(d => d.rok === selectedYear));
  }, [selectedYear]);

  const handleTariffChange = (event) => {
    setTariff(event.target.value);
    const newTariffRate = tariffs[event.target.value];
    const newData = data.map(entry => ({
      ...entry,
      wartosc: Math.round(entry.zuzycie * newTariffRate)
    }));
    setData(newData);
  };

  return (
    <div>
      <NavBarr />
      <div className="page-centered-content">
        <section className="table-info">
          <h2>Dane roczne</h2>
          <select value={tariff} onChange={handleTariffChange}>
            <option value="Standardowa">Taryfa Standardowa</option>
            <option value="Nocna">Taryfa Nocna</option>
            <option value="Weekendowa">Taryfa Weekendowa</option>
            <option value="Ekologiczna">Taryfa Ekologiczna</option>
            <option value="Dynamiczna">Taryfa Dynamiczna</option>
          </select>
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Rok
                  <Button size="sm" onClick={() => sortData('rok', data, setData)}>Sort</Button>
                </th>
                <th scope="col">Średnie zużycie roczne (kWh)
                  <Button size="sm" onClick={() => sortData('zuzycie', data, setData)}>Sort</Button>
                </th>
                <th scope="col">Wartość (PLN )
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
                <th scope="col">Średnie zużycie miesięczne (kWh)
                  <Button size="sm" onClick={() => sortData('zuzycie', monthData, setMonthData)}>Sort</Button>
                </th>
                <th scope="col">Wartość (PLN )
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