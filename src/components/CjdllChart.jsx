import React, { Component } from 'react'
import { Line } from '@ant-design/charts';
const data = [
    { time: "00:00", value: 4, category: "昨日" },
    { time: "00:00", value: 7, category: "今日" },
    { time: "01:00", value: 7, category: "昨日" },
    { time: "01:00", value: 8, category: "今日" },
    { time: "02:00", value: 10, category: "昨日" },
    { time: "02:00", value: 12, category: "今日" },
    { time: "03:00", value: 15, category: "昨日" },
    { time: "03:00", value: 12, category: "今日" },
    { time: "04:00", value: 18, category: "昨日" },
    { time: "04:00", value: 18, category: "今日" },
    { time: "05:00", value: 21, category: "昨日" },
    { time: "05:00", value: 20, category: "今日" },
    { time: "06:00", value: 24, category: "昨日" },
    { time: "06:00", value: 26, category: "今日" },
    { time: "07:00", value: 28, category: "昨日" },
    { time: "07:00", value: 24, category: "今日" },
    { time: "08:00", value: 29, category: "昨日" },
    { time: "08:00", value: 28, category: "今日" },
    { time: "09:00", value: 29, category: "昨日" },
    { time: "09:00", value: 30, category: "今日" },
    { time: "10:00", value: 32, category: "昨日" },
    { time: "10:00", value: 33, category: "今日" },
    { time: "11:00", value: 35, category: "昨日" },
    { time: "11:00", value: 36, category: "今日" },
    { time: "12:00", value: 38, category: "昨日" },
    { time: "12:00", value: 32, category: "今日" },
    { time: "13:00", value: 36, category: "昨日" },
    { time: "13:00", value: 38, category: "今日" },
    { time: "14:00", value: 40, category: "昨日" },
    { time: "14:00", value: 39, category: "今日" },
    { time: "15:00", value: 39, category: "昨日" },
    { time: "15:00", value: 42, category: "今日" },
    { time: "16:00", value: 40, category: "昨日" },
    { time: "16:00", value: 44, category: "今日" },
    { time: "17:00", value: 38, category: "昨日" },
    { time: "17:00", value: 46, category: "今日" },
    { time: "18:00", value: 45, category: "昨日" },
    // { time: "18:00", value: 5278, category: "今日" },
    { time: "19:00", value: 55, category: "昨日" },
    // { time: "19:00", value: 5500, category: "今日" },
    { time: "20:00", value: 48, category: "昨日" },
    // { time: "20:00", value: 5890, category: "今日" },
    { time: "21:00", value: 60, category: "昨日" },
    // { time: "21:00", value: 6000, category: "今日" },
    { time: "22:00", value: 56, category: "昨日" },
    // { time: "22:00", value: 657, category: "今日" },
    { time: "23:00", value: 58, category: "昨日" },
    // { time: "23:00", value: 20, category: "今日" },
]
export class CjdllChart extends Component {
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
                // itemHeight: 5,
                // itemWidth: 5,
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

export default CjdllChart