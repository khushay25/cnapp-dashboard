export const initialData = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: 1,
          name: "Cloud Account Circular Chart",
          content: {
            chartType: "doughnut",
            data: {
              labels: ["Connected", "Not Connected"],
              datasets: [
                {
                  data: [45, 55],
                  backgroundColor: ["#4CAF50", "#F44336"],
                },
              ],
            },
          },
        },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          content: {
            chartType: "doughnut",
            data: {
              labels: ["Failed", "Warning", "Not Available", "Paused"],
              datasets: [
                {
                  data: [25, 15, 40, 20],
                  backgroundColor: ["#F44336", "#FF9800", "#9E9E9E", "#2196F3"],
                },
              ],
            },
          },
        },
      ],
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [
        {
          id: 4,
          name: "Top 5 Namespace specific alerts",
          content: {
            data: [],
          },
        },
        {
          id: 5,
          name: "Workload Alerts",
          content: {
            data: [],
          },
        },
      ],
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [
        {
          id: 7,
          name: "Image Risk Assessment",
          content: {
            chartType: "line",
            data: {
              labels: ["Critical", "High", "Medium", "Low"],
              datasets: [
                {
                  label: "Image Risk Levels",
                  data: [10, 20, 30, 15],
                  borderColor: "#FF5722",
                  backgroundColor: "rgba(255, 87, 34, 0.2)",
                },
              ],
            },
          },
        },
        {
          id: 8,
          name: "Image Security Issues",
          content: {
            chartType: "line",
            data: {
              labels: ["Critical", "High", "Medium", "Low"],
              datasets: [
                {
                  label: "Security Issues",
                  data: [8, 12, 20, 5],
                  borderColor: "#9C27B0",
                  backgroundColor: "rgba(156, 39, 176, 0.2)",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};

// export const initialData = {
//   categories: [
//     {
//       id: 1,
//       name: "CSPM Executive Dashboard",
//       widgets: [
//         {
//           id: 1,
//           name: "Cloud Account Circular Chart",
//           content: "Circular chart for cloud account",
//         },
//         {
//           id: 2,
//           name: "Cloud Account Risk Assessment",
//           content: "Circular chart for risk assessment",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "CWPP Dashboard",
//       widgets: [
//         {
//           id: 1,
//           name: "Top 5 Namespace specific alerts",
//           content: "No graph data available",
//         },
//         {
//           id: 2,
//           name: "Workload Alerts",
//           content: "No graph data available",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Registry Scan",
//       widgets: [
//         {
//           id: 4,
//           name: "Image Risk Assessment",
//           content: "Line chart for image risk assessment",
//         },
//         {
//           id: 5,
//           name: "Image Security Issues",
//           content: "Line chart for image security issues",
//         },
//       ],
//     },
//   ],
// };
