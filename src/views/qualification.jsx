import React, { Component } from 'react';
import { Tabs, Alert, Button, Image, Spin } from 'antd';
import { BookOutlined, createFromIconfontCN } from '@ant-design/icons';
import "./homepage/index.less"
import "./qualification.less"
import Custom from "../components/custom"
const { TabPane } = Tabs;
const IconFont = createFromIconfontCN({
    scriptUrl: [
        'https://at.alicdn.com/t/font_3298220_gd4106oxhgi.js'
    ]
})
export class Qualification extends Component {
    state = {
        loading: true
    }
    handleRoute = (route) => {
        this.props.history.push(route)
    }
    componentDidMount = () => {
        document.title = "资质中心"
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 1500);
    }
    handleClick = () => {
        const w = window.open('about:blank');
        w.location.href = "https://buyin.jinritemai.com/dashboard/alliance/open-alliance"
    }
    render() {
        const { loading } = this.state;
        return (
            <div className='style_appWrapper__3uO7t ffa-grs-qualification-list' style={{ display: "flex", background: "rgb(246, 246, 250)", paddingTop: "58px" }}>
                <div className='_597hhBvevm4x676WEayFAA==  fxg-app-header' id='fxg-pc-header' style={{ zIndex: 1100 }}>
                    <div className='hNyK1iw9cM5hkl1qVJ2SKg=='>
                        <div className="M0OVYqC6U2xIFRF5Urk83g=="><h1 className="+0MG4BXqpRBgUm92lkXt5Q==" id="fxg-pc-header-name" onClick={() => this.handleRoute("/homepage")}>抖店</h1></div>
                        <div className='headerShopName Qxxk1LgD+-WXiv+svr-Amg== '>
                            <span className="userIconContainer p+VEVDjCecLf9iJc16+gyQ=="><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3Ljc1IDE4LjgwMDFDMTcuNzUgMTkuMjE0MyAxOC4wODU4IDE5LjU1MDEgMTguNSAxOS41NTAxQzE4LjkxNDIgMTkuNTUwMSAxOS4yNSAxOS4yMTQzIDE5LjI1IDE4LjgwMDFIMTcuNzVaTTQuNzUwMDIgMTguODAwMUM0Ljc1MDAyIDE5LjIxNDMgNS4wODU4IDE5LjU1MDEgNS41MDAwMiAxOS41NTAxQzUuOTE0MjMgMTkuNTUwMSA2LjI1MDAyIDE5LjIxNDMgNi4yNTAwMiAxOC44MDAxSDQuNzUwMDJaTTEyIDEzLjA1QzE0LjU2ODEgMTMuMDUgMTYuNjUgMTAuOTY4MSAxNi42NSA4LjRIMTUuMTVDMTUuMTUgMTAuMTM5NyAxMy43Mzk3IDExLjU1IDEyIDExLjU1VjEzLjA1Wk0xNi42NSA4LjRDMTYuNjUgNS44MzE4OCAxNC41NjgxIDMuNzUgMTIgMy43NVY1LjI1QzEzLjczOTcgNS4yNSAxNS4xNSA2LjY2MDMgMTUuMTUgOC40SDE2LjY1Wk0xMiAzLjc1QzkuNDMxODYgMy43NSA3LjM0OTk4IDUuODMxODggNy4zNDk5OCA4LjRIOC44NDk5OEM4Ljg0OTk4IDYuNjYwMyAxMC4yNjAzIDUuMjUgMTIgNS4yNVYzLjc1Wk03LjM0OTk4IDguNEM3LjM0OTk4IDEwLjk2ODEgOS40MzE4NiAxMy4wNSAxMiAxMy4wNVYxMS41NUMxMC4yNjAzIDExLjU1IDguODQ5OTggMTAuMTM5NyA4Ljg0OTk4IDguNEg3LjM0OTk4Wk0xOS4yNSAxOC44MDAxQzE5LjI1IDE0Ljc5NiAxNi4wMDQxIDExLjU1IDEyIDExLjU1VjEzLjA1QzE1LjE3NTYgMTMuMDUgMTcuNzUgMTUuNjI0NCAxNy43NSAxOC44MDAxSDE5LjI1Wk0xMiAxMS41NUM3Ljk5NTkgMTEuNTUgNC43NTAwMiAxNC43OTYgNC43NTAwMiAxOC44MDAxSDYuMjUwMDJDNi4yNTAwMiAxNS42MjQ0IDguODI0MzYgMTMuMDUgMTIgMTMuMDVWMTEuNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K" alt="" /></span>
                            <span className="GmQ6Iu4cP8TeRBPUEO29kw==">昆仑石记</span>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy4zMDMzIDYuMzUzNTVDMTMuNDk4NiA2LjE1ODI5IDEzLjQ5ODYgNS44NDE3MSAxMy4zMDMzIDUuNjQ2NDVDMTMuMTA4IDUuNDUxMTggMTIuNzkxNSA1LjQ1MTE4IDEyLjU5NjIgNS42NDY0NUw4LjAwMDcyIDEwLjI0MzNMMy40MDM4MiA1LjY0NjQ1QzMuMjA4NTUgNS40NTExOCAyLjg5MTk3IDUuNDUxMTggMi42OTY3MSA1LjY0NjQ1QzIuNTAxNDUgNS44NDE3MSAyLjUwMTQ1IDYuMTU4MjkgMi42OTY3MSA2LjM1MzU1TDcuNjQ2NDYgMTEuMzAzM0M3Ljg0MTcyIDExLjQ5ODYgOC4xNTgzIDExLjQ5ODYgOC4zNTM1NiAxMS4zMDMzTDEzLjMwMzMgNi4zNTM1NVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=" alt=""></img>
                        </div>
                        <div className="ignp3rq5QptSGd0nwqTd7A=="><span className="ant-badge"><div className="P8H9yjEdtLft51O-vGpOVQ=="><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMDAwMzIgOC4zMzMzN0M1LjAwMDMyIDUuNTcxOTUgNy4yMzg5IDMuMzMzMzcgMTAuMDAwMyAzLjMzMzM3VjMuMzMzMzdDMTIuNzYxNyAzLjMzMzM3IDE1LjAwMDMgNS41NzE5NSAxNS4wMDAzIDguMzMzMzdWMTEuNzU0NkMxNS4wMDAzIDExLjk0NzggMTUuMTMxOCAxMi4xMTYzIDE1LjMxOTIgMTIuMTYzMUwxNS40MDQzIDEyLjE4NDRDMTYuMTQ2MiAxMi4zNjk5IDE2LjY2NjYgMTMuMDM2NSAxNi42NjY2IDEzLjgwMTNWMTQuNDE2N0MxNi42NjY2IDE0Ljk2OSAxNi4yMTg5IDE1LjQxNjcgMTUuNjY2NiAxNS40MTY3SDQuMzMzMzFDMy43ODEwMyAxNS40MTY3IDMuMzMzMzEgMTQuOTY5IDMuMzMzMzEgMTQuNDE2N1YxMy44MDE0QzMuMzMzMzEgMTMuMDM2NiAzLjg1Mzg1IDEyLjM2OTkgNC41OTU4MyAxMi4xODQ1TDQuNjgxMzYgMTIuMTYzMUM0Ljg2ODgyIDEyLjExNjIgNS4wMDAzMiAxMS45NDc4IDUuMDAwMzIgMTEuNzU0NlY4LjMzMzM3WiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxjaXJjbGUgY3g9IjkuOTk5OTgiIGN5PSIyLjcwODI5IiByPSIxLjA0MTY3IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNOC4zMzMzMSAxNy41TDkuOTk5OTggMTcuNDk5OUwxMS42NjY2IDE3LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=" /><span className="_45GJoV8pvF-zCAYWwESrRA==">消息</span></div></span></div>
                        <div className="ignp3rq5QptSGd0nwqTd7A== sp-tooltip"><span className="ant-badge"><div className="P8H9yjEdtLft51O-vGpOVQ=="><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjEzNzkgMTYuNDQzM0MxMy42NTc1IDE2LjEyODcgMTQuNzkyOSAxNC43MzEzIDE0Ljc5MjkgMTMuMTE3NkMxNC43OTI5IDEyLjExMDIgMTQuMzQ3NyAxMS4yMDggMTMuNjQ0OCAxMC41OTQxQzEzLjM0MDQgMTAuMjA0OSAxMy4wMDQ2IDkuOTMyNjggMTIuNzc1NiA5LjY2MDQ5QzEyLjc3MzEgOS42NTc5NSAxMi43NzE0IDkuNjU2MjUgMTIuNzcwNSA5LjY1MzcxQzEyLjU0MzMgOS40MTQ1OCAxMi40MDQyIDkuMDkxNTEgMTIuNDA0MiA4LjczNjIxQzEyLjQwNDIgOC4xMjgyMiAxMi44NTcgNy43NzI5MyAxMy4zNjkyIDcuNDU0MUwxMi40NDMyIDYuODY5ODVDMTIuMTQwNSA1Ljg3NDM1IDExLjIxNTQgNS4xNTEwNCAxMC4xMjE1IDUuMTUxMDRDOS43NTI2NCA1LjE1MTA0IDkuNDA0MTIgNS4yMzMyOSA5LjA5MjA3IDUuMzgwODNDOC43NjM5MSA1LjUzNDMxIDguNDc2NDYgNS43NTgxOCA4LjI0OTIgNi4wMzQ2MUM4LjI0NjY2IDYuMDM1NDYgOC4yNDU4MSA2LjAzOCA4LjI0NDk2IDYuMDM5N0M3LjE4MTYyIDcuMTk0NjIgNy4wODc1IDkuMDE2ODkgNi42NzM2OSAxMS4zNzc2VjExLjM4MjdDNi42MzEyOSAxMS42MjUyIDYuNTg1NTEgMTEuODczNyA2LjUzNDYzIDEyLjEyNjRDNi4yMjUxMiAxMy4yNDIzIDUuNDk1MDMgMTQuMTg1MiA0LjUyNjY2IDE0Ljc3MDNDMy44NDc0NCAxNS4xODI0IDMuMDUwMzYgMTUuNDE5OCAyLjE5ODE2IDE1LjQxOThDMi4xNzEwMiAxNS40MTk4IDIuMTQzODkgMTUuNDE5OCAyLjExNzYgMTUuNDE5SDIuMDcyNjZDMi4wNzAxMiAxNS40MTkgMi4wNjg0MiAxNS40MTgxIDIuMDY1MDMgMTUuNDE4MUMxLjk5MDQxIDE1LjQwMjkgMS45MzM1OSAxNS4zMzc2IDEuOTMzNTkgMTUuMjU3OUMxLjkzMzU5IDE1LjIxNTUgMS45NDk3IDE1LjE3NzMgMS45NzY4NCAxNS4xNDc2QzEuOTg3ODYgMTUuMTQgMS45OTcxOSAxNS4xMzE1IDIuMDA3MzcgMTUuMTIxNEMyLjAwNzM3IDE1LjEyMTQgMi4wMDgyMSAxNS4xMjA1IDIuMDA5OTEgMTUuMTIwNUMyLjU1NDMgMTQuNjU1OCAyLjg4MjQ2IDEzLjk1MTIgMi44NDAwNiAxMy4xODIxQzIuODI1NjUgMTIuOTM0NSAyLjc3NTYyIDEyLjY5NyAyLjY5MjUyIDEyLjQ3NjZDMi42NTYwNiAxMi4zNzc0IDIuNjEyODEgMTIuMjgyNCAyLjU2Mjc4IDEyLjE5QzIuMjc3ODcgMTEuNTA0IDIuMTIyNjkgMTAuNzY3OSAyLjEyMjY5IDkuOTk5NjdDMi4xMjI2OSA4LjczODc2IDIuNTQwNzMgNy41NTkyNCAzLjI2OTEzIDYuNTUzNTZDNC42NjU3MiA0LjYyMzYgNy4xOTg1OCAzLjMzMzAxIDEwLjA5MTggMy4zMzMwMUMxNC40OTI3IDMuMzMzMDEgMTguMDYxIDYuMzE4NjggMTguMDYxIDEwLjAwMDVDMTguMDU3NiAxMy4wODc5IDE1LjU0NTEgMTUuNjg2OSAxMi4xMzc5IDE2LjQ0MzNaTTEyLjEzNzkgMTYuNDQzM0MxMS40ODQyIDE2LjU4OTIgMTAuNzk3MyAxNi42NjYzIDEwLjA4OTMgMTYuNjY2M0M5LjE4OTU5IDE2LjY2NjMgOC4zMjQ2NyAxNi41NDE3IDcuNTE4MjYgMTYuMzExOSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjI3MTk0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTAuNjY2NSA3LjUzMDk5QzEwLjY2NjUgNy44ODIzOCAxMC4zODE5IDguMTY2OTYgMTAuMDMwNSA4LjE2Njk2QzkuNjc5MTIgOC4xNjY5NiA5LjM5NDUzIDcuODgyMzggOS4zOTQ1MyA3LjUzMDk5QzkuMzk0NTMgNy4xNzk2MSA5LjY3OTEyIDYuODk1MDIgMTAuMDMwNSA2Ljg5NTAyQzEwLjM4MTkgNi44OTUwMiAxMC42NjY1IDcuMTc5NjEgMTAuNjY2NSA3LjUzMDk5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" /><div className="_45GJoV8pvF-zCAYWwESrRA==">接待</div></div></span></div>
                        <div className="ignp3rq5QptSGd0nwqTd7A=="><div className="P8H9yjEdtLft51O-vGpOVQ=="><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMi41IiB5PSIxNC4xNjY2IiB3aWR0aD0iMTAuODMzMyIgaGVpZ2h0PSIxNSIgcng9IjEuNjY2NjciIHRyYW5zZm9ybT0icm90YXRlKC05MCAyLjUgMTQuMTY2NikiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8cGF0aCBkPSJNNy4wODMzNCAxNi4yNUgxMi45MTY3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNNy41IDkuNTgzMzdMMTAgMTEuNjY2N00xMi41IDkuNTgzMzdMMTAgMTEuNjY2N00xMCAxMS42NjY3VjUuODMzMzciIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=" /><div className="_45GJoV8pvF-zCAYWwESrRA==">客户端</div></div></div>
                        <div className='_4Lh3m+eQeHwUoBdSWbd6Bg=='>
                            <div className="index_menuItem__23aIf"><div className="index_menuTitle__3BMCM" onClick={() => this.handleRoute("/shop")}>电商罗盘</div></div>
                            <div className="index_menuItem__23aIf"><div className="index_menuTitle__3BMCM">营销中心</div></div>
                            <div className="index_menuItem__CgmDv"><div className="index_menuTitle__1-fl- index_newTag__12yLR">巨量千川</div></div>
                            <div className="index_menuItem__23aIf"><div className="index_menuTitle__3BMCM" onClick={this.handleClick}>精选联盟</div></div>
                            <div className="index_menuItem__23aIf"><div className="index_menuTitle__3BMCM">学习中心</div></div>
                            <div className="index_menuItem__23aIf"><div className="index_menuTitle__3BMCM">服务市场</div></div>
                        </div>
                    </div>

                </div>

                <div style={{ paddingTop: "16px", paddingBottom: "16px", marginLeft: "auto", marginRight: "auto", color: "rgb(18, 20, 26)" }}>
                    <Spin spinning={loading} tip="加载中...">
                        <div style={{ width: "1366px" }}>
                            <div className='_14nDRSaYFqXxA7L4HkmZMI' style={{ display: "flex" }}>
                                <div className='_3rZsesTXyv2_yuX0k0RXB7'>
                                    <div className='_1G-iuKVWxLHY6c4iaSKjKP'>
                                        <div className='spiderman-tab-wrapper' style={{ fontSize: "16px" }}>
                                            <Tabs defaultActiveKey="0" tabBarExtraContent={
                                                <a style={{ fontSize: "14px", color: "rgb(25, 102, 255)", marginBottom: 0 }}>
                                                    <BookOutlined style={{ color: "rgb(25, 102, 255)" }} />入驻标准及资质要求</a>
                                            }>
                                                <TabPane tab={
                                                    <span>
                                                        主体资质
                                                        <span className="_2myRd7HNw6wfjC6NWzSbDi">即将过期</span>
                                                    </span>
                                                } key="1"></TabPane>
                                                <TabPane tab="行业资质" key="2"></TabPane>
                                                <TabPane tab="品牌资质" key="3"></TabPane>
                                            </Tabs>
                                        </div>
                                    </div>
                                    <Alert message={
                                        <span className="ant-alert-message"><span className="_3qHnrY20oQVGxmB_1gkPH2">经营者身份证件即将过期，请立即更新，否则平台有权依据规则限制店铺经营权限。</span></span>
                                    } type="warning" showIcon closable style={{ marginTop: "16px" }} />

                                    <div className='_1GBkmRvM0n7b3IBvKOkqeo'>
                                        <div className='_2cyMOtD3TjpuBjAiIAL1TV'>
                                            <div className='_2y6debDMNksgHNp6K29-ki'>
                                                <div className='kCY9Yt4Hhp2FjYqjHsIOD'>
                                                    <Button type="primary">编辑</Button>
                                                </div>
                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                    <div className="_3K0cqtuA4Yjh08k8ERBj3G _2PP7VC0sJz1kKqa4s2ess_">公司信息</div>
                                                    <a style={{ marginLeft: "36px" }}>开具经营证明</a>
                                                </div>
                                                <div className='_2J4dQYKyjbYfHctPuCe82j'>
                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>公司名称</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>镇平县西江月玉器商行</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>统一社会信用代码</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>92411324MA9GCRYX3B</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>营业执照</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}>
                                                            <Image
                                                                width={88}
                                                                src="https://p3-ecom-qualification-sign.ecombdimg.com/douyin-user-file/33927525539a266094d76da2cbfd0b8d~tplv-6vegkygxbk-1.image?x-expires=1680363586&x-signature=mD7qDu%2BgvaFRu50p29p8GKWyMT8%3D"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>营业期限</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>长期</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营地址</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>河南-南阳</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>主体类型</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>个体工商户</span></div>
                                                    </div>
                                                </div>
                                                <div className="_25adetpxBRrdkk_NPj_TFj"></div>
                                                <div className="_3K0cqtuA4Yjh08k8ERBj3G undefined">经营者信息</div>
                                                <div className='_3zLQYmWAiQsjxmpRHxhokl'>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者身份归属地</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>中国大陆</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者证件类型</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>身份证</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者身份证头像面</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}>
                                                            <div className='_3duiZdUahHyw8H7MW-2zvW'>
                                                                <Image
                                                                    width={88}
                                                                    src="https://7465-test-smart-court-0fh3trt1e0699b2-1251906221.tcb.qcloud.la/23456787654321?sign=98e597dd7934f4bbfb0aa72753f55518&t=1648872996"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者身份证国徽面</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}>
                                                            <div className='_3duiZdUahHyw8H7MW-2zvW'>
                                                                <Image
                                                                    width={88}
                                                                    src="https://7465-test-smart-court-0fh3trt1e0699b2-1251906221.tcb.qcloud.la/234567876543211?sign=f4118f30fa097cef2450491aa14e112a&t=1648873056"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者姓名</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>王***</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>经营者证件号码</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>34122***117</span></div>
                                                    </div>

                                                    <div className='ant-row _3aJWiCG93IlaU_3qf7a1Uc' style={{ margin: "-8px -8px 8px" }}>
                                                        <div className="ant-col _7Qygb3VmS0-7XcXX446U4" style={{ padding: "8px", color: "rgb(85, 88, 92)", flex: "0 0 142px" }}>证件有效期</div>
                                                        <div className="ant-col _2oUK91ircK4AKJrKQ8fyHD" style={{ padding: "8px", flex: "1 1 auto" }}><span>2022-06-08</span><span className="_3OcYmi1FQrNzoQ5so01bDu">即将过期</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='_i8cFncw5KBndxs3h-tQo'>
                                    <div className="_2kEIk3awdrlmOtRb_XP6CX">
                                        <div className="VUpDRd04IGZAwicj7h35d">
                                            <div className="_3CEh0MdJnnsvSQ5wjQKSkt">猜你想问</div>
                                            <div className="FBwvpcOvNSYa4fWp6IE7v">
                                                <div className="_3TUElU21_apJXZdKDyGEPg">
                                                    <span className="tYfdJ8XSg4MSFNcK7OhUi">营业执照常见问题</span>
                                                </div>
                                                <div className="DuE0iTYH9Fq2aOfNNWb3K dwx_iwBJLptD8z3DIFvc2">
                                                    <div className="_3mvgVqC9Ir3B__7PY3GKoI">
                                                        营业执照作为主体资质的一把手大哥，搞清楚它的方方面面可谓是重中之重，为大家整理了漫画版问答内容
                                                        <p>1.认证企业营业执照能修改成个体执照吗？</p>
                                                        <p>2.营业执照注销了可以更改营业执照吗？</p>
                                                        <p>3.营业执照更新后可进行更改吗？</p>
                                                        <p>4.营业执照有效期要求是？</p>
                                                        <a href="https://school.jinritemai.com/doudian/web/question/17?" target="_blank" rel="noopener noreferrer">快来围观</a>
                                                    </div>
                                                    <div className="_1WQQNVx_JoR8lkEw5HyPKk">
                                                        <div className="_1VL_gL5WyxneTbXAfWP3tl">
                                                            <div className="_3upmQH9HHe2N5PyxCAwK7_">回答是否有帮助？</div>
                                                            <div className='_2y_2PJYWw6VkLwlB7t_-4G'>
                                                                <span className='sp-icon-parcel'>
                                                                    <IconFont type='icon-praise'></IconFont>
                                                                </span>
                                                                <span className='sp-icon-parcel' style={{ transform: "rotate(180deg)" }}>
                                                                    <IconFont type='icon-praise'></IconFont>
                                                                </span>
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
                    </Spin>
                </div>
                <Custom />
            </div>
        )
    }
}

export default Qualification