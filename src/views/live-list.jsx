import React, { Component } from 'react'
import { Tabs, DatePicker, Select } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { lives } from "./config";
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import "./live-list.less";
const { TabPane } = Tabs;

const { Option } = Select;

export class liveList extends Component {
    state = {
        tabList: [
            { title: "直播日历" },
            { title: "直播间明细" }
        ],
        tabIndex: 0,
        dateList: [
            { title: "日", date: "" },
            { title: "周", date: "week" },
            { title: "月", date: "month" }
        ],
        dateIndex: 2,
        datePicker: "month",
        optionList: [
            { title: "全部账号", value: "0" },
            { title: "官方账号", value: "1" },
            { title: "渠道账号", value: "2" },
            { title: "授权账号", value: "3" },
            { title: "联盟带货", value: "4" }
        ],
        defaultValue: "0",
        defaultData: lives[2],
        defaultMonth: "3月"
    }
    disabledDate = (current) => {
        const { datePicker } = this.state;
        // Can not select days before today and today
        return current && current > moment().endOf('day');
    }
    onChange = (date, dateString) => {
        let mon = new Date(date._d).getMonth()
        console.log(new Date(date._d).getMonth(), dateString)
        this.setState({
            defaultData: lives[mon],
            defaultMonth: `${mon + 1}月`
        })
    }
    handleClick = (index) => {
        const { dateList } = this.state;
        this.setState({
            datePicker: dateList[index].date,
            dateIndex: index
        })
    }
    render() {
        const { tabIndex, tabList, dateList, dateIndex, datePicker, optionList, defaultValue, defaultData, defaultMonth } = this.state;
        return (
            <div className='containerWrapper--b6jo7'>
                <div className='contentWrapper--1aeQx'>
                    <div className='wrap--2qXt5'>
                        <div className='tabWrap--QwpTX'>
                            <Tabs defaultActiveKey={tabIndex}>
                                {
                                    tabList.map((item, index) => {
                                        return (
                                            <TabPane tab={
                                                <span>
                                                    {item.title}
                                                    {index === 0 && <QuestionCircleOutlined style={{ marginLeft: "2px" }} />}
                                                </span>
                                            } key={index}></TabPane>
                                        )
                                    })
                                }
                            </Tabs>
                            <div className='spinWrap--bUd2K'>
                                <div className='ecom-spin-nested-loading'>
                                    <div className='ecom-spin-container'>
                                        <div className='wrap--ymf5b'>
                                            <div className='searchColumn--3l336'>
                                                <div className='dateWrap--1U5-5'>
                                                    <div className='titleWrap--2jcEj'>
                                                        <div className="text--2AK80">时间筛选</div>
                                                        <div className='pickerWrap--K8DTM'>
                                                            <div className='cp-picker-tab' style={{ display: "flex" }}>
                                                                <div className="ecom-radio-group ecom-radio-group-outline">
                                                                    {
                                                                        dateList.map((item, index) => {
                                                                            return (
                                                                                <label className={`ecom-radio-button-wrapper ${dateIndex === index && 'ecom-radio-button-wrapper-checked'}`} key={index} onClick={() => this.handleClick(index)}>
                                                                                    <span className={`ecom-radio-button ${dateIndex === index && 'ecom-radio-button-checked'}`}>
                                                                                        <input type="radio" className="ecom-radio-button-input" value="date" checked="" />
                                                                                        <span className="ecom-radio-button-inner"></span>
                                                                                    </span>
                                                                                    <span>{item.title}</span>
                                                                                </label>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>

                                                                <div className='cp-picker-tab-pop-container'>
                                                                    <DatePicker
                                                                        className='ecom-picker'
                                                                        locale={locale}
                                                                        showToday={false}
                                                                        onChange={this.onChange}
                                                                        open={true}
                                                                        dropdownClassName={"ecom-picker-dropdown pickerTab--1wfY9 ecom-picker-dropdown-placement-bottomLeft"}
                                                                        getPopupContainer={triggerNode => triggerNode.parentNode}
                                                                        picker={datePicker}
                                                                        disabledDate={this.disabledDate}
                                                                        format="YYYY-MM-DD HH:mm:ss"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='listColumn--aIhra'>
                                                <div className='listHeadWrap--2VCs2'>
                                                    <div className='leftWrap--1k-Wl'>
                                                        <div className="date--18Upi">{defaultMonth}</div>
                                                        <Select defaultValue={defaultValue} style={{ width: 248 }}>
                                                            {
                                                                optionList.map((item, index) => {
                                                                    return <Option key={index} value={item.value}>{item.title}</Option>
                                                                })
                                                            }
                                                        </Select>
                                                    </div>
                                                    <div className="rightWrap--3JroA">
                                                        <div className="headIndexWrap--1KRsI">
                                                            <div className="cp-number-card card--1fmeJ" style={{ width: "178px" }}>
                                                                <div className="cp-number-card-title-wrapper" style={{ marginBottom: "4px" }}>
                                                                    <div className="cp-number-card-title" style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>直播间成交金额</div>
                                                                </div>
                                                                <div className="cp-number-card-value-wrapper" title="-undefined">
                                                                    <div></div>
                                                                    <div className="cp-number-card-value-prefix" style={{ fontSize: "14px", lineHeight: "20px", alignItems: "center", color: "rgb(18, 20, 26)" }}>
                                                                    </div>
                                                                    <div className="cp-number-card-value-unit">￥</div>
                                                                    <div className="cp-number-card-value" style={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px", alignItems: "center", color: "rgb(18, 20, 26)" }}>{defaultData.zbjcjje}</div>
                                                                    <div className="cp-number-card-value-suffix" style={{ fontSize: '14px', lineHeight: '20px', alignItems: 'center', color: 'rgb(18, 20, 26)' }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="ecom-divider ecom-divider-vertical divider--1QAft" role="separator"></div>
                                                            <div className="cp-number-card card--1fmeJ" style={{ width: "90px" }}>
                                                                <div className="cp-number-card-title-wrapper" style={{ marginBottom: "4px" }}>
                                                                    <div className="cp-number-card-title" style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>直播间数</div>
                                                                </div>
                                                                <div className="cp-number-card-value-wrapper" title="-undefined">
                                                                    <div></div>
                                                                    <div className="cp-number-card-value-prefix" style={{ fontSize: "14px", lineHeight: "20px", alignItems: "center", color: "rgb(18, 20, 26)" }}>
                                                                    </div>
                                                                    <div className="cp-number-card-value-unit"></div>
                                                                    <div className="cp-number-card-value" style={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px", alignItems: "center", color: "rgb(18, 20, 26)" }}>{defaultData.zbjs}</div>
                                                                    <div className="cp-number-card-value-suffix" style={{ fontSize: '14px', lineHeight: '20px', alignItems: 'center', color: 'rgb(18, 20, 26)' }}></div>
                                                                </div>
                                                            </div>
                                                            <div className="ecom-divider ecom-divider-vertical divider--1QAft" role="separator"></div>
                                                            <div className="cp-number-card card--1fmeJ" style={{ width: "90px" }}>
                                                                <div className="cp-number-card-title-wrapper" style={{ marginBottom: "4px" }}>
                                                                    <div className="cp-number-card-title" style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>观看人次</div>
                                                                </div>
                                                                <div className="cp-number-card-value-wrapper" title="-undefined">
                                                                    <div></div>
                                                                    <div className="cp-number-card-value-prefix" style={{ fontSize: "14px", lineHeight: "20px", alignItems: "center", color: "rgb(18, 20, 26)" }}>
                                                                    </div>
                                                                    <div className="cp-number-card-value-unit"></div>
                                                                    <div className="cp-number-card-value" style={{ fontWeight: 500, fontSize: "20px", lineHeight: "28px", alignItems: "center", color: "rgb(18, 20, 26)" }}>{defaultData.gkrc}</div>
                                                                    <div className="cp-number-card-value-suffix" style={{ fontSize: '14px', lineHeight: '20px', alignItems: 'center', color: 'rgb(18, 20, 26)' }}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='orderWrap--1qz2W'>
                                                    <div className="text--2AK80">排序：</div>
                                                    <div className='indexWrap--hRu_N'>
                                                        <div className="indexText--3j_th active--2G3G7">直播间成交金额</div>
                                                        <div className='arrowWrap--1xtWn'>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 0.518782C4.77702 0.23784 5.22298 0.237841 5.48636 0.518782L8.94754 4.21071C9.3467 4.63648 9.04481 5.33333 8.46118 5.33333H1.53882C0.955195 5.33333 0.653297 4.63648 1.05246 4.21071L4.51364 0.518782Z" fill="#DCDDE0" className="upArrow--3Mkid"></path></svg>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 5.48122C4.77702 5.76216 5.22298 5.76216 5.48636 5.48122L8.94754 1.78929C9.3467 1.36352 9.04481 0.666667 8.46118 0.666667H1.53882C0.955195 0.666667 0.653297 1.36352 1.05246 1.78929L4.51364 5.48122Z" fill="#1966FF"></path></svg>
                                                        </div>
                                                    </div>
                                                    <div className="ecom-divider ecom-divider-vertical divider--1QAft" role="separator"></div>
                                                    <div className='indexWrap--hRu_N'>
                                                        <div className="indexText--3j_th">直播间观看人次</div>
                                                        <div className='arrowWrap--1xtWn'>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 0.518782C4.77702 0.23784 5.22298 0.237841 5.48636 0.518782L8.94754 4.21071C9.3467 4.63648 9.04481 5.33333 8.46118 5.33333H1.53882C0.955195 5.33333 0.653297 4.63648 1.05246 4.21071L4.51364 0.518782Z" fill="#DCDDE0" className="upArrow--3Mkid"></path></svg>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 5.48122C4.77702 5.76216 5.22298 5.76216 5.48636 5.48122L8.94754 1.78929C9.3467 1.36352 9.04481 0.666667 8.46118 0.666667H1.53882C0.955195 0.666667 0.653297 1.36352 1.05246 1.78929L4.51364 5.48122Z" fill="#DCDDE0"></path></svg>
                                                        </div>
                                                    </div>
                                                    <div className="ecom-divider ecom-divider-vertical divider--1QAft" role="separator"></div>
                                                    <div className='indexWrap--hRu_N'>
                                                        <div className="indexText--3j_th">千次观看成交金额</div>
                                                        <div className='arrowWrap--1xtWn'>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 0.518782C4.77702 0.23784 5.22298 0.237841 5.48636 0.518782L8.94754 4.21071C9.3467 4.63648 9.04481 5.33333 8.46118 5.33333H1.53882C0.955195 5.33333 0.653297 4.63648 1.05246 4.21071L4.51364 0.518782Z" fill="#DCDDE0" className="upArrow--3Mkid"></path></svg>
                                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M4.51364 5.48122C4.77702 5.76216 5.22298 5.76216 5.48636 5.48122L8.94754 1.78929C9.3467 1.36352 9.04481 0.666667 8.46118 0.666667H1.53882C0.955195 0.666667 0.653297 1.36352 1.05246 1.78929L4.51364 5.48122Z" fill="#DCDDE0"></path></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='ecom-spin-nested-loading'>
                                                    <div className='ecom-spin-container'>
                                                        <div className='listWrap--3ML3-'>
                                                            <div>
                                                                {
                                                                    defaultData.list.map((item, index) => {
                                                                        return (
                                                                            <div className="card--1fmeJ" key={index}>
                                                                                <div className='authorWrap--2jwCj'>
                                                                                    <div className='imgWrap--20mpA'>
                                                                                        <img className='avatar--1cZnJ' src={item.avatar} alt="" />
                                                                                    </div>
                                                                                    <div className='authorInfo--2kBjk'>
                                                                                        <div className="name--3OXp2"><div className="nickname--240vp">{item.nickname}</div><div className="tag--1V_gf channelTag--pbCr2">{item.tag}</div></div>
                                                                                        <div className="time--1J-Ei">开播时间：{item.time}</div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='indexWrap--hRu_N'>
                                                                                    <div className="wrapper--dFnyT" style={{ width: "139px" }}>
                                                                                        <div className='titleWrapper--3Vyu7'>
                                                                                            <div className='title--zjgkJ' style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>直播间成交金额</div>
                                                                                        </div>
                                                                                        <div className='valueWrapper--3jbBR' style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "rgb(18, 20, 26)" }}>
                                                                                            <div className='preUnit--3JKte'>￥</div>
                                                                                            <div className="value--2fI2l">{item.cjje}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="wrapper--dFnyT" style={{ width: "72px" }}>
                                                                                        <div className='titleWrapper--3Vyu7'>
                                                                                            <div className='title--zjgkJ' style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>观看人次</div>
                                                                                            <QuestionCircleOutlined className='ecom-sp-icon sp-icon-parcel questionIcon--nu9_5' />
                                                                                        </div>
                                                                                        <div className='valueWrapper--3jbBR' style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "rgb(18, 20, 26)" }}>
                                                                                            <div className="value--2fI2l">{item.gkrc}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="wrapper--dFnyT" style={{ width: "118px" }}>
                                                                                        <div className='titleWrapper--3Vyu7'>
                                                                                            <div className='title--zjgkJ' style={{ fontSize: "12px", lineHeight: "18px", color: "rgb(85, 88, 92)" }}>千次观看成交金额</div>
                                                                                        </div>
                                                                                        <div className='valueWrapper--3jbBR' style={{ fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "rgb(18, 20, 26)" }}>
                                                                                            <div className='preUnit--3JKte'>￥</div>
                                                                                            <div className="value--2fI2l">{item.qcqjje}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="btnWrap--3QUdq">
                                                                                    <div className="btn--1bfGS leftBtn--2k-Re">直播PK</div><div className="btn--1bfGS rightBtn--aRzE2"><img className="rightImg--3Qe-F" src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/3395653f5b3b3ba86230764bed7c56d2.png~tplv-n15nrygpm8-png.png" />详情</div>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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

export default liveList