import {IconProps} from "./IconProps";

export default (props: IconProps) => {
    const {width = 16, height = 17, fill = 'none', viewBox = '0 0 16 17'} = props
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66667 2.85938H2V7.52604H6.66667V2.85938Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 2.85938H9.33337V7.52604H14V2.85938Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 10.1927H9.33337V14.8594H14V10.1927Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66667 10.1927H2V14.8594H6.66667V10.1927Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}