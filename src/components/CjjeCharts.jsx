import React, { Component } from 'react'
import { Line } from '@ant-design/charts';
const data = [
    { time: "00:00", value: 1000, category: "昨日" },
    { time: "00:00", value: 787, category: "今日" },
    { time: "01:00", value: 1345, category: "昨日" },
    { time: "01:00", value: 1098, category: "今日" },
    { time: "02:00", value: 1290, category: "昨日" },
    { time: "02:00", value: 1145, category: "今日" },
    { time: "03:00", value: 1499, category: "昨日" },
    { time: "03:00", value: 1308, category: "今日" },
    { time: "04:00", value: 1900, category: "昨日" },
    { time: "04:00", value: 1587, category: "今日" },
    { time: "05:00", value: 2307, category: "昨日" },
    { time: "05:00", value: 1788, category: "今日" },
    { time: "06:00", value: 2678, category: "昨日" },
    { time: "06:00", value: 2365, category: "今日" },
    { time: "07:00", value: 3007, category: "昨日" },
    { time: "07:00", value: 2565, category: "今日" },
    { time: "08:00", value: 3289, category: "昨日" },
    { time: "08:00", value: 2800, category: "今日" },
    { time: "09:00", value: 3598, category: "昨日" },
    { time: "09:00", value: 3089, category: "今日" },
    { time: "10:00", value: 3789, category: "昨日" },
    { time: "10:00", value: 3276, category: "今日" },
    { time: "11:00", value: 4098, category: "昨日" },
    { time: "11:00", value: 3576, category: "今日" },
    { time: "12:00", value: 4298, category: "昨日" },
    { time: "12:00", value: 3756, category: "今日" },
    { time: "13:00", value: 4709, category: "昨日" },
    { time: "13:00", value: 4008, category: "今日" },
    { time: "14:00", value: 5003, category: "昨日" },
    { time: "14:00", value: 4378, category: "今日" },
    { time: "15:00", value: 5367, category: "昨日" },
    { time: "15:00", value: 4655, category: "今日" },
    { time: "16:00", value: 5789, category: "昨日" },
    { time: "16:00", value: 4878, category: "今日" },
    { time: "17:00", value: 6089, category: "昨日" },
    { time: "17:00", value: 5000, category: "今日" },
    { time: "18:00", value: 6200, category: "昨日" },
    // { time: "18:00", value: 5278, category: "今日" },
    { time: "19:00", value: 6509, category: "昨日" },
    // { time: "19:00", value: 5500, category: "今日" },
    { time: "20:00", value: 6689, category: "昨日" },
    // { time: "20:00", value: 5890, category: "今日" },
    { time: "21:00", value: 6800, category: "昨日" },
    // { time: "21:00", value: 6000, category: "今日" },
    { time: "22:00", value: 7009, category: "昨日" },
    // { time: "22:00", value: 657, category: "今日" },
    { time: "23:00", value: 7200, category: "昨日" },
    // { time: "23:00", value: 20, category: "今日" },
]
export class CjjeCharts extends Component {
    render() {
        const config = {
            data,
            xField: 'time',
            yField: 'value',
            height: 120,
            with: 270,
            seriesField: 'category',
            yAxis: {
                line: false,
                grid: {
                    line: false
                },
                label: false
            },
            xAxis: {
                line: false,
                grid: {
                    line: false
                },
                label: false
            },
            legend: {
                marker: (name, index, item) => {
                    return {
                        symbol: 'circle',
                        style: {
                            fill: index === 0 ? '#1251ff' : '#37d4cf',
                            // stroke: '#363636',
                            lineWidth: 0,
                        },
                    };
                },
            },
            color: ['#1251ff', "#37d4cf"]
        };
        return <Line {...config} />
    }
}

export default CjjeCharts