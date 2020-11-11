import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartSalary = () => {
    const [chartData, setChartData] = useState()

    const chart = () => {
        // dummy data
        setChartData({
            labels: ['$50K', '$75K', '$100K', '$125K', '$150K', '$175K', '$200K'],
            datasets: [
                {
                    label: 'Salary Level',
                    data: [30, 50, 100, 89, 200, 99, 80],
                    backgroundColor: [
                        'rbga(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="chartSalary">
            <h1>Salary Chart</h1>
            <div style= {{height: "50vh", width: "50vw"}}>
                <Line data={chartData} options= {{
                    responsive: true
                }} />
            </div>
        </div>
    )
}

export default ChartSalary;