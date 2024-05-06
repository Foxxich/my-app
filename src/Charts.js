import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const MyLineChart = () => {
  const [tariff, setTariff] = useState('Standardowa');
  const chartRef = useRef(null);
  const initialData = [134, 221, 126, 176, 0, 0, 0, 0, 0, 0, 0, 0]; // Initial hardcoded data

  const tariffs = {
    Standardowa: 0.15,
    Nocna: 0.10,
    Weekendowa: 0.13,
    Ekologiczna: 0.12,
    Dynamiczna: 0.20
  };

  useEffect(() => {
    const ctx = document.getElementById("myAreaChart").getContext("2d");
    const newTariffRate = tariffs[tariff];
    const newData = initialData.map(value => Math.round(value * newTariffRate));

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
        datasets: [{
          label: "Koszty",
          lineTension: 0.3,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)",
          pointRadius: 3,
          pointBackgroundColor: "rgba(78, 115, 223, 1)",
          pointBorderColor: "rgba(78, 115, 223, 1)",
          pointHoverRadius: 3,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: newData,
        }],
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          x: {
            time: {
              unit: 'date'
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          },
          y: {
            ticks: {
              maxTicksLimit: 5,
              padding: 10,
              callback: function(value) {
                return '$' + value;
              }
            },
            grid: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: '#6e707e',
          titleFontSize: 14,
          borderColor: '#dddfeb',
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: 'index',
          caretPadding: 10,
          callbacks: {
            label: function(tooltipItem, chart) {
              var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
              return datasetLabel + ': $' + tooltipItem.yLabel;
            }
          }
        }
      } // keep the existing chart options here
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [tariff]); // Dependency on tariff ensures re-render when it changes

  return (
    <>
      <canvas id="myAreaChart" width="855" height="320"></canvas>
      <select value={tariff} onChange={(event) => setTariff(event.target.value)}>
        <option value="Standardowa">Taryfa Standardowa</option>
        <option value="Nocna">Taryfa Nocna</option>
        <option value="Weekendowa">Taryfa Weekendowa</option>
        <option value="Ekologiczna">Taryfa Ekologiczna</option>
        <option value="Dynamiczna">Taryfa Dynamiczna</option>
      </select>
    </>
  );
}

export default MyLineChart;
