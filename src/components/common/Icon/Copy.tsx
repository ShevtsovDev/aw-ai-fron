import { IconProps } from 'src/components/common/Icon/IconProps'

export default (props: IconProps) => {
  const { width = 24, height = 24, fill = 'none', viewBox = '0 0 24 24' } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_108_7)">
          <path d="M16 1H4C2.895 1 2 1.895 2 3V17H4V3H16V1ZM19 5H8C6.895 5 6 5.895 6 7V21C6 22.105 6.895 23 8 23H19C20.105 23 21 22.105 21 21V7C21 5.895 20.105 5 19 5ZM19 21H8V7H19V21Z" fill="black"/>
        </g>
        <defs>
          <clipPath id="clip0_108_7">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
    </svg>
  )
}