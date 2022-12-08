import React from "react";
import "./styles.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, options }) {
    return (
        <Line  data={chartData} options={options} />
    )
}


export default LineChart;