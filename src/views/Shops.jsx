import React, { Component } from 'react';
import { Table, Spin } from 'antd';
import SvgIcon from '../components/SvgIcon'
import { FXZBLIST } from './config'
import { Line } from '@ant-design/charts';
import { data } from "../components/config"
import moment from 'moment';
import 'moment/locale/zh-cn';
import "./Shops.less"

export class Shops extends Component {
    state = {
        activeIndex: 0,
        dateSection: "",
        loading: true
    }
    handleClick = (activeIndex) => {
        this.setState({ activeIndex })
    }
    componentDidMount = () => {
        document.title = "商品概览-抖音电商罗盘"
        let startDate = moment().day(moment().day() - 30).format("YYYY/MM/DD");
        let endDate = moment().format("YYYY/MM/DD")
        this.setState({
            dateSection: `${startDate} - ${endDate}`
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1200);
    }
    render() {
        const columns = [
            {
                title: '商品信息',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '带货达人',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '成交金额',
                dataIndex: 'address',
                key: 'address',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '成交件数',
                dataIndex: 'address',
                key: 'address',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '实际结算金额',
                dataIndex: 'address',
                key: 'address',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '退款金额',
                dataIndex: 'address',
                key: 'address',
                sorter: (a, b) => a.age - b.age,
            },
            {
                title: '操作',
                dataIndex: 'address',
                key: 'address',
            }
        ]
        const config = {
            data,
            xField: 'date',
            yField: 'value',
            height: 492,
            width: 664,
            xAxis: {
                tickCount: 6,
                line: false,
            },
            color: '#ffc704',
            meta: {
                date: { alias: '日期' },
                value: { alias: '成交金额' },
            },
        };
        const { activeIndex, dateSection } = this.state;
        return (
            <Spin spinning={this.state.loading} tip="加载中...">
                <div className='basicWrapper--2VwiJ'>
                    <div className='contentWrapper--1aeQx'>
                        <div>
                            <div className='titleWrapper--S4m1E' style={{ margin: "0px 0px 16px" }}>
                                <div className="leftSection--3jP_s"><div className="nameWrapper--2onL1"><div className="name--1MVXX">商品概览</div></div></div>
                                <div className='rightSection--2aFIP'>
                                    <div className="cp-date-picker-v2" style={{ justifyContent: "flex-end" }}>
                                        <div className="cp-date-picker-v2-title">统计周期: </div>
                                        <div className="cp-date-picker-v2-time">{dateSection}</div>
                                        <div className="cp-picker-tab">
                                            <div className="ecom-radio-group ecom-radio-group-outline">
                                                <label className="ecom-radio-button-wrapper">
                                                    <span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="22" />
                                                        <span className="ecom-radio-button-inner"></span>
                                                    </span><span>近1天</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                    <input type="radio" className="ecom-radio-button-input" value="21" />
                                                    <span className="ecom-radio-button-inner"></span></span><span>近7天</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper ecom-radio-button-wrapper-checked"><span className="ecom-radio-button ecom-radio-button-checked">
                                                    <input type="radio" className="ecom-radio-button-input" value="23" checked="" />
                                                    <span className="ecom-radio-button-inner"></span></span><span>近30天</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                    <input type="radio" className="ecom-radio-button-input" value="2" />
                                                    <span className="ecom-radio-button-inner">
                                                    </span>
                                                </span>
                                                    <span>自然日</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                    <input type="radio" className="ecom-radio-button-input" value="3" />
                                                    <span className="ecom-radio-button-inner"></span></span><span>自然周</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                    <input type="radio" className="ecom-radio-button-input" value="4" />
                                                    <span className="ecom-radio-button-inner"></span></span><span>自然月</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                    <input type="radio" className="ecom-radio-button-input" value="99" />
                                                    <span className="ecom-radio-button-inner"></span></span><span>大促</span>
                                                </label>
                                            </div>
                                            <div className="cp-picker-tab-pop-container">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="subTitle--3qIfk">核心指标</div>
                            <div className='ecom-spin-nested-loading'>
                                <div className='ecom-spin-container'>
                                    <div className='content--3ZXDF' style={{ height: "680px" }}>
                                        <div className='leftContent--3rcvU foldCard--5QP80'>
                                            <div className='wrapper--Zoxii'>
                                                <div>商品营收</div>
                                                <div><div className="rightFold--3lnFu">收起<span className="ecom-sp-icon sp-icon-parcel"><svg className='icon' viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></div></div>
                                                <div className="cardWrapper--26WJS active--q00G6">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>成交金额</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>1332801</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>退款金额</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>198781</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>成交订单数</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>967</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>成交件数</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>967</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>件单价</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>838.77</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='wrapper--Zoxii'>
                                                <div>商品流量</div>
                                                <div></div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>商品曝光次数</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>110万</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>商品点击人数</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>1505</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='wrapper--Zoxii'>
                                                <div>商品转化</div>
                                                <div><div className="rightFold--3lnFu">收起<span className="ecom-sp-icon sp-icon-parcel"><svg className='icon' viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></div></div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>商品点击率（PV）</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>0.8%</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>商品成交转化率（PV）</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div></div><div style={{ fontFamily: "Barlow" }}>4.15%</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>商品千次曝光成交金额</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>1332801</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='wrapper--Zoxii'>
                                                <div>成交人群</div>
                                                <div><div className="rightFold--3lnFu">收起<span className="ecom-sp-icon sp-icon-parcel"><svg className='icon' viewBox="64 64 896 896" focusable="false" data-icon="up" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg></span></div></div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>成交人数</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>0</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                                <div className="cardWrapper--26WJS">
                                                    <div>
                                                        <div className="title--2rKFn title--1GW21"><span>客单价</span><SvgIcon /></div><div className="valueWrapper---RnMe activeWrapper--3JRks value--1n5xP"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>0</div><div className="attach--3vRa_ value--1n5xP"></div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='rightContent--3UjaT' style={{ width: "664px" }}>
                                            <div className='top--3SOZ1'>
                                                <img width="48" height="48" src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/d570b37dbfa544c3a31f8dce543e8e40~tplv-n15nrygpm8-image.image" style={{ marginRight: "12px" }} />
                                                <div>
                                                    <div className='title--2rKFn cardTitle--3sYBT'>
                                                        <span>成交金额</span><svg className="questionIconTooltip--399j2 md--3rLjL" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="https://www.w3.org/2000/svg"><path d="M14 0H0V14H14V0Z" fill="white" fill-opacity="0.01"></path><path d="M6.99935 12.8333C8.61017 12.8333 10.0685 12.1804 11.1241 11.1248C12.1798 10.0691 12.8327 8.61079 12.8327 6.99997C12.8327 5.38916 12.1798 3.93082 11.1241 2.87518C10.0685 1.81956 8.61017 1.16664 6.99935 1.16664C5.38853 1.16664 3.9302 1.81956 2.87456 2.87518C1.81893 3.93082 1.16602 5.38916 1.16602 6.99997C1.16602 8.61079 1.81893 10.0691 2.87456 11.1248C3.9302 12.1804 5.38853 12.8333 6.99935 12.8333Z" stroke="#646475" stroke-width="1.16667" stroke-linejoin="round"></path><path d="M7 8.34893V7.18227C7.9665 7.18227 8.75 6.39876 8.75 5.43227C8.75 4.46577 7.9665 3.68227 7 3.68227C6.0335 3.68227 5.25 4.46577 5.25 5.43227" stroke="#646475" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00065 10.9739C7.40336 10.9739 7.72982 10.6474 7.72982 10.2447C7.72982 9.84203 7.40336 9.51556 7.00065 9.51556C6.59795 9.51556 6.27148 9.84203 6.27148 10.2447C6.27148 10.6474 6.59795 10.9739 7.00065 10.9739Z" fill="#646475"></path></svg>
                                                    </div>
                                                    <div className="valueWrapper---RnMe cardValue--1qqBi"><div></div><div>¥</div><div style={{ fontFamily: "Barlow" }}>1332801</div><div className="attach--3vRa_"></div></div>
                                                </div>
                                            </div>


                                            <div className="middle--36wWX">拆分数据维度<button type="button" role="switch" aria-checked="false" className="ecom-switch ecom-switch-small" style={{ margin: "0px 18px 0px 4px" }}><div className="ecom-switch-handle"></div><span className="ecom-switch-inner"></span></button></div>
                                            <div className='ecom-spin-nested-loading'>
                                                <div className='ecom-spin-container'>
                                                    <div className='bottom--1zbD5' style={{ height: "492px" }}>
                                                        <div>
                                                            <div style={{ position: "relative" }}>
                                                                <Line {...config} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='wrapper--1JCSo'>
                                <div className="subTitle--1txcI">负向指标
                                    <div className="cp-date-picker-v2">
                                        <div className="cp-date-picker-v2-title">
                                            统计周期: </div>
                                        <div className="cp-date-picker-v2-time">2022/02/06 - 2022/03/07</div>
                                        <div className="cp-picker-tab" tabindex="1">
                                            <div className="ecom-radio-group ecom-radio-group-outline">
                                                <label className="ecom-radio-button-wrapper">
                                                    <span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="21" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>近7天</span>
                                                </label>
                                                <label className="ecom-radio-button-wrapper ecom-radio-button-wrapper-checked">
                                                    <span className="ecom-radio-button ecom-radio-button-checked">
                                                        <input type="radio" className="ecom-radio-button-input" value="23" checked="" />
                                                        <span className="ecom-radio-button-inner"></span>
                                                    </span>
                                                    <span>近30天</span>
                                                </label>
                                            </div>
                                            <div className="cp-picker-tab-pop-container"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='content--2hNbi'>
                                    {
                                        FXZBLIST.map((item, index) => {
                                            return (
                                                <div className={`cardWrapper--2R8qu ${activeIndex === index ? 'active--3rznR' : ''}`} key={index} onClick={() => this.handleClick(index)}>
                                                    <div>
                                                        <div className='title--2rKFn title--2Bpkg activeWrapper--2nkh8'>
                                                            <span>{item.title}</span><SvgIcon />
                                                        </div>
                                                        <div className="valueWrapper---RnMe activeWrapper--2nkh8 value--3eG19"><div></div><div></div>
                                                            <div style={{ fontFamily: "Barlow" }}>{item.value}%</div><div className="attach--3vRa_"></div></div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="border--2r9pU"></div>
                                    <div className='ecom-spin-nested-loading'>
                                        <div className='ecom-spin-container'>
                                            <Table dataSource={FXZBLIST[activeIndex].shopList} columns={FXZBLIST[activeIndex].columns} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='wrapper--3a35v'>
                                <div className='titleWrapper--S4m1E'>
                                    <div className="leftSection--3jP_s"><div className="nameWrapper--2onL1"><div className="name--1MVXX" style={{ fontSize: "14px" }}>商品列表</div></div></div>
                                    <div className='rightSection--2aFIP'>
                                        <div className="cp-date-picker-v2" style={{ justifyContent: "flex-end" }}>
                                            <div className="cp-date-picker-v2-title">统计周期: </div>
                                            <div className="cp-date-picker-v2-time">{dateSection}</div>
                                            <div className="cp-picker-tab">
                                                <div className="ecom-radio-group ecom-radio-group-outline">
                                                    <label className="ecom-radio-button-wrapper">
                                                        <span className="ecom-radio-button">
                                                            <input type="radio" className="ecom-radio-button-input" value="22" />
                                                            <span className="ecom-radio-button-inner"></span>
                                                        </span><span>近1天</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="21" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>近7天</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper ecom-radio-button-wrapper-checked"><span className="ecom-radio-button ecom-radio-button-checked">
                                                        <input type="radio" className="ecom-radio-button-input" value="23" checked="" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>近30天</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="2" />
                                                        <span className="ecom-radio-button-inner">
                                                        </span>
                                                    </span>
                                                        <span>自然日</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="3" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>自然周</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="4" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>自然月</span>
                                                    </label>
                                                    <label className="ecom-radio-button-wrapper"><span className="ecom-radio-button">
                                                        <input type="radio" className="ecom-radio-button-input" value="99" />
                                                        <span className="ecom-radio-button-inner"></span></span><span>大促</span>
                                                    </label>
                                                </div>
                                                <div className="cp-picker-tab-pop-container">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='filter--2El3W'>
                                    <div className="title--TdpCI">售卖类型</div>
                                    <div className="tabs--35hxP">
                                        <div className="item--1k5lK active--3P9zB">不限</div>
                                        <div className='item--1k5lK' style={{ display: "flex", alignItems: "center" }}>自营商品<SvgIcon className="icon" style={{ marginLeft: "3px", cursor: "pointer" }} /></div>
                                        <div className='item--1k5lK' style={{ display: "flex", alignItems: "center" }}>带货商品<SvgIcon className="icon" style={{ marginLeft: "3px", cursor: "pointer" }} /></div>
                                    </div>
                                </div>

                                <div className='ecom-spin-nested-loading'>
                                    <div className='ecom-spin-container'>
                                        <div className='dataTableWrap--1hhsd'>
                                            <div className="ecom-row" style={{ marginRight: "-24px", rowGap: "0px" }}><div className="ecom-col" style={{ flex: "1 1 auto" }}></div><div className="ecom-col" style={{ flex: "0 0 auto", display: "flex" }}><div className="searchRow--21qUL"><div><span className="ecom-input-group-wrapper ecom-input-search inputSearch--e2f2m"><span className="ecom-input-wrapper ecom-input-group"><span className="ecom-input-affix-wrapper"><input placeholder="请输入商品编号或商品名称" className="ecom-input" type="text" value="" /><span className="ecom-input-suffix"><span role="button" aria-label="close-circle" tabindex="-1" className="anticon anticon-close-circle ecom-input-clear-icon-hidden ecom-input-clear-icon"><svg viewBox="64 64 896 896" focusable="false" data-icon="close-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></span></span></span><span className="ecom-input-group-addon"><button type="button" className="ecom-btn ecom-btn-icon-only ecom-input-search-button"><span role="img" aria-label="search" className="anticon anticon-search"><svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></span></button></span></span></span></div><span className="downloadButton--3-doU ecom-tooltip-disabled-compatible-wrapper" style={{ display: "inline-block", cursor: "not-allowed" }}><button disabled="" type="button" className="ecom-btn" style={{ pointerEvents: "none" }}><span className="ecom-sp-icon sp-icon-parcel downloadIcon--3-tkR"><svg className="icon" aria-hidden="true"><use href="#icon-xiazai"></use></svg></span><span>下载明细</span></button></span></div><div><div className="settings--13X9c"><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/ff0232a49b825f796bd028fa08990b44.svg~tplv-n15nrygpm8-image.image" />配置列表项</div></div></div></div>
                                            <div className='dataTable--3C-0r'>
                                                <div className='ecom-table-wrapper custom-style-gray'>
                                                    <div className='ecom-spin-nested-loading'>
                                                        <div className='ecom-spin-container'>
                                                            <Table dataSource={[]} columns={columns} />
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
                    <div className="footerWrapper--2JxYD"><div className="links--1uhwH"><div className="label--3dQHK">关联平台</div><a href="https://www.bytedance.com/zh/" target="__blank" rel="noreferrer noopener">字节跳动</a><div className="fDivider--1ZsWP"></div><a href="https://www.douyin.com/" target="__blank" rel="noreferrer noopener">抖音短视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.toutiao.com/" target="__blank" rel="noreferrer noopener">今日头条</a><div className="fDivider--1ZsWP"></div><a href="https://www.ixigua.com/" target="__blank" rel="noreferrer noopener">西瓜视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.huoshanzhibo.com/" target="__blank" rel="noreferrer noopener">抖音火山版</a><div className="fDivider--1ZsWP"></div><a href="https://www.oceanengine.com/" target="__blank" rel="noreferrer noopener">巨量引擎</a><div className="fDivider--1ZsWP"></div><a href="https://douyinec.com/" target="__blank" rel="noreferrer noopener">抖音电商</a><div className="fDivider--1ZsWP"></div><a href="https://fxg.jinritemai.com/login" target="__blank" rel="noreferrer noopener">抖店</a></div><div className="icp--u0o1U"><div>京ICP证B2-20180202</div><div>营业执照</div><div>协议声明</div><div>Copyright© 2020北京空间变换科技有限公司All rights Reserved.</div></div></div>
                </div>
            </Spin>
        )
    }
}

export default Shops