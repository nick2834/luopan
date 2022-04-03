import React, { Component } from 'react'
import { Alert, Spin } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';
import SvgIcon from "../components/SvgIcon"
import qushi from "../assets/images/qushi.png"
import "./tyf.less";

export class tyf extends Component {
    state = {
        loading: true
    }
    componentDidMount = () => {
        document.title = "体验分"
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1500);
    }
    render() {
        return (
            <div className='containerWrapper--b6jo7'>
                <Spin spinning={this.state.loading} tip="加载中...">
                    <div id="gar-sub-app-provider">
                        <div id="garfish_app_for_shop-grc_n15u5rk3">
                            <div __garfishmockhtml__>
                                <div style={{ width: "1136px", marginLeft: "auto", marginRight: "auto", color: "rgb(18, 20, 26)" }}>
                                    <main id='grc-container'>
                                        <Alert message={
                                            <span className="ant-alert-message"><span className="_3qHnrY20oQVGxmB_1gkPH2">欢迎使用抖音电商罗盘查询功能，点击了解商家体验分<span className="Aa2g_U4dTQX-OXyvXJ2a4"><a href="https://school.jinritemai.com/doudian/web/article/103956?rank=0&amp;fromPage=search_result&amp;searchInfo=3781351253908389485%3A0%3A0&amp;query=%E4%BD%93%E9%AA%8C%E5%88%86" rel="noreferrer noopener" className="Aa2g_U4dTQX-OXyvXJ2a4">规则详情</a></span></span></span>
                                        } type="info" showIcon closable />

                                        <div className="_2i-q_BcMqsehw1Kg4aGKrW" style={{ marginTop: "16px", padding: "0px" }}>
                                            <div className="_1khmt7-doekppxB1AnrV4R"><div><p>店铺概况</p></div><span className="_2x2spmvzFXdr6Y6jUdYbvw"></span></div>
                                        </div>
                                        <div className='_31RIY57s-sZywa7hJT8bS2' style={{ marginTop: "16px", padding: "0px" }}>
                                            <div className='_2i-q_BcMqsehw1Kg4aGKrW _20J4oVsXfz1o_HnxksjMr3' style={{ padding: "0px" }}>
                                                <div className='_1khmt7-doekppxB1AnrV4R'>
                                                    <div>
                                                        <div className='qDAPw-So3exikSyBAq4bO' style={{ display: "flex", alignItems: "center" }}>
                                                            <span className="_1PR5CvF5YGRyBFRbpjDfBt">体验分</span><SvgIcon />
                                                        </div>
                                                    </div>
                                                    <div className='_9Zaa8j7awmT9fDjElZtgt'>
                                                        <img src={qushi} alt="qushi" style={{ marginRight: "5px" }} />
                                                        <span className="nAJfs0dz0wQAW9MRCUM5K">趋势</span>
                                                    </div>
                                                </div>
                                                <div className='_2FBPRqRxuV5eZj-zb_vX1H' style={{ margin: "0px" }}>
                                                    <div className='_22JmzrGpTw7hze4mvdFbEz'>
                                                        <div className="_3yhV9EeywCILTrXkkYuHGy">
                                                            <div className="eauFbAjDLTbSVmw-11b6-">
                                                                <div className="tL-n5tHmV9JqBV127Fk6W"></div>
                                                                <div style={{ width: "175px", height: "126px", position: "relative", overflow: "hidden" }}>
                                                                    <div className='block rotate1'></div>
                                                                    <div className='blcok_hidden'></div>
                                                                    {/* <div className="left">
                                                                    <div className="leftcircle"></div>
                                                                </div>
                                                                <div className="right">
                                                                    <div className="rightcircle"></div>
                                                                </div> */}
                                                                </div>
                                                                <div className="_3mCU3u_Bojxy665rx8Lb3z">
                                                                    <span className="_2aZz7OE_B8F8coyXI0aNbj _3bQUorZNmOGKALxqhm6CiO">4.97</span>
                                                                    <span className="_1cEYWo9VPo3_giPTakuYVK">体验分</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="_3iiQ7uMS1KxbFOtNov-YAA">
                                                            <p className="AFTz-Nq4LCM16nEP8eDSz">
                                                                <span>较前一日</span>
                                                                <span className="_4BideaJSz_bYjJJUn2haW">持平</span><span style={{ marginLeft: "8px" }}>超越</span>
                                                                <span className="_4BideaJSz_bYjJJUn2haW">97.8%</span>
                                                                <span>同行</span>
                                                            </p>
                                                            <a rel="noreferrer noopener" href="https://school.jinritemai.com/doudian/web/article/103956?rank=0&amp;fromPage=search_result&amp;searchInfo=3781351253908389485%3A0%3A0&amp;query=%E4%BD%93%E9%AA%8C%E5%88%86" className="_3IpKdooBlqg7YjF1E1VC4f">体验分规则</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div className='_2i-q_BcMqsehw1Kg4aGKrW _2pUUrU4ALMlT64ZI_CDcw8'>
                                                <div className='_1khmt7-doekppxB1AnrV4R'><div><p className="ZQ5q4jQEwoc4Ddichd1n6">分数详情</p></div></div>
                                                <div className='_2FBPRqRxuV5eZj-zb_vX1H' style={{ marginTop: "20px" }}>
                                                    <div className='_2CRm9kLyUa5Pt6FrCEvaAc'>
                                                        <div className="_2HnuZC7OOLBo0ns-DXbvlo">
                                                            <div className="_2kjr-S2VSsUNqyVqH0d-Pb">
                                                                <span className="t93_g65JtZv_-5qb9gMif">商品体验</span>
                                                                <div className='_9Zaa8j7awmT9fDjElZtgt'>
                                                                    <img src={qushi} alt="qushi" style={{ marginRight: "5px" }} />
                                                                    <span className="nAJfs0dz0wQAW9MRCUM5K">趋势</span>
                                                                </div>
                                                            </div>
                                                            <div className="_2cdk8ediTj7a4KvhP8umVQ">
                                                                <span className="_3EHMh0tMBGSGXxdRSf32lb">4.86</span>
                                                            </div>
                                                            <div className="CGL8olHuUY5PdxeFIRgVW">
                                                                <div className="_29TCaJQlId2Fmcw06O-tdQ" style={{ width: "97.2%" }}></div>
                                                            </div>
                                                            <div className="CN2zcLLyv-B7n2znEKDQo">
                                                                <p className="W-DP3CxK2gQEmFc1JhklU" style={{ margin: "0px" }}>
                                                                    较前一日
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">持平</span>
                                                                    超越
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">98.7%</span>
                                                                    同行
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="_2HnuZC7OOLBo0ns-DXbvlo">
                                                            <div className="_2kjr-S2VSsUNqyVqH0d-Pb">
                                                                <span className="t93_g65JtZv_-5qb9gMif">物流体验</span>
                                                                <div className='_9Zaa8j7awmT9fDjElZtgt'>
                                                                    <img src={qushi} alt="qushi" style={{ marginRight: "5px" }} />
                                                                    <span className="nAJfs0dz0wQAW9MRCUM5K">趋势</span>
                                                                </div>
                                                            </div>
                                                            <div className="_2cdk8ediTj7a4KvhP8umVQ">
                                                                <span className="_3EHMh0tMBGSGXxdRSf32lb">4.90</span>
                                                            </div>
                                                            <div className="CGL8olHuUY5PdxeFIRgVW"><div className="_29TCaJQlId2Fmcw06O-tdQ" style={{ width: "98%" }}></div></div>
                                                            <div className="CN2zcLLyv-B7n2znEKDQo">
                                                                <p className="W-DP3CxK2gQEmFc1JhklU" style={{ margin: "0px" }}>
                                                                    较前一日
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">持平</span>
                                                                    超越
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">97.9%</span>
                                                                    同行
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="_2HnuZC7OOLBo0ns-DXbvlo">
                                                            <div className="_2kjr-S2VSsUNqyVqH0d-Pb">
                                                                <span className="t93_g65JtZv_-5qb9gMif">服务体验</span>
                                                                <div className='_9Zaa8j7awmT9fDjElZtgt'>
                                                                    <img src={qushi} alt="qushi" style={{ marginRight: "5px" }} />
                                                                    <span className="nAJfs0dz0wQAW9MRCUM5K">趋势</span>
                                                                </div>
                                                            </div>
                                                            <div className="_2cdk8ediTj7a4KvhP8umVQ">
                                                                <span className="_3EHMh0tMBGSGXxdRSf32lb">4.89</span>
                                                            </div>
                                                            <div className="CGL8olHuUY5PdxeFIRgVW"><div className="_29TCaJQlId2Fmcw06O-tdQ" style={{ width: "97.8%" }}></div></div>
                                                            <div className="CN2zcLLyv-B7n2znEKDQo">
                                                                <p className="W-DP3CxK2gQEmFc1JhklU" style={{ margin: "0px" }}>
                                                                    较前一日
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">上升0.1%</span>
                                                                    超越
                                                                    <span className="_3cLrjxIeNxLP9jOTTcj-kQ">98.7%</span>
                                                                    同行
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='_2i-q_BcMqsehw1Kg4aGKrW _240JReypJKrdVleN48HY1F' style={{ padding: "24px 0px 0px" }}>
                                            <div className='_1khmt7-doekppxB1AnrV4R'>
                                                <div>
                                                    <div className='_1UwU250ehcwM9uHKk0aPFE'>
                                                        <span>分析诊断</span>
                                                        <div className='_2Yq2TtedAcJMbFM-s51tXO'>
                                                            <InfoCircleOutlined />
                                                            <span style={{ marginLeft: "5px" }}>红色指标需要重点关注</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='_2FBPRqRxuV5eZj-zb_vX1H' style={{ marginTop: "24px" }}>
                                                <div className='_1EnGbR4FZD5bVwPI4T0M4w'>
                                                    <img className="_12St-meBV5yEau0AKeFtQ3" src="https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/governance/governance-regulation-compass-garfish/imgs/empty_analysis.b5cc9dca.png" />
                                                    <span className="_39407LJMfapI1Q_FXWElWA">暂无数据</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='_2i-q_BcMqsehw1Kg4aGKrW' style={{ padding: "24px 0px 0px" }}>
                                            <div className='_1khmt7-doekppxB1AnrV4R'>
                                                <div><span className="SxJsmAjrVzNfElw4ki18X">权益说明</span></div>
                                            </div>
                                            <div className='_2FBPRqRxuV5eZj-zb_vX1H'>
                                                <ul className='_3nPocRUqPxSuZgbIacV94c'>
                                                    <li className="_2TcJkcz4RHDZ6puRLXVWSZ"><div className="_1TSWoghkiTvHRXxbJjv-ja"><img src="https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/governance/governance-regulation-compass-garfish/svgs/traffic.221b45a9.svg" /></div><div className="_2mTTneAJwFB_q9Fp8CinM"><div className="_3btEswGKcs396b2MQx9TAB">流量倾斜</div><div className="tXNvraMiNYFwSq7Wv9gTG">分数越高，流量加权越大。开通平台特色服务有助于分数提升，<a href="https://school.jinritemai.com/doudian/web/article/111466" target="__blank" rel="noopener noreferrer">查看详情</a></div></div></li>
                                                    <li className="_2TcJkcz4RHDZ6puRLXVWSZ"><div className="_1TSWoghkiTvHRXxbJjv-ja"><img src="https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/governance/governance-regulation-compass-garfish/svgs/star.7fba33ba.svg"/></div><div className="_2mTTneAJwFB_q9Fp8CinM"><div className="_3btEswGKcs396b2MQx9TAB">星级透传</div><div className="tXNvraMiNYFwSq7Wv9gTG">分数越高，达人选品转化率越高</div></div></li>
                                                    <li className="_2TcJkcz4RHDZ6puRLXVWSZ"><div className="_1TSWoghkiTvHRXxbJjv-ja"><img src="https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/governance/governance-regulation-compass-garfish/svgs/activity.f618dc8b.svg"/></div><div className="_2mTTneAJwFB_q9Fp8CinM"><div className="_3btEswGKcs396b2MQx9TAB">活动提报</div><div className="tXNvraMiNYFwSq7Wv9gTG">体验分越高，可参加的活动越多</div></div></li>
                                                    <li className="_2TcJkcz4RHDZ6puRLXVWSZ"><div className="_1TSWoghkiTvHRXxbJjv-ja"><img src="https://lf3-fe.ecombdstatic.com/obj/ecom-cdn-default/ecom/governance/governance-regulation-compass-garfish/svgs/union.8c9b8641.svg"/></div><div className="_2mTTneAJwFB_q9Fp8CinM"><div className="_3btEswGKcs396b2MQx9TAB">精选联盟门槛</div><div className="tXNvraMiNYFwSq7Wv9gTG">新商家或体验分≥4.0可申请加入精选联盟，<a href="https://school.jinritemai.com/doudian/web/article/101665" target="__blank" rel="noopener noreferrer">查看详情</a></div></div></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="footerWrapper--2JxYD"><div className="links--1uhwH"><div className="label--3dQHK">关联平台</div><a href="https://www.bytedance.com/zh/" target="__blank" rel="noreferrer noopener">字节跳动</a><div className="fDivider--1ZsWP"></div><a href="https://www.douyin.com/" target="__blank" rel="noreferrer noopener">抖音短视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.toutiao.com/" target="__blank" rel="noreferrer noopener">今日头条</a><div className="fDivider--1ZsWP"></div><a href="https://www.ixigua.com/" target="__blank" rel="noreferrer noopener">西瓜视频</a><div className="fDivider--1ZsWP"></div><a href="https://www.huoshanzhibo.com/" target="__blank" rel="noreferrer noopener">抖音火山版</a><div className="fDivider--1ZsWP"></div><a href="https://www.oceanengine.com/" target="__blank" rel="noreferrer noopener">巨量引擎</a><div className="fDivider--1ZsWP"></div><a href="https://douyinec.com/" target="__blank" rel="noreferrer noopener">抖音电商</a><div className="fDivider--1ZsWP"></div><a href="https://fxg.jinritemai.com/login" target="__blank" rel="noreferrer noopener">抖店</a></div><div className="icp--u0o1U"><div>京ICP证B2-20180202</div><div>营业执照</div><div>协议声明</div><div>Copyright© 2020北京空间变换科技有限公司All rights Reserved.</div></div></div>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </div>
                </Spin>
            </div >
        )
    }
}

export default tyf