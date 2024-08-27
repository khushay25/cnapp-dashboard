import React, { useEffect, useRef, useState } from "react";
import { FcComboChart } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ widget, removeWidget }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const chartRef = useRef(null);

  const handleRemoveClick = () => {
    // Show confirmation dialog
    setShowConfirmation(true);
  };

  const confirmRemoval = () => {
    // Confirm removal and call removeWidget
    removeWidget(widget.id); // Pass the widget ID or identifier
    setShowConfirmation(false);
  };

  const cancelRemoval = () => {
    // Cancel removal and close the confirmation dialog
    setShowConfirmation(false);
  };

  const renderContent = () => {
    if (widget.content.chartType === "doughnut" && widget.content.data) {
      return (
        <Doughnut
          ref={chartRef}
          data={widget.content.data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      );
    } else if (
      widget.content.chartType === "horizontalBar" &&
      widget.content.data
    ) {
      return (
        <Bar
          ref={chartRef}
          data={widget.content.data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      );
    } else {
      return (
        <div className="flex flex-col text-gray-400 justify-center items-center h-full">
          <FcComboChart size={60} />
          <p>No graph data available</p>
        </div>
      );
    }
  };

  useEffect(() => {
    return () => {
      // Ensure chart instance cleanup
      if (chartRef.current && chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white border rounded-lg p-3 w-1/3">
      <div className="flex justify-between items-center">
        <h4 className="text-md font-bold mr-5">{widget.name}</h4>
        <button onClick={handleRemoveClick} className="text-red-500">
          <RxCross1 size={24} />
        </button>
      </div>
      <div className="h-60 my-10">{renderContent()}</div>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <p>Are you sure you want to remove this widget?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={confirmRemoval}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Confirm
              </button>
              <button
                onClick={cancelRemoval}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Widget;
