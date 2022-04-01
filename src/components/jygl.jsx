import React, { Component } from 'react'
import SvgIcon from './SvgIcon'
import DownSvgIcon from "./DownSvgIcon"
import UpSvgIcon from "./UpSvgIcon"
import Charts from './Chart'
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import { data_head } from './config'
export class JYGL extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            picker: "month",
            month: 1,
            headData: data_head[0].value,
            canvasData: data_head[0].data,
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
            ]
        }
    }
    disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }
    openCalender = (index, picker) => {
        // const { picker } = this.dateList[index]
        if (picker === "month") {
            this.setState({ isOpen: true })
        }
        if (picker === "thirty") {
            this.setState({
                headData: data_head[0].value,
                month: null,
                isOpen: false
            })
        }
        this.setState({ picker, dateChecked: index })
    }
    onChange = (date, dateString) => {
        let headData;
        let canvasData;
        const month = new Date(dateString).getMonth();
        let dataH = data_head.find(item => month === item.month);
        headData = dataH ? dataH.value : data_head[0].value;
        canvasData = dataH ? dataH.data : data_head[0].data;
        this.setState({ isOpen: false, month, headData, canvasData })
    }
    render() {
        const { isOpen, picker, headData, dateList, dateChecked, canvasData } = this.state
        return (
            <div className='wrapper--2fbOt'>
                <div className='topTitle--1lvwR'>
                    <div className="wrapper--3ZrzQ"><span className="title--1C-Rc">经营概览</span><div className="ecom-divider ecom-divider-vertical" role="separator" style={{ height: "14px", top: "0px" }}></div><span className="subTitle--15ODN">了解店铺经营情况</span></div>
                </div>

                <div className='bottomContent--1AOAo'>
                    <div className='detail--1LZbH'>
                        <div className='ecom-spin-nested-loading'>
                            <div className='ecom-spin-container'>
                                <div className='cardContent--2_y8x'>
                                    <div className="cardWrapper--2bosx">
                                        <div>
                                            <div className="title--2rKFn cardTitle--3nVZH"><span>自播排名</span>
                                                <SvgIcon />
                                            </div>
                                            <div className='valueWrapper---RnMe'>
                                                <div></div>
                                                <div></div>
                                                <div className="cardNumber--1EFga" style={{ fontFamily: "Barlow" }}>35801</div>
                                                <div className="attach--3vRa_"></div>
                                                <div className="changeValue--3w5h_">
                                                    <div className="changeValueTitle--3qz4o" style={{ marginRight: "4px" }}>环比</div>
                                                    <div className="changeRatioWrap--2i91a">
                                                        <span className="value--r9Is0">
                                                            <UpSvgIcon change_value={{ value: 10 }}></UpSvgIcon>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardWrapper--2bosx">
                                        <div>

                                            <div className="title--2rKFn cardTitle--3nVZH"><span>达播排名</span><SvgIcon /></div>
                                            <div className='valueWrapper---RnMe'>
                                                <div></div>
                                                <div></div>
                                                <div className="cardNumber--1EFga" style={{ fontFamily: "Barlow" }}>21538</div>
                                                <div className="attach--3vRa_"></div>
                                                <div className="changeValue--3w5h_">
                                                    <div className="changeValueTitle--3qz4o" style={{ marginRight: "4px" }}>环比</div>
                                                    <div className="changeRatioWrap--2i91a"><span className="value--r9Is0">
                                                        <UpSvgIcon change_value={{ value: 1.1 }}></UpSvgIcon>
                                                    </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardWrapper--2bosx">
                                        <div>
                                            <div className="title--2rKFn cardTitle--3nVZH"><span>商家体验分</span><SvgIcon /></div>
                                            <div className='valueWrapper---RnMe'>
                                                <div></div>
                                                <div></div>
                                                <div className="cardNumber--1EFga" style={{ fontFamily: "Barlow" }}>4.97</div>
                                                <div className="attach--3vRa_"></div>
                                                <div className="changeValue--3w5h_">
                                                    <div className="changeValueTitle--3qz4o" style={{ marginRight: "4px" }}>环比</div>
                                                    <div className="changeRatioWrap--2i91a"><span className="value--r9Is0">
                                                        <UpSvgIcon change_value={{ value: 0.1 }}></UpSvgIcon>
                                                    </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardWrapper--2bosx">
                                        <div>
                                            <div className="title--2rKFn cardTitle--3nVZH"><span>物流指数</span><SvgIcon /></div>
                                            <div className='valueWrapper---RnMe'>
                                                <div></div>
                                                <div></div>
                                                <div className="cardNumber--1EFga" style={{ fontFamily: "Barlow" }}>4.90</div>
                                                <div className="attach--3vRa_"></div>
                                                <div className="changeValue--3w5h_">
                                                    <div className="changeValueTitle--3qz4o" style={{ marginRight: "4px" }}>环比</div>
                                                    <div className="changeRatioWrap--2i91a"><span className="value--r9Is0">
                                                        <UpSvgIcon change_value={{ value: 0.00 }}></UpSvgIcon>
                                                    </span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="detailTop--3tA1v">
                            <div className='topLeft--2wfLL'>详细数据</div>
                            <div className='topRight--1ghDp'>
                                <div className='datePickerWrapper--11DK4'>
                                    <div className='displayTime--258ca'>
                                        <div className="renderDisplay--lRNTr">
                                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMTQgMEgwdjE0aDE0VjB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Ik0xLjQ1OCA1LjU0MmgxMS4wODN2Ni4xMjVhLjU4My41ODMgMCAwIDEtLjU4My41ODNIMi4wNDFhLjU4My41ODMgMCAwIDEtLjU4My0uNTgzVjUuNTQyek0xLjQ1OCAyLjYyNWMwLS4zMjIuMjYxLS41ODMuNTgzLS41ODNoOS45MTdjLjMyMiAwIC41ODMuMjYxLjU4My41ODN2Mi45MTdIMS40NThWMi42MjV6IiBzdHJva2U9IiM5Nzk3QTEiIHN0cm9rZS13aWR0aD0iMS4xNjciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNC42NjcgMS4xNjdWMy41TTkuMzMzIDEuMTY3VjMuNU04LjE2NyA5LjkxN2gxLjc1TTQuMDgzIDkuOTE3aDEuNzVNOC4xNjcgNy41ODNoMS43NU00LjA4MyA3LjU4M2gxLjc1IiBzdHJva2U9IiM5Nzk3QTEiIHN0cm9rZS13aWR0aD0iMS4xNjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMTR2MTRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=" width="14" height="18" />
                                            {/* <div className="renderDisplayText--4-c5-">2022-02-05 ~ 2022-03-06</div> */}
                                        </div>
                                    </div>
                                    <div className='cp-picker-tab' style={{ display: "flex" }}>
                                        <div className='ecom-radio-group ecom-radio-group-outline'>
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
                                        <div className='cp-picker-tab-pop-container'>
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
                                <div className="ecom-select select--_gDn3 ecom-select-single ecom-select-show-arrow">
                                    <div className="ecom-select-selector">
                                        <span className="ecom-select-selection-search"></span>
                                        <span className="ecom-select-selection-item" title="整体视角">整体视角</span>
                                    </div>
                                    <span className="ecom-select-arrow" unselectable="on" aria-hidden="true" style={{ userSelect: "none" }}>
                                        <span role="img" aria-label="down" className="anticon anticon-down ecom-select-suffix">
                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
                                        </span>
                                    </span>
                                </div>
                                <button type="button" className="ecom-btn ecom-btn-default cp-data-download" style={{ width: "30px", height: "30px", padding: "8px", minWidth: "auto", flex: "0 0 auto", lineHeight: "14px", border: "none" }}>
                                    <span className="cp-data-download-icon">
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDBIMHYxNGgxNFYweiIvPjxwYXRoIGQ9Ik0xMS44MTggMTAuMDA5QTIuNjg2IDIuNjg2IDAgMCAwIDEyLjgzNCA3Yy0uMzU0LTEuMTE3LTEuNDM4LTEuNzMtMi42MS0xLjcyOGgtLjY3N2E0LjI5OCA0LjI5OCAwIDEgMC03LjM4MiAzLjkxN003LjAwMiAxMS45NTggNyA2LjcwOE04Ljg1NiAxMC4xMDIgNyAxMS45NThsLTEuODU2LTEuODU2IiBzdHJva2U9IiMxODFBMjUiLz48L3N2Zz4=" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className='ecom-spin-nested-loading'>
                            <div className='ecom-spin-container'>
                                <div className='detailBottom--2O8-R'>
                                    <div className='cardsWrapper--1jYhe'>
                                        <div className='contentWrapper--3GBmZ'>
                                            {
                                                headData.map((item, index) => {
                                                    return (
                                                        <div className={`cardWrapper--1K6rG ${index === 0 ? 'active--3xp7x' : ''}`} key={index}>
                                                            <div className='topWrapper--FuAVV'>
                                                                <div>
                                                                    <div className='title--2rKFn cardTitle--mzwOq'>
                                                                        <span>{item.index_display}</span><SvgIcon />
                                                                    </div>
                                                                    <div className="valueWrapper---RnMe" style={{ fontSize: "24px" }}>
                                                                        <div></div>
                                                                        {item.index_time ? <></> : <div>¥</div>}
                                                                        <div className="cardNumber--Zii8y" style={{ fontFamily: "Barlow" }}>{item.value.value}</div>
                                                                        <div className="attach--3vRa_"></div>
                                                                    </div>
                                                                </div>
                                                                <label className={`ecom-checkbox-wrapper ${index === 0 && "ecom-checkbox-wrapper-checked"} checkBox--3axUJ`}>
                                                                    <span className={`ecom-checkbox ${index === 0 && "ecom-checkbox-checked"}`}>
                                                                        <input type="checkbox" className="ecom-checkbox-input" value="" checked="" />
                                                                        <span className="ecom-checkbox-inner"></span></span>
                                                                </label>
                                                            </div>
                                                            <div className='bottomWrapper--3tOFt'>
                                                                <div className="bottomTitle--3Au_M">较前7天</div>
                                                                {
                                                                    item.change_value.unit === "nan" ? <DownSvgIcon change_value={item.change_value} /> : <UpSvgIcon change_value={item.change_value} />
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="pagination--3dBcg"><div className="itemWrapper--gg_A3"><div className="item--2Y3_A" style={{ background: "rgb(18, 81, 255)" }}></div></div><div className="itemWrapper--gg_A3"><div className="item--2Y3_A"></div></div><div className="itemWrapper--gg_A3"><div className="item--2Y3_A" ></div></div></div>
                                    </div>
                                    {/* canvas */}
                                    <div className='chart--2oy52' sensor-id="8">
                                        <div style={{ position: "relative" }}>
                                            <Charts data={canvasData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='businessGuide--2ywm4'>
                        <div style={{ marginBottom: "16px", display: "flex" }}>数据化运营<a style={{ marginLeft: "auto" }}>查看全部</a></div>


                        <div className="guideItem--3Bd_3">
                            <div className="ecom-sp-img-default img-default-wrapper  " style={{ borderRadius: "8px", minWidth: "56px", width: "56px", height: "48px", backgroundImage: "none" }}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/5f6ae53fbd019ecd660e99577b861934.svg~tplv-n15nrygpm8-image.image" width="56" height="48" alt="" /></div>
                            <div className="rightContent--bVEyP">
                                <div className="guideTitle--1hFah">用罗盘识别经营概况</div>
                                <div className="guideDescription--1CRM1">店铺运营/直播/短视频/货品场景全覆盖</div>
                            </div>
                        </div>
                        <div className="guideItem--3Bd_3">
                            <div className="ecom-sp-img-default img-default-wrapper  " style={{ borderRadius: "8px", minWidth: "56px", width: "56px", height: "48px", backgroundImage: "none" }}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/711845965ef190c66f4d92df55ac7083.svg~tplv-n15nrygpm8-image.image" width="56" height="48" alt="" /></div>
                            <div className="rightContent--bVEyP">
                                <div className="guideTitle--1hFah">学会分析店铺交易构成</div>
                                <div className="guideDescription--1CRM1">清晰了解店铺成交来源，不用到处找数据</div>
                            </div>
                        </div>
                        <div className="guideItem--3Bd_3">
                            <div className="ecom-sp-img-default img-default-wrapper  " style={{ borderRadius: "8px", minWidth: "56px", width: "56px", height: "48px", backgroundImage: "none" }}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/33d5a8ffd9bbf8aa7ae9098026ed0865.svg~tplv-n15nrygpm8-image.image" width="56" height="48" alt="" /></div>
                            <div className="rightContent--bVEyP">
                                <div className="guideTitle--1hFah">罗盘直播复盘攻略</div>
                                <div className="guideDescription--1CRM1">三步学会直播复盘，日报周报统计不愁</div>
                            </div>
                        </div>
                        <div className="guideItem--3Bd_3">
                            <div className="ecom-sp-img-default img-default-wrapper  " style={{ borderRadius: "8px", minWidth: "56px", width: "56px", height: "48px", backgroundImage: "none" }}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/701e718919859dd0fbdb57445c8b7690.svg~tplv-n15nrygpm8-image.image" width="56" height="48" alt="" /></div>
                            <div className="rightContent--bVEyP">
                                <div className="guideTitle--1hFah">罗盘帮你挖掘潜在爆品</div>
                                <div className="guideDescription--1CRM1">快速识别行业爆款趋势、自身潜力爆款/新品</div>
                            </div>
                        </div>
                        <div className="guideItem--3Bd_3">
                            <div className="ecom-sp-img-default img-default-wrapper  " style={{ borderRadius: "8px", minWidth: "56px", width: "56px", height: "48px", backgroundImage: "none" }}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/9f8f79cbb73e82e43f62e416ff99204b.svg~tplv-n15nrygpm8-image.image" width="56" height="48" alt="" /></div>
                            <div className="rightContent--bVEyP">
                                <div className="guideTitle--1hFah">罗盘助你找到优秀学习对象</div>
                                <div className="guideDescription--1CRM1">轻松找到同行业优秀商家、相似商家</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default JYGL