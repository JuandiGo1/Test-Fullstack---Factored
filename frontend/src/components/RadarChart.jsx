import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  const chartData = {
    labels: data.map((tech) => tech.name),
    datasets: [
      {
        label: "Skills",
        data: data.map((tech) => tech.rating),
        backgroundColor: "rgba(20, 143, 253, 0.8)",
        borderColor: "rgba(248, 247, 255, 0.8)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          color: 'black'   // Cambia el color de los valores numéricos
        },
        grid: {
          color: "#e6e6e6",
        },
        angleLines: {
          color: "#a8beed",
        },
        pointLabels: {
          color: "#fff",
        },
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <Radar data={chartData} options={options} />;
};

export default RadarChart;
