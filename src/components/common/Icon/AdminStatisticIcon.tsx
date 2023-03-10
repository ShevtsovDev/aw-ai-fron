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
        <path d="M4 4V19.0769H19.0769" stroke="#8C8C8C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.60962 12.5634H8.43655V18.9476H5.60962V12.5634ZM10.1252 9.99814H12.9521V18.9476H10.1252V9.99814ZM14.6407 6.43842H17.4676V18.9476H14.6407V6.43842Z" stroke="#8C8C8C" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
