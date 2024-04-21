import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyLineChart2 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("myAreaChart2").getContext("2d");

    // Clean up the chart if it already exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize a new Chart instance
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
          "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień",
        ],
        datasets: [{
          label: "Zużyta energia",
          lineTension: 0.3,
          backgroundColor: 'rgba(255, 99, 132, 0.05)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointRadius: 3,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: 'rgba(255, 99, 132, 1)',
          pointHoverRadius: 3,
          pointHoverBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
          pointHitRadius: 10,
          pointBorderWidth: 2,
          data: [56, 123, 67, 88, 0, 0, 0, 0, 0, 0, 0, 0],
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
                return 'kWh' + value;
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
      }
    });

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []); // Ensure this runs once upon mounting

  return <canvas id="myAreaChart2" width="855" height="320"></canvas>;
}

export default MyLineChart2;

