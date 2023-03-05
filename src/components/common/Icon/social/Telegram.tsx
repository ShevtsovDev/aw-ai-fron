import { IconProps } from '../IconProps'

export default (props: IconProps) => {
  const { width = 54, height = 54, fill = 'none', viewBox = '0 0 54 54' } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_117_19)">
          <path d="M54 27C54 41.9175 41.9175 54 27 54C12.0825 54 0 41.9175 0 27C0 12.0825 12.0825 0 27 0C41.9175 0 54 12.0825 54 27Z" fill="url(#paint0_linear_117_19)"/>
          <path d="M22.05 39.375C21.1725 39.375 21.33 39.0375 21.015 38.205L18.45 29.745L34.38 19.8L36.2475 20.295L34.695 24.525L22.05 39.375Z" fill="#C8DAEA"/>
          <path d="M22.05 39.375C22.725 39.375 23.0175 39.06 23.4 38.7C23.985 38.1375 31.5 30.825 31.5 30.825L26.8875 29.7L22.6125 32.4L22.05 39.15V39.375Z" fill="#A9C9DD"/>
          <path d="M22.5001 32.49L33.3901 40.5225C34.6276 41.1975 35.5276 40.86 35.8426 39.375L40.2751 18.495C40.7251 16.6725 39.5776 15.8625 38.3851 16.4025L12.3751 26.4375C10.5976 27.1575 10.6201 28.1475 12.0601 28.575L18.7426 30.6675L34.2001 20.925C34.9201 20.475 35.5951 20.7225 35.0551 21.2175L22.5001 32.49Z" fill="url(#paint1_linear_117_19)"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_117_19" x1="34.9133" y1="8.53425" x2="21.4132" y2="40.0338" gradientUnits="userSpaceOnUse">
            <stop stop-color="#37AEE2"/>
            <stop offset="1" stop-color="#1E96C8"/>
          </linearGradient>
          <linearGradient id="paint1_linear_117_19" x1="29.0231" y1="27.8449" x2="34.6481" y2="36.8449" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EFF7FC"/>
            <stop offset="1" stop-color="white"/>
          </linearGradient>
          <clipPath id="clip0_117_19">
            <rect width="54" height="54" fill="white"/>
          </clipPath>
        </defs>
    </svg>
  )
}
