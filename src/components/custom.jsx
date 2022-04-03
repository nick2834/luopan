import React, { Component } from 'react'
import "./custom.less";
export class Custom extends Component {
    render() {
        return (
            <div style={{ position: "fixed", userSelect: "none", willChange: "transform", zIndex: 101, right: "10px", bottom: "120px", transform: "translate(0px, 0px)" }}>
                <div className='index_background__236O1 index_narrow__1p4cb index_narrowHeight__2_pIh fxg-app-helper' style={{ height: "195px" }}>
                    <div className="index_header__24Wrr"></div>
                    <div className='index_contentWrapper__pj9Vk'>
                        <div className='index_content__1IDFQ'><div className='index_contentInner__2Qvtf'></div></div>
                        <div className='index_footer__2fh2O'>
                            <div className='index_footerTextWrapper__1KSLF'>
                                <div className='index_footerText__2HSoM'>
                                    <i className="index_helpCenterIcon__3x7zZ"></i>
                                </div>
                            </div>
                            <i className='index_line__1ra3g'></i>
                            <div className='index_footerTextWrapper__1KSLF'>
                                <div className='index_footerText__2HSoM'>
                                    <i className="index_issuesIcon__1j-XV"></i>
                                </div>
                            </div>
                            <i className='index_line__1ra3g'></i>
                            <div className='index_footerTextWrapper__1KSLF'>
                                <div className='index_footerText__2HSoM'>
                                    <i className="index_contactIcon__3FkQl"></i>
                                </div>
                            </div>
                            <i className='index_line__1ra3g'></i>
                            <div className='index_footerTextWrapper__1KSLF'>
                                <div className='index_footerText__2HSoM'>
                                    <i className="index_declareIcon__Ie4m1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Custom