import React from "react";
import "./App.css";
import NavBarr from "./components/NavBarr";
import Plot from "react-plotly.js";
import MyLineChart from "./Charts";
import MyLineChart2 from "./Charts2";
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

  const hourlyEnergyData = {
    x: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    y: [300, 290, 270, 250, 230, 210, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 530, 550, 570, 590, 610, 630, 650, 670],
    type: 'bar',
    marker: {
      color: 'rgb(58,200,225)',
    },
  };

  const layoutHourly = {
    title: 'Zużycie energii na godzinę',
    xaxis: {
      title: 'Godzina',
    },
    yaxis: {
      title: 'Zużycie (kWh)',
    },
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 50,
    },
    bargap: 0.05,
  };

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
            <span>OSZCZĘDNOŚĆ MIESIĘCZNA: 50,00 PLN</span>
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
          <h2>Koszty zużytej energii</h2>
          <div className="chart">
          <MyLineChart />
          </div>
        </section>

        <section className="energy-usage-chart">
          <h2>Ilość zużytej energii (kWH)</h2>
          <div className="chart">
          <MyLineChart2 />
          </div>
        </section>

        {/* Energy Usage Pie Chart Placeholder */}
        <section className="energy-usage-pie-chart">
          <h2>Podział dzienny zużytej energii</h2>
          <div className="pie-chart">
            <PieChart/>
          </div>
        </section>

        <section className="meter-list">
          <h2>Zużycie energii na godzinę</h2>
          <div className="ess">
            <Plot data={[hourlyEnergyData]} layout={layoutHourly} />
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
