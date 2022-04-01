import React, { Component } from 'react'
import { UpOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom'

export class Navbar extends Component {
    state = {
        selected: 0
    }
    hanleSelect = (selected, route) => {
        const { history } = this.props
        this.setState({ selected, route }, () => {
            history.push(route)
        })
    }
    componentDidMount() {
        const { location: { pathname } } = this.props.history;
        let selected = 0;
        switch (pathname) {
            case "/":
                selected = 0;
                break;
            case "/product-analysis":
                selected = 5
                break;
            case "/tyf":
                selected = 7
            case "/live-list":
                selected = 1
                break;
            default: selected = 0
        }
        this.setState({ selected })
    }
    render() {
        const { selected, route } = this.state;
        return (
            <div className='navWrapper--2Mgu6'>
                <div className='innerNav--3T4Eh tooltipBox'>
                    <div className='navBar--2DM6X'>
                        <div className={`block--2RTOs ${selected === 0 && 'selected--1uPEI'}`} onClick={() => this.hanleSelect(0, "/")}>
                            <div data-id="20100" className={`rootMenu--2LfA8 ${selected === 0 && 'selected--1uPEI'}`}>
                                <img src={`https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/${selected === 0 ? '080915ecc2344743887793f2d45f54ea' : '759b0bea1b6e403d9fdf22bec7d951d6'}~tplv-n15nrygpm8-image.image`} alt='' />
                                <div className="rootTitle--3Tmh_">首页</div>
                                <div className="icon--1LNwL"></div>
                            </div>
                            <div className="childMenu--30gis closed--3jYPE2"></div>
                        </div>
                        <div className={`block--2RTOs ${selected === 5 && 'selected--1uPEI'}`}><div data-id="20200" className={`rootMenu--2LfA8 ${selected === 1 && 'selected--1uPEI'}`}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/c7e1a47e2346f3def26159e58eedbb90.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">直播</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className={`title--3UNle ${route === '/live-list' && 'selected--1uPEI'}`} onClick={() => this.hanleSelect(1, "/live-list")}><div>直播列表</div></div><div className="title--3UNle"><div>自播诊断</div></div><div className="title--3UNle"><div>直播计划</div></div><div className="title--3UNle"><div>主播分析</div></div><div className="title--3UNle"><div>直播复盘</div></div></div></div>
                        <div className="block--2RTOs"><div data-id="20400" className="rootMenu--2LfA8 "><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/c9baa1cb417a06bff7965872b5e13d10.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">营销</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>活动分析</div></div><div className="title--3UNle"><div>营销分析</div></div></div></div>
                        <div className="block--2RTOs"><div data-id="20500" className="rootMenu--2LfA8 "><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/7b4dc69af6baba8534f295d4075d9684.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">店铺</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>店铺排行榜</div></div><div className="title--3UNle"><div>交易构成</div></div><div className="title--3UNle"><div>商品卡分析</div></div><div className="title--3UNle"><div>财务概览</div></div><div className="title--3UNle"><div>退款分析</div></div></div></div>
                        <div className="block--2RTOs"><div data-id="20600" className="rootMenu--2LfA8 "><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/72696c9c85ee7c488635484a398db59c.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">达人</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>达播诊断</div></div><div className="title--3UNle"><div>合作达人</div></div></div></div>
                        <div className={`block--2RTOs ${selected === 5 && 'selected--1uPEI'}`}><div data-id="20700" className={`rootMenu--2LfA8 ${selected === 5 && 'selected--1uPEI'}`}><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/1e724ba2a976ead00410c2c3dcb9de7f.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">商品</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>单品分析</div></div><div className="title--3UNle"><div>实时商品</div></div><div className={`title--3UNle ${route === '/product-analysis' && 'selected--1uPEI'}`} onClick={() => this.hanleSelect(5, "/product-analysis")}><div>商品概览</div></div><div className="title--3UNle"><div>品类分析</div></div><div className="title--3UNle"><div>抖音商品榜</div></div></div></div>
                        <div className="block--2RTOs"><div data-id="20800" className="rootMenu--2LfA8 "><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/edb3953b177df938eecbc8729e71a7e9.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">人群</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>核心人群</div></div><div className="title--3UNle"><div>场景人群</div></div><div className="title--3UNle"><div>人群画像</div></div></div></div>
                        <div className={`block--2RTOs ${selected === 7 && 'selected--1uPEI'}`}>
                            <div data-id="20900" className={`rootMenu--2LfA8 ${selected === 7 && 'selected--1uPEI'}`}>
                                <img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/7357ec213ae3d32abbc9b251201ad021.svg~tplv-n15nrygpm8-image.image" alt='' />
                                <div className="rootTitle--3Tmh_">服务</div>
                                <div className="icon--1LNwL">
                                    <span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span>
                                </div>
                            </div>
                            <div className="childMenu--30gis closed--3jYPE2">
                                <div className={`title--3UNle ${route === "/tyf" && 'selected--1uPEI'}`} onClick={() => this.hanleSelect(7, "/tyf")}>
                                    <div>商家体验分</div>
                                </div>
                                <div className="title--3UNle">
                                    <div>服务诊断</div>
                                </div>
                                <div className={`title--3UNle ${route === '/shfx' && 'selected--1uPEI'}`} onClick={() => this.hanleSelect(7, "/shfx")}>
                                    <div>售后分析</div>
                                </div>
                                <div className="title--3UNle"><div>评价分析</div></div><div className="title--3UNle"><div>客服分析</div></div><div className="title--3UNle"><div>体验政策</div></div><div className="title--3UNle"><div>用户负反馈</div></div></div>
                        </div>
                        <div className="block--2RTOs"><div data-id="21000" className="rootMenu--2LfA8 "><img src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/c6ec90432d2acec04e2153feb386800e.svg~tplv-n15nrygpm8-image.image" alt='' /><div className="rootTitle--3Tmh_">物流</div><div className="icon--1LNwL"><span className="ecom-sp-icon sp-icon-parcel"><UpOutlined style={{ fontSize: '14px', color: '#aaabaf' }} /></span></div></div><div className="childMenu--30gis closed--3jYPE2"><div className="title--3UNle"><div>物流指数</div></div><div className="title--3UNle"><div>物流概览</div></div></div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar)