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
                  backgroundColor: ["#0492c2", "#63c5da"],
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
              labels: ["Failed", "Warning", "Not Available", "Passed"],
              datasets: [
                {
                  data: [25, 15, 40, 20],
                  backgroundColor: ["red", "yellow", "gray", "green"],
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
            chartType: "horizontalBar",
            data: {
              labels: ["Critical", "High", "Medium", "Low", "Nil"],
              datasets: [
                {
                  label: "Risk Levels",
                  data: [20, 20, 30, 15, 3],
                  backgroundColor: [
                    "darkred",
                    "red",
                    "orange",
                    "yellow",
                    "gray",
                  ],
                },
              ],
            },
          },
        },
        {
          id: 8,
          name: "Image Security Issues",
          content: {
            chartType: "horizontalBar",
            data: {
              labels: ["Critical", "High", "Medium", "Low", "Nil"],
              datasets: [
                {
                  label: "Security Issues",
                  data: [8, 12, 20, 5, 1],
                  backgroundColor: [
                    "darkred",
                    "red",
                    "orange",
                    "yellow",
                    "gray",
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
