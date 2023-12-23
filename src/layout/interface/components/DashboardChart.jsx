import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRevenue } from "../../../api/RevenueApi";

ChartJS.register(
  CategoryScale,
  LinearScale,

  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
     return `User-${cart.userId}`
      });
      const data = res.carts.map((price) => {
        return price.discountedTotal;
      });

      const revenueSource = {
        labels,
        datasets: [
          {
            label: "Revenue ",
            data: data,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
      setRevenueData(revenueSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return <Bar data={revenueData} options={options} />;
};

export default DashboardChart;
