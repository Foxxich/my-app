import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null); // Create a ref for the canvas element

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Szczyt przedpołudniowy', 'Szczyt popołudniowy', 'Pozostałe godziny doby'],
        datasets: [{
          label: 'Podział zużytej energii',
          data: [40, 40, 20], // Example data
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false, // Disable tooltips
        },
      }
    });

    // Cleanup function to destroy chart instance on component unmount
    return () => chart.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default PieChart;
