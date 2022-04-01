import React, { Component } from 'react'
import "./Shfx.less";
import { Line } from '@ant-design/charts';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { data2 } from "../components/config"
import moment from 'moment';
import 'moment/locale/zh-cn';

export class Shfx extends Component {
    state = {
        tabList: [
            { title: "近7天", date: 7 },
            { title: "近30天", date: 30 },
            { title: "近60天", date: 60 },
            { title: "近90天", date: 90 },
            { title: "自然日", date: 1 },
            { title: "自然周", date: 7 },
            { title: "自然月", date: 30 },
        ],
        tabIndex: 3
    }
    handleClick = (tabIndex) => {
        const { tabList } = this.state;
        let d = tabList[tabIndex].date
        let startDate = moment().day(moment().day() - d).format("YYYY/MM/DD");
        let endDate = moment().format("YYYY/MM/DD")
        this.setState({
            tabIndex,
            dateSection: `${startDate} - ${endDate}`
        })
    }
    componentDidMount = () => {
        let startDate = moment().day(moment().day() - 90).format("YYYY/MM/DD");
        let endDate = moment().format("YYYY/MM/DD")
        this.setState({
            dateSection: `${startDate} - ${endDate}`
        })
    }
    render() {
        const { tabList, tabIndex, dateSection } = this.state;
        const config = {
            data: data2,
            xField: 'date',
            yField: 'value',
            height: 385,
            width: 464,
            xAxis: {
                tickCount: 8,
                line: false,
            },
            color: '#1251ff',
            yAxis: { // 设置y轴的样式
                nice: true,
                //   line: { style: { stroke: '#0A122E' } },
                label: {
                    formatter(v) {
                        return v + "%"
                    },
                },
            },
            meta: {
                date: { alias: '日期' },
                value: { alias: '成交金额' },
            },
        }
        return (
            <div className='containerWrapper--b6jo7'>
                <div className='contentWrapper--1aeQx'>
                    <div className='wrapper--3K0rj'>
                        <div className="title--2ZSyt" style={{ fontSize: "16px", lineHeight: "22px" }}>售后分析</div>
                        <div className="children--1L3A0">
                            <a href=" https://school.jinritemai.com/doudian/web/article/113351" target="_blank" rel="noopener noreferrer">帮助中心</a>
                        </div>
                    </div>
                    <div>
                        <div className='wrapper--3K0rj'>
                            <div className="title--2ZSyt" style={{ fontSize: "14px", lineHeight: "20px" }}>售后数据</div>
                            <div className='children--1L3A0'>
                                <div className='cp-date-picker-v2'>
                                    <div className="cp-date-picker-v2-title">统计日期: </div>
                                    <div className="cp-date-picker-v2-time">{dateSection}</div>
                                    <div className="cp-picker-tab" tabindex="1">
                                        <div className="ecom-radio-group ecom-radio-group-outline">
                                            {
                                                tabList.map((item, index) => {
                                                    return (
                                                        <label className={`ecom-radio-button-wrapper ${tabIndex === index && "ecom-radio-button-wrapper-checked"}`} key={index} onClick={() => this.handleClick(index)}>
                                                            <span className={`ecom-radio-button ${tabIndex === index && "ecom-radio-button-checked"}`}>
                                                                <input type="radio" className="ecom-radio-button-input" value="21" />
                                                                <span className="ecom-radio-button-inner"></span></span><span>{item.title}</span>
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="cp-picker-tab-pop-container"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ecom-spin-nested-loading'>
                            <div className='ecom-spin-container'>
                                <div className='container--2_dmp'>
                                    <div className="title--245O4">品质退货率</div>
                                    <div className='content--mupQG'>
                                        <div className='ecom-spin-nested-loading'>
                                            <div className='ecom-spin-container'>
                                                <div className='chart--3wSwG'>
                                                    <div>
                                                        <div style={{ position: "relative" }}>
                                                            <Line {...config} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='box--3R7sW'>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">纠纷发起量</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ color: "rgba(25, 102, 255, 0.8)", fontSize: "14p" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">3.28%</div><div className="xFix--1FI9Y"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>95.2%</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">纠纷商责率</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">1.89%</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>97%</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">投诉率</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">0.23%</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>97%</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">退款自主完结时长</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">8小时</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>96%</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf containerActive--2Rp6p' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ" style={{ color: "rgba(25, 102, 255, 0.8)" }}>品质退货率</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined" style={{ color: "rgba(25, 102, 255, 0.8)" }}><div></div><div className="xFix--1FI9Y" style={{ color: "rgba(25, 102, 255, 0.8)" }}></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">0.19%</div><div className="xFix--1FI9Y" style={{ color: "rgba(25, 102, 255, 0.8)" }}></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y descriptionActive--10sZE">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y descriptionActive--10sZE">优于同行同规模<span style={{ fcolor: "rgb(25, 102, 255)", ontWeight: 500 }}>98%</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">退货退款自主完结时长</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">82小时</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>-</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">纠纷商责率</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">-</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>-</span>的商家</span>
                                            </div>
                                            <div className='container--3iWyf' style={{ marginBottom: "8px", marginLeft: "8px", cursor: "pointer" }}>
                                                <div>
                                                    <div className='wrapper--dFnyT titleValueActive--3IasN'>
                                                        <div className='titleWrapper--3Vyu7'>
                                                            <div className="title--zjgkJ">结算率</div>
                                                            <span className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5'>
                                                                <QuestionCircleOutlined style={{ fontSize: "14px" }} />
                                                            </span>
                                                        </div>
                                                        <div className="valueWrapper--3jbBR" title="-undefined"><div></div><div className="xFix--1FI9Y"></div><div className="preUnit--3JKte"></div>
                                                            <div className="value--2fI2l">20%</div><div className="xFix--1FI9Y" ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="description--1tq-Y">较前30日&nbsp;<div className="cp-change-ratio"><div className="cp-change-ratio-value cp-change-ratio-value-" style={{ fontWeight: 500 }}></div><span className="cp-change-ratio-icon"></span></div></span>
                                                <span className="description--1tq-Y">优于同行同规模<span style={{ fontWeight: 500 }}>98.7</span>的商家</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shfx