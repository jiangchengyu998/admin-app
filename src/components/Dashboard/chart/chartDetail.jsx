import React from 'react';
import {Line} from "react-chartjs-2";

function ChartDetail(props) {
    const data = {
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '订单量',
                data: [30, 50, 28, 50, 56, 50, 40, 80, 60, 70, 90, 100],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                yAxisID: 'y-orders',
                fill: false, // 设置为false，这样数据集不会填充
            },
            {
                label: '收入',
                data: [3000, 4500, 2800, 8000, 560, 5500, 4000, 8000, 600, 7000, 9000, 1000],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                yAxisID: 'y-revenue',
                fill: false, // 设置为false，这样数据集不会填充
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // 让图表不维持宽高比，从而自适应父容器
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: '订单量和收入图表',
            },
        },
        scales: {
            'y-orders': {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: '订单量',
                },
            },
            'y-revenue': {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: '收入',
                },
                // 在这里可以设置不同的最大最小值，以便更好地显示两个数据集
                // beginAtZero: true,
            },
        },
    };

    return (
        <div className="col-lg-9 flot-chart">
            <div className="flot-chart-content">
                <div style={{position: 'relative', width: '100%', height: '100%'}}>
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    );
}

export default ChartDetail;
