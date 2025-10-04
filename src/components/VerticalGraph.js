

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const VerticalGraph = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          font: {
            size: 16,
            weight: "600",
          },
          padding: 20,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Holdings Portfolio Overview",
        font: {
          size: 20,
          weight: "bold",
        },
        padding: {
          top: 15,
          bottom: 25,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleFont: {
          size: 14,
          weight: "bold",
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += "₹" + context.parsed.y.toLocaleString("en-IN");
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 13,
            weight: "500",
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
        ticks: {
          font: {
            size: 13,
          },
          callback: function (value) {
            return "₹" + value.toLocaleString("en-IN");
          },
        },
      },
    },
  };

  if (!data || !data.datasets || data.datasets.length === 0) {
    return <div style={{ padding: "2rem", textAlign: "center", color: "#666" }}>No data available for chart</div>;
  }

  console.log("Chart data:", data); // Debug log

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};