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
        <path d="M14.1399 11.4527C13.7158 12.4557 13.0525 13.3395 12.2079 14.0269C11.3633 14.7143 10.3631 15.1843 9.2949 15.3959C8.22668 15.6075 7.12289 15.5541 6.08004 15.2406C5.03719 14.927 4.08703 14.3628 3.31262 13.5971C2.53822 12.8315 1.96315 11.8879 1.6377 10.8487C1.31225 9.80947 1.24632 8.70637 1.44568 7.6358C1.64503 6.56523 2.10361 5.55979 2.78131 4.70739C3.45901 3.85499 4.3352 3.18159 5.33328 2.74604" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6667 8.85938C14.6667 7.9839 14.4942 7.11699 14.1592 6.30815C13.8242 5.49932 13.3331 4.76439 12.714 4.14533C12.095 3.52628 11.3601 3.03521 10.5512 2.70018C9.74239 2.36515 8.87548 2.19271 8 2.19271V8.85938H14.6667Z" stroke="#A7A9B6" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}
