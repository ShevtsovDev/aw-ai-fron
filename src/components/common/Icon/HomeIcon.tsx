import {IconProps} from "./IconProps";

export default (props: IconProps) => {
    const {width = 16, height = 16, fill = 'none', viewBox = '0 0 16 16'} = props
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6.85937L8 2.1927L14 6.85937V14.1927C14 14.5463 13.8595 14.8855 13.6095 15.1355C13.3594 15.3856 13.0203 15.526 12.6667 15.526H3.33333C2.97971 15.526 2.64057 15.3856 2.39052 15.1355C2.14048 14.8855 2 14.5463 2 14.1927V6.85937Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 15.526V8.85938H10V15.526" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}