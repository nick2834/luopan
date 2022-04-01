import React, { Component } from 'react'
import { Column } from '@ant-design/charts';

export class AcountChart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { data } = this.props
        const config = {
            data,
            xField: 'type',
            yField: 'sales',
            label: {
                // 可手动配置 label 数据标签位置
                position: 'middle',
                // 'top', 'bottom', 'middle',
                // 配置样式
                style: {
                    fill: '#FFFFFF',
                    opacity: 0.6,
                },
            },
            color: "#1251ff",
            xAxis: {
                label: {
                    autoHide: true,
                    autoRotate: false,
                },
            },
            meta: {
                type: {
                    alias: '类别',
                },
                sales: {
                    alias: '成交额',
                },
            },
            minColumnWidth: 60,
            maxColumnWidth: 60,
            height: 318,
            width: 770
        };
        return (
            <Column {...config} />
        )
    }
}

export default AcountChart