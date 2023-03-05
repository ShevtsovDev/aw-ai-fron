import { IconProps } from '../IconProps'


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
        <path
          fill="#55abff"
          d="M21.21,5.29a1,1,0,0,0-1.42,0L8.5,16.59l-4.29-4.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,1.42,0l12-12A1,1,0,0,0,21.21,5.29Z"
        />
    </svg>
  )
}
