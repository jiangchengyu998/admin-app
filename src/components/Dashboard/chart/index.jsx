import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDetail from "./chartDetail";
import ChartSummary from "./chartSummary";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// const ChartComponent = () => {
function ChartComponent(props) {

    return (
        <div className="row col-lg-12 ibox float-e-margins">
            <div className="ibox-title">
                <h5>Orders</h5>
                <div className="pull-right">
                    <div className="btn-group">
                        <button type="button" className="btn btn-xs btn-white active">Today</button>
                        <button type="button" className="btn btn-xs btn-white">Monthly</button>
                        <button type="button" className="btn btn-xs btn-white">Annual</button>
                    </div>
                </div>
            </div>
            <div className="ibox-content">
                <div className="row">
                    <ChartDetail/>
                    <ChartSummary/>
                </div>
            </div>
        </div>
)}

export default ChartComponent;
