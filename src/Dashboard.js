import React from "react";
import "./App.css";
import NavBarr from "./components/NavBarr";
import Plot from "react-plotly.js";
import MyLineChart from "./Charts";
import PieChart from "./PieChart";

const Dashboard = () => {
  const trace = {
    x: ["Styczeń", "Marzec", "Maj", "Lipiec", "Wrzesień", "Listopad"],
    y: [0, 10000, 20000, 15000, 25000, 40000],
    type: "scatter", // Type of chart: scatter plot for line charts
    mode: "lines+markers", // 'lines', 'markers', 'lines+markers'
    marker: { color: "blue" },
    line: { shape: "spline", smoothing: 1.3 }, // spline makes the line smooth
  };

  const layout = {
    title: "Zużycie energii",
    xaxis: {
      title: "Miesiąc",
    },
    yaxis: {
      title: "Kwota",
    },
    margin: {
      l: 50, // Left margin
      r: 50, // Right margin
      b: 50, // Bottom margin
      t: 50, // Top margin
    },
  };

  const meters = [
    { id: 1, color: "#e74a3b", progress: 20 },
    { id: 2, color: "#f6c23e", progress: 40 }, 
    { id: 3, color: "#6610f2", progress: 60 }, 
    { id: 4, color: "#36b9cc", progress: 80 }, 
    { id: 5, color: "#1cc88a", progress: 100, label: "Complete!" }, 
  ];

  const progressPercentage = 10;

  return (
    <div>
      {/* Navigation Bar Placeholder */}
      <NavBarr />

      {/* Centered Content */}
      <div className="page-centered-content">
        <section className="dashboard-header">
          <div className="dashboard-item monthly-update">
            <span>WYDATKI MIESIĘCZNE: 200,99 PLN</span>
            <i className="bi bi-currency-exchange icon"></i>{" "}
            {/* Bootstrap icon */}
          </div>
          <div className="dashboard-item monthly-savings">
            <span>EKONOMIA MIESIĘCZNA: 50,00 PLN</span>
            <i className="bi bi-piggy-bank icon"></i> {/* Bootstrap icon */}
          </div>
          <div className="dashboard-item annual-progress">
            <div className="progress-info">
              <span>PROGRES ROCZNY: {progressPercentage}%</span>
              <i className="bi bi-hourglass-split icon"></i>
            </div>
            <div className="progress-bar-background">
              <div
                className="progress-bar"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="dashboard-item newsletter-count">
            <span>NEWSLETTERS: 18</span>
            <i className="bi bi-envelope-fill icon"></i> {/* Bootstrap icon */}
          </div>
        </section>

        <section className="energy-usage-chart">
          <h2>Zużycie energii</h2>
          <div className="chart">
          <MyLineChart />
          </div>
        </section>

        {/* Energy Usage Pie Chart Placeholder */}
        <section className="energy-usage-pie-chart">
          <h2>Podział zużytej energii</h2>
          <div className="pie-chart">
            <PieChart/>
          </div>
        </section>

        {/* Meter List Placeholder */}
        <section className="meter-list">
          <h2>Liczniki</h2>
          {meters.map((meter) => (
            <div key={meter.id} className="meter">
              <span className="meter-number">{meter.id}</span>
              <div
                className="meter-bar"
                style={{
                  width: `${meter.progress}%`,
                  backgroundColor: meter.color,
                }}
              >
                {meter.progress < 100 ? `${meter.progress}%` : meter.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
