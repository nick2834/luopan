import React, { Component } from 'react'
import { Line } from '@ant-design/charts';

export class Charts extends Component {
    constructor(prpos) {
        super(prpos)
    }
    render() {
        const { data } = this.props
        const config = {
            data,
            xField: 'date',
            yField: 'value',
            height: 234,
            xAxis: {
                tickCount: 6,
                line: false,
            },
            color: '#1251ff',
            meta: {
                date: { alias: '日期' },
                value: { alias: '成交金额' },
            },
        };
        return <Line {...config} />
    }
}

export default Charts