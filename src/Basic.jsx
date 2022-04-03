import React, { Component } from 'react'
import { Spin } from 'antd';
import moment from 'moment'
import JYGL from './components/jygl'
import CjjeCharts from "./components/CjjeCharts"
import CjdllChart from "./components/CjdllChart"
import Cjqdfx from './components/cjqdfx'
import SvgIcon from "./components/SvgIcon"
import './App.less';

export class Basic extends Component {
    state = { loading: true }
    state = {
        currentTime: moment(Date.now()).format("MM-DD HH:MM:SS")
    }
    componentDidMount = () => {
        document.title = "核心数据-抖音电商罗盘";
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500);
    }
    render() {
        const { currentTime } = this.state
        return (
            <Spin spinning={this.state.loading} tip="加载中...">
                <div className='basicWrapper--2VwiJ'>
                    <div className='contentWrapper--1aeQx'>
                        <div>
                            <div className='recentNews--3tWZH'>
                                <div className="logo--26mm-"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjA5MiAxMS45NWMtMS4wNi4zMDEtMS43NzcuMzctMi41NC40NDUtLjc2My4wNzMtMS40OC4xNDMtMi41NzguMDUtMS4zNjEtLjExNS0zLjQwNC0xLjE0NS0zLjUzLTIuNDQ3LS4wNzYtLjc5LjgwNC0yLjEzOS45MTYtMi44ODguMDQtLjI2Ny0uMTA0LTEuMDc1LS4xMDQtMS4wNzUtLjIzNy0yLjQ0MiAxLjY1Ni00LjY0MiA0LjIwNy00Ljg4OSAyLjU1LS4yNDcgNC44MzEgMS41NSA1LjA2NyAzLjk5MSAwIDAgLjAxNC44MjkuMTA2IDEuMDg2LjI1My43MSAxLjM3NSAxLjg1OCAxLjQ1MSAyLjY0OC4xMjYgMS4zMDItMS42OCAyLjcwNC0yLjk5NSAzLjA3OHpNNi4zNjcgMTQuODQ3bC0uOTM5LS4xMDdhMS43MDMgMS43MDMgMCAwIDEtMS40Ny0xLjMyYy0uMDYyLS40NTcuNDctLjc5LjkyNy0uNzM3bDIuNDc0LjI4MmMuNDU3LjA1Mi45LjQ5Ni43MzcuOTI2YTEuNzAzIDEuNzAzIDAgMCAxLTEuNzMuOTU2eiIgZmlsbD0iIzEyNTFGRiIvPjwvc3ZnPg==" width="16" height="16" />最新动态</div>
                                <div className='ecom-carousel ecom-carousel-vertical'>
                                    <div className='slick-slider slick-vertical slick-initialized'>
                                        <div className='slick-list' style={{ height: "22px" }}>
                                            <div className='slick-track'>
                                                <div className='slick-slide'>
                                                    <div>
                                                        <div style={{ width: "100%", display: "inline-block" }}>
                                                            <div className='content--2oF4Z'>
                                                                <div>【抖音电商罗盘】全面解读</div>
                                                                <div className="url--2H2YG">查看详情</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pagination--1bgPH">
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0IDBIMHYxNGgxNFYweiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMDEiLz48cGF0aCBkPSJNOS4wNDIgMTAuNSA1LjU0MiA3bDMuNS0zLjUiIHN0cm9rZT0iIzFEMUQyRSIgc3Ryb2tlLXdpZHRoPSIxLjE2NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+" width="14" height="14" />
                                    <div style={{ width: "22px", margin: "0px 4px" }}>2/3</div>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48cGF0aCBkPSJNMCAxNGgxNFYwSDB2MTR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wMSIvPjxwYXRoIGQ9Im00Ljk1OCAzLjUgMy41IDMuNS0zLjUgMy41IiBzdHJva2U9IiMxRDFEMkUiIHN0cm9rZS13aWR0aD0iMS4xNjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgNyA3KSIgZD0iTTAgMGgxNHYxNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==" width="14" height="14" />
                                </div>
                            </div>
                            <div className='wrapper--2q9W1'>
                                <img className="background--3__Yk" width="383" height="434" src="https://p1-ecda.byteimg.com/tos-cn-i-n15nrygpm8/5729d88d35b7f3ed0c07c81a0f07d6f2.svg~tplv-n15nrygpm8-image.image" />
                                <div className="title--39YIh" style={{ zIndex: 2 }}><div className="wrapper--3ZrzQ"><span className="title--1C-Rc">实时概览</span><div className="ecom-divider ecom-divider-vertical" role="separator" style={{ height: "14px", top: "0px", borderColor: "rgb(100, 100, 117)" }}></div><span className="subTitle--15ODN">了解直播数据、提升直播效果</span></div><div className="time--3WhNV"><span className="ecom-sp-icon sp-icon-parcel" style={{ marginRight: "6px", fontSize: "14px", color: "rgb(151, 151, 161)" }}><svg className="icon" aria-hidden="true"><use href="#icon-jijiangchaoshi"></use></svg>
                                </span>更新于 {currentTime}</div></div>
                                <div className='content--379PR'>
                                    <div className='left--anx9t' style={{ width: "100%", marginRight: "16px" }}>
                                        <div className='ecom-spin-nested-loading'>
                                            <div className='ecom-spin-container'>
                                                <div className='leftTop--1f9vL'>
                                                    <div className='topCard--18YFi'>
                                                        <div style={{ zIndex: 2 }}>
                                                            <div>
                                                                <div className="title--2rKFn indicator--2nRbR">
                                                                    <span>成交金额</span><SvgIcon />
                                                                </div>
                                                                <div className="valueWrapper---RnMe indicatorValue--15b5p"><div></div><div></div>
                                                                    <div style={{ fontRamily: "Barlow" }}>59826</div><div className="attach--3vRa_ indicatorAttach--A_Hn_"></div></div></div>
                                                        </div>
                                                        {/* canvas */}
                                                        <div style={{ width: "100%" }}>
                                                            <div style={{ position: "relative" }}>
                                                                <CjjeCharts />
                                                            </div>
                                                        </div>
                                                        <div className='bottom--1lTd2'>
                                                            <div className="bottomItem--2bJx0" style={{ paddingRight: "8px", borderRight: "1px solid rgb(205, 213, 255)", marginRight: "7px" }}>直播占比 100%</div>
                                                            <div className="bottomItem--2bJx0">昨日全天 8.6万</div>
                                                        </div>
                                                    </div>
                                                    <div className="ecom-divider ecom-divider-vertical" role="separator" style={{ height: "148px", borderColor: "rgb(225, 230, 255)", margin: "0px 23px 0px 24px", top: "0px" }}></div>
                                                    <div className='topCard--18YFi'>
                                                        <div>
                                                            <div>
                                                                <div className="title--2rKFn indicator--2nRbR">
                                                                    <span>成交订单量</span><SvgIcon />
                                                                </div>
                                                                <div className="valueWrapper---RnMe indicatorValue--15b5p"><div></div><div></div>
                                                                    <div style={{ fontRamily: "Barlow" }}>375</div><div className="attach--3vRa_ indicatorAttach--A_Hn_"></div></div></div>
                                                        </div>
                                                        {/* canvas */}
                                                        <div style={{ width: "100%" }}>
                                                            <div style={{ position: "relative" }}><CjdllChart /></div>
                                                        </div>
                                                        <div className='bottom--1lTd2'>
                                                            <div className="bottomItem--2bJx0" style={{ paddingRight: "8px", borderRight: "1px solid rgb(205, 213, 255)", marginRight: "7px" }}>直播占比 100%</div>
                                                            <div className="bottomItem--2bJx0">昨日全天 563</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='leftBottom--X_ad_'>
                                                    <div className="bottomCard--a4mS7">
                                                        <div>
                                                            <div className='title--2rKFn indicator--2nRbR'>
                                                                <span>成交人数</span><SvgIcon />
                                                            </div>
                                                            <div className='valueWrapper---RnMe indicatorValue--15b5p'>
                                                                <div style={{ fontFamily: "Barlow" }}>216</div>
                                                            </div>
                                                        </div>
                                                        <div className='bottomItem--2bJx0' style={{ margin: "24px 0px 2px" }}>直播占比 100%</div>
                                                        <div className='bottomItem--2bJx0'>昨日全天 328</div>
                                                    </div>
                                                    <div className="bottomCard--a4mS7">
                                                        <div>
                                                            <div className='title--2rKFn indicator--2nRbR'>
                                                                <span>商品访客数</span><SvgIcon />
                                                            </div>
                                                            <div className='valueWrapper---RnMe indicatorValue--15b5p'>
                                                                <div style={{ fontFamily: "Barlow" }}>15.8W</div>
                                                            </div>
                                                        </div>
                                                        <div className='bottomItem--2bJx0' style={{ margin: "24px 0px 2px" }}>直播占比 100%</div>
                                                        <div className='bottomItem--2bJx0'>昨日全天 24.1万</div>
                                                    </div>
                                                    <div className="bottomCard--a4mS7">
                                                        <div>
                                                            <div className='title--2rKFn indicator--2nRbR'>
                                                                <span>商品点击人数</span><SvgIcon />
                                                            </div>
                                                            <div className='valueWrapper---RnMe indicatorValue--15b5p'>
                                                                <div style={{ fontFamily: "Barlow" }}>8960</div>
                                                            </div>
                                                        </div>
                                                        <div className='bottomItem--2bJx0' style={{ margin: "24px 0px 2px" }}>直播占比 100%</div>
                                                        <div className='bottomItem--2bJx0'>昨日全天 1.3万</div>
                                                    </div>
                                                    <div className="bottomCard--a4mS7">
                                                        <div>
                                                            <div className='title--2rKFn indicator--2nRbR'>
                                                                <span>退款金额</span><SvgIcon />
                                                            </div>
                                                            <div className='valueWrapper---RnMe indicatorValue--15b5p'>
                                                                <div style={{ fontFamily: "Barlow" }}>7458</div>
                                                            </div>
                                                        </div>
                                                        <div className='bottomItem--2bJx0' style={{ margin: "24px 0px 2px" }}>直播占比 100%</div>
                                                        <div className='bottomItem--2bJx0'>昨日全天 6121</div>
                                                    </div>
                                                    <div className="bottomCard--a4mS7">
                                                        <div>
                                                            <div className='title--2rKFn indicator--2nRbR'>
                                                                <span>退款订单量</span><SvgIcon />
                                                            </div>
                                                            <div className='valueWrapper---RnMe indicatorValue--15b5p'>
                                                                <div style={{ fontFamily: "Barlow" }}>11</div>
                                                            </div>
                                                        </div>
                                                        <div className='bottomItem--2bJx0' style={{ margin: "24px 0px 2px" }}>直播占比 100%</div>
                                                        <div className='bottomItem--2bJx0'>昨日全天 9</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 经营概览 */}
                            <JYGL></JYGL>

                            <Cjqdfx></Cjqdfx>

                        </div>
                    </div>
                    <div className="footerWrapper--2JxYD"><div className="links--1uhwH"><div className="label--3dQHK">关联平台</div><a href="https://www.bytedance.com/zh/" target="__blank" rel="noreferrer noopener">字节跳动</a><div className="fDivider--1ZsWP"></div><a href="https://www.douyin.com/" target="__blank" rel="noreferrer noopener">抖音短视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.toutiao.com/" target="__blank" rel="noreferrer noopener">今日头条</a><div className="fDivider--1ZsWP"></div><a href="https://www.ixigua.com/" target="__blank" rel="noreferrer noopener">西瓜视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.huoshanzhibo.com/" target="__blank" rel="noreferrer noopener">抖音火山版</a><div className="fDivider--1ZsWP"></div><a href="https://www.oceanengine.com/" target="__blank" rel="noreferrer noopener">巨量引擎</a><div className="fDivider--1ZsWP"></div><a href="https://douyinec.com/" target="__blank" rel="noreferrer noopener">抖音电商</a><div className="fDivider--1ZsWP"></div><a href="https://fxg.jinritemai.com/login" target="__blank" rel="noreferrer noopener">抖店</a></div><div className="icp--u0o1U"><div>京ICP证B2-20180202</div><div>营业执照</div><div>协议声明</div><div>Copyright© 2020北京空间变换科技有限公司All rights Reserved.</div></div></div>
                </div>
            </Spin>
        )
    }
}

export default Basic