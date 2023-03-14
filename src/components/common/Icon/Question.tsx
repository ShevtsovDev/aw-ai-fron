import { IconProps } from 'src/components/common/Icon/IconProps'

export default (props: IconProps) => {
  const { width = 16, height = 16, fill = 'none', viewBox = '0 0 16 16' } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_106_2)">
          <path d="M8.9999 9.99999H6.9999C6.9999 7.99999 8.1999 7.39999 8.9999 6.99999C9.2999 6.89999 9.4999 6.79999 9.6999 6.59999C9.7999 6.49999 9.9999 6.29999 9.7999 5.89999C9.5999 5.39999 8.9999 4.89999 8.0999 4.89999C6.6999 4.89999 6.4999 6.09999 6.3999 6.39999L4.3999 6.09999C4.4999 4.99999 5.3999 2.89999 7.9999 2.89999C9.5999 2.89999 10.9999 3.79999 11.5999 5.09999C11.9999 6.19999 11.7999 7.29999 10.9999 8.09999C10.5999 8.49999 10.1999 8.69999 9.7999 8.79999C9.1999 9.19999 8.9999 8.99999 8.9999 9.99999Z" fill="#444444"/>
          <path d="M8 1C11.9 1 15 4.1 15 8C15 11.9 11.9 15 8 15C4.1 15 1 11.9 1 8C1 4.1 4.1 1 8 1ZM8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z" fill="#444444"/>
          <path d="M6.8999 11H8.8999V13H6.8999V11Z" fill="#444444"/>
        </g>
        <defs>
          <clipPath id="clip0_106_2">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
    </svg>
  )
}
