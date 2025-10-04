
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const VerticalGraph = ({ data }) => {
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//         labels: {
//           font: {
//             size: 14,
//             weight: "600",
//           },
//           padding: 15,
//           usePointStyle: true,
//         },
//       },
//       title: {
//         display: true,
//         text: "Holdings Portfolio Overview",
//         font: {
//           size: 18,
//           weight: "bold",
//         },
//         padding: {
//           top: 10,
//           bottom: 20,
//         },
//       },
//       tooltip: {
//         backgroundColor: "rgba(0, 0, 0, 0.8)",
//         padding: 12,
//         titleFont: {
//           size: 14,
//           weight: "bold",
//         },
//         bodyFont: {
//           size: 13,
//         },
//         callbacks: {
//           label: function (context) {
//             let label = context.dataset.label || "";
//             if (label) {
//               label += ": ";
//             }
//             if (context.parsed.y !== null) {
//               label += "₹" + context.parsed.y.toLocaleString("en-IN");
//             }
//             return label;
//           },
//         },
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         ticks: {
//           font: {
//             size: 11,
//             weight: "500",
//           },
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: false,
//         },
//       },
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0, 0, 0, 0.05)",
//         },
//         ticks: {
//           font: {
//             size: 12,
//           },
//           callback: function (value) {
//             return "₹" + value.toLocaleString("en-IN");
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div style={{ height: "450px", width: "100%", position: "relative" }}>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };
// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

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
            size: 14,
            weight: "600",
          },
          padding: 15,
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Holdings Portfolio Overview",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 20,
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
            size: 11,
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
            size: 12,
          },
          callback: function (value) {
            return "₹" + value.toLocaleString("en-IN");
          },
        },
      },
    },
  };

  if (!data || !data.datasets || data.datasets.length === 0) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>No data available for chart</div>;
  }

  return (
    <div style={{ width: "100%", height: "450px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};