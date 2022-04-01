import React, { Component } from 'react'

export class UpSvgIcon extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { change_value } = this.props
        return (
            <div className='changeRatioWrap--2i91a'>
                <span className="value--r9Is0 up--380XO">{change_value.value}%</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.65897 3.27061L4.16343 7.46525C3.9222 7.75473 4.12805 8.19422 4.50486 8.19422H5.77818C6.2691 8.19422 6.66707 8.59219 6.66707 9.08311V11.7498C6.66707 12.2407 7.06504 12.6387 7.55596 12.6387H8.44485C8.93577 12.6387 9.33373 12.2407 9.33373 11.7498V9.08311C9.33373 8.59219 9.7317 8.19422 10.2226 8.19422H11.4959C11.8728 8.19422 12.0786 7.75473 11.8374 7.46525L8.34183 3.27061C8.16415 3.05738 7.83666 3.05738 7.65897 3.27061Z" fill="#FE3824"></path></svg>
            </div>
        )
    }
}

export default UpSvgIcon