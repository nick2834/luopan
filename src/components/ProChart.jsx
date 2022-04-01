import React, { Component } from 'react'
import { RingProgress } from '@ant-design/charts';
export class ProChart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.change_value)
        const { change_value: { value, unit } } = this.props;
        let color = ['#1251ff', '#ebf0ff']
        if (unit === "nan") {
            color = ['#c6c6cc', '#f7f7fa']
        }
        console.log(value)
        const config = {
            height: 60,
            width: 60,
            autoFit: false,
            percent: value / 100,
            color,
            innerRadius: 0.3,
            radius: 0.58,
            statistic: false
        }
        return (
            <RingProgress {...config} />
        )
    }
}

export default ProChart