// 成交渠道分析
import React, { Component } from 'react'
import SvgIcon from './SvgIcon'
import AcountChart from "./AcountChart"
import ProChart from './ProChart'
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { qdfxData } from './config'
let lastDay = moment().subtract(1, "days").format("YYYY-MM-DD");
let lastWeek = moment().subtract(7, "days").format("YYYY-MM-DD")
let lastMonth = moment().subtract(30, "days").format("YYYY-MM-DD")
export class Cjqdfx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            picker: "month",
            month: 1,
            qdfxJson: qdfxData[0],
            dateChecked: 2,
            dateList: [
                {
                    title: "近一天",
                    picker: "one",
                },
                {
                    title: "近7天",
                    picker: "seven",
                },
                {
                    title: "近30天",
                    picker: "thirty",
                },
                {
                    title: "自然日",
                    picker: "day",
                },
                {
                    title: "自然周",
                    picker: "week",
                },
                {
                    title: "自然月",
                    picker: "month",
                },
                {
                    title: "大促"
                }
            ],
            currentTime: `${lastMonth} ~ ${lastDay}`
        }
    }
    disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }
    openCalender = (index, picker) => {
        let lastDay = moment().subtract(1, "days").format("YYYY-MM-DD");
        let currentTime;
        if (picker === "week") {
            this.setState({ isOpen: false })
        }
        if (picker === "month") {
            this.setState({ isOpen: true })
        }
        if (picker === "thirty") {
            this.setState({
                month: null,
                isOpen: false
            })
        }
        this.setState({ picker, dateChecked: index })
    }
    onChange = (date, dateString) => {
        let qdfxJson;
        let currentTime;
        // console.log(moment(dateString).startOf("month"))
        const month = new Date(dateString).getMonth();
        const year = new Date(dateString).getFullYear();
        let j = qdfxData.find(item => month === item.month)
        qdfxJson = j ? qdfxData.find(item => month === item.month) : qdfxData[0];
        currentTime = `${year}-${month + 1 < 10 ? "0" + (month + 1) : month + 1}-01 ~ ${year}-${month + 1 < 10 ? "0" + (month + 1) : month + 1}-30`
        this.setState({
            isOpen: false, month, qdfxJson,
            currentTime
        })
    }
    render() {
        const { dateList, dateChecked, picker, isOpen, qdfxJson, currentTime } = this.state;

        return (
            <div className='container--7irDk'>
                <div className="topTitle--8_jd3">
                    <div className="wrapper--3ZrzQ">
                        <span className="title--1C-Rc">成交渠道分析</span>
                        <div className="ecom-divider ecom-divider-vertical" role="separator" style={{ height: "14px", top: "0px" }}></div>
                        <span className="subTitle--15ODN">分析渠道，精准投放</span>
                    </div><div className="datePickerWrapper--11DK4">
                        <div className="displayTime--258ca">
                            <div className="renderDisplay--lRNTr">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMTQgMEgwdjE0aDE0VjB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Ik0xLjQ1OCA1LjU0MmgxMS4wODN2Ni4xMjVhLjU4My41ODMgMCAwIDEtLjU4My41ODNIMi4wNDFhLjU4My41ODMgMCAwIDEtLjU4My0uNTgzVjUuNTQyek0xLjQ1OCAyLjYyNWMwLS4zMjIuMjYxLS41ODMuNTgzLS41ODNoOS45MTdjLjMyMiAwIC41ODMuMjYxLjU4My41ODN2Mi45MTdIMS40NThWMi42MjV6IiBzdHJva2U9IiM5Nzk3QTEiIHN0cm9rZS13aWR0aD0iMS4xNjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNC42NjcgMS4xNjdWMy41TTkuMzMzIDEuMTY3VjMuNU04LjE2NyA5LjkxN2gxLjc1TTQuMDgzIDkuOTE3aDEuNzVNOC4xNjcgNy41ODNoMS43NU00LjA4MyA3LjU4M2gxLjc1IiBzdHJva2U9IiM5Nzk3QTEiIHN0cm9rZS13aWR0aD0iMS4xNjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTR2MTRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=" width="14" height="18" />
                                <div className="renderDisplayText--4-c5-">{currentTime}</div>
                            </div>
                        </div>
                        <div className="cp-picker-tab" style={{ display: "flex" }}>
                            <div className="ecom-radio-group ecom-radio-group-outline">
                                {
                                    dateList.map((item, index) => {
                                        return (
                                            <div className={`ecom-radio-button-wrapper ${dateChecked === index && "ecom-radio-button-wrapper-checked"}`} key={index} onClick={() => this.openCalender(index, item.picker)}>
                                                <span className={`ecom-radio-button ${dateChecked === index && "ecom-radio-button-checked"}`}></span>
                                                <span>{item.title}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="cp-picker-tab-pop-container">
                                <DatePicker
                                    className='ecom-picker'
                                    style={{ lineHeight: "20px", padding: "5px 10px 5px 12px" }}
                                    picker={picker}
                                    open={isOpen}
                                    locale={locale}
                                    disabledDate={this.disabledDate}
                                    onChange={this.onChange}
                                    format="YYYY/MM/DD HH:mm:ss"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="combatBar--3PVc8">
                    <div className="barWrapper--3KTx8" style={{ width: "50%" }}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMTAiIGZpbGw9IiMzNUYiLz48cGF0aCBkPSJNMTggMkgydjE2aDE2VjJ6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Im01LjMzMyAxMCAzLjMzMyAzLjMzMyA2LjY2Ny02LjY2NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=" style={{ marginRight: "16px" }} />
                        <div><div className="title--2rKFn cardTitle--33ua3">
                            <span>自营成交金额</span><SvgIcon />
                        </div><div className="valueWrapper---RnMe cardNumber--3GATH">
                                <div></div>
                                <div></div>
                                <div style={{ fontFamily: "Barlow" }}>{qdfxJson.zyje}</div>
                                <div className="attach--3vRa_">

                                </div>
                            </div>
                        </div>
                        <div className="percent--Vb5nQ percentSelected--18YAz" style={{ display: "flex", alignItems: "center" }}>
                            <ProChart change_value={qdfxJson.change_value} />
                            <div style={{ fontFamily: "Barlow" }}>{qdfxJson.change_value.value}%</div>
                        </div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS43NDYgMGgyOS4xMjNjNS45MyAwIDkuOCA2LjIyOCA3LjE3MiAxMS41NDRMMTQuNDE5IDU3LjMxOEExMiAxMiAwIDAgMSAzLjY2IDY0SC43NDZWMHoiIGZpbGw9IiNGN0Y3RkEiLz48L3N2Zz4=" width="42" height="64" className="trapezoidal--3grLj" />
                    </div>
                    <div className="barWrapper--3KTx8 reverse--3gOb-" style={{ width: "50%" }}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAuMDAxIiBjeT0iMTAiIHI9IjkuNSIgc3Ryb2tlPSIjQzZDNkNDIi8+PC9zdmc+" style={{ marginLeft: "16px" }} />
                        <div>
                            <div className="title--2rKFn cardTitle--33ua3">
                                <span>带货成交金额</span><SvgIcon />
                            </div>
                            <div className="valueWrapper---RnMe cardNumber--3GATH">
                                <div></div>
                                <div></div>
                                <div style={{ fontFamily: "Barlow" }}>{qdfxJson.cjje}</div>
                                <div className="attach--3vRa_"></div>
                            </div>
                        </div>
                        <div className="percent--Vb5nQ">-</div>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTS43NDYgMGgyOS4xMjNjNS45MyAwIDkuOCA2LjIyOCA3LjE3MiAxMS41NDRMMTQuNDE5IDU3LjMxOEExMiAxMiAwIDAgMSAzLjY2IDY0SC43NDZWMHoiIGZpbGw9IiNGN0Y3RkEiLz48L3N2Zz4=" width="42" height="64" className="trapezoidal--3grLj" />
                    </div>
                </div>

                <div className="ecom-spin-nested-loading">
                    <div className="ecom-spin-container">
                        <div className="bottomContent--2x5Zx">
                            <div className="overview--1QJpL">
                                <div className="overviewTitle--2_Dtz">各渠道成交情况 <SvgIcon />
                                </div>
                                <div className="indicators--2mPG6">
                                    <div className="indicator--2drRD">
                                        <div className="overviewType--GgWX_">直播</div>
                                        <div className="overviewValue--1FZIU">
                                            <div>¥{qdfxJson.live_gmv}</div>
                                        </div>
                                    </div>
                                    <div className="indicator--2drRD">
                                        <div className="overviewType--GgWX_">短视频</div>
                                        <div className="overviewValue--1FZIU">
                                            <div>¥{qdfxJson.video_gmv}</div>
                                        </div>
                                    </div>
                                    <div className="indicator--2drRD">
                                        <div className="overviewType--GgWX_">商品卡</div>
                                        <div className="overviewValue--1FZIU">
                                            <div>¥{qdfxJson.other_gmv}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="distribution--10wyo">
                                <div className="distributionTitle--2O_5Q">
                                    账户成交金额分布
                                    <span className="ecom-input-group-wrapper ecom-input-search search--2akBD">
                                        <span className="ecom-input-wrapper ecom-input-group">
                                            <span className="ecom-input-affix-wrapper">
                                                <input placeholder="请输入账号名称或抖音号" className="ecom-input" type="text" value="" />
                                                <span className="ecom-input-suffix">
                                                    <span role="button" aria-label="close-circle" tabIndex="-1" className="anticon anticon-close-circle ecom-input-clear-icon-hidden ecom-input-clear-icon">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
                                                    </span>
                                                </span>
                                            </span>
                                            <span className="ecom-input-group-addon">
                                                <button type="button" className="ecom-btn ecom-btn-icon-only ecom-input-search-button">
                                                    <span role="img" aria-label="search" className="anticon anticon-search">
                                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                                                    </span>
                                                </button>
                                            </span>
                                        </span>
                                    </span>
                                    <div className="ecom-radio-group ecom-radio-group-outline" style={{ marginLeft: "16px" }}>
                                        <label className="ecom-radio-button-wrapper ecom-radio-button-wrapper-checked">
                                            <span className="ecom-radio-button ecom-radio-button-checked">
                                                <input type="radio" className="ecom-radio-button-input" value="1" checked="" />
                                                <span className="ecom-radio-button-inner"></span>
                                            </span><span>成交金额趋势</span>
                                        </label>
                                        <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                            <input type="radio" className="ecom-radio-button-input" value="2" />
                                            <span className="ecom-radio-button-inner"></span></span><span>总流量趋势</span>
                                        </label>
                                        <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                            <input type="radio" className="ecom-radio-button-input" value="3" />
                                            <span className="ecom-radio-button-inner"></span></span><span>多维下钻分析</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="distributionDetail--x2jpA">
                                    <AcountChart data={qdfxJson.data} />
                                    {/* <div className="listWrapper--1Hvrg">
                                        <span className="emptyTip--1EbcT">暂无更多账户</span>
                                    </div>
                                    <div className="detailRight--1GqOj">
                                        <div className="ecom-spin-nested-loading">
                                            <div className="ecom-spin-container">
                                                <div>
                                                    <div style={{ position: "relative" }}>
                                                        <AcountChart />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cjqdfx