import React, { useEffect, useRef } from "react";
import { FcComboChart } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Widget = ({ widget, removeWidget }) => {
  // Ref to store the chart instance
  const chartRef = useRef(null);

  const renderContent = () => {
    if (widget.content.chartType === "doughnut" && widget.content.data) {
      console.log("widget.content.data", widget.content.data);
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
    } else if (widget.content.chartType === "line" && widget.content.data) {
      return (
        <Line
          ref={chartRef}
          data={widget.content.data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      );
    } else {
      return (
        <div className="flex-row text-gray-400 justify-items-center text-center">
          <FcComboChart size={60} />
          <p>No graph data available</p>
        </div>
      );
    }
  };

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white border rounded-lg p-3">
      <div className="flex justify-between items-center">
        <h4 className="text-md font-bold mr-5">{widget.name}</h4>
        <button onClick={removeWidget}>
          <RxCross1 />
        </button>
      </div>
      <div className="h-60 my-10">{renderContent()}</div>
    </div>
  );
};

export default Widget;
