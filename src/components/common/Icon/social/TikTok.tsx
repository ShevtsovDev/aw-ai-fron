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
        <g clip-path="url(#clip0_136_14)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0C41.9122 0 54 12.0878 54 27C54 41.9122 41.9122 54 27 54C12.0878 54 0 41.9122 0 27C0 12.0878 12.0878 0 27 0Z" fill="url(#paint0_linear_136_14)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0645 11.1807C33.0655 11.6638 33.2079 18.6511 40.539 19.0867C40.539 21.1011 40.5411 22.5619 40.5411 24.4846C39.9864 24.5162 35.7149 24.2061 33.056 21.8352L33.0476 32.3441C33.1488 39.6383 27.7815 44.0764 20.7647 42.5429C8.66636 38.9243 12.6868 20.9809 24.8347 22.9004C24.8347 28.6938 24.8379 22.8994 24.8379 28.6938C19.8197 27.9555 18.1406 32.13 19.4748 35.12C20.6877 37.8411 25.6848 38.4307 27.4282 34.5916C27.6254 33.8407 27.7235 32.9832 27.7235 32.0213V11.1544L33.0645 11.1807Z" fill="white"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_136_14" x1="7.15395" y1="8.69273" x2="50.0122" y2="41.1307" gradientUnits="userSpaceOnUse">
            <stop stop-color="#67C4CE"/>
            <stop offset="1" stop-color="#E62A58"/>
          </linearGradient>
          <clipPath id="clip0_136_14">
            <rect width="54" height="54" fill="white"/>
          </clipPath>
        </defs>
    </svg>
  )
}
