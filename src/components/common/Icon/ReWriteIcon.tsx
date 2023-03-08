import { IconProps } from 'src/components/common/Icon/IconProps'

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
        <circle cx="27" cy="27" r="27" fill="#DEDEDE"/>
        <path d="M19 13H13V41H19V13Z" fill="white"/>
        <path d="M41 13H21V41H41V13Z" fill="#52ACF9"/>
        <path d="M37 18H25V20H37V18Z" fill="white"/>
        <path d="M37 22H25V24H37V22Z" fill="white"/>
        <path d="M37 26H25V28H37V26Z" fill="white"/>
        <path d="M37 30H25V32H37V30Z" fill="white"/>
        <path d="M37 34H25V36H37V34Z" fill="white"/>
        <path d="M19 13H13V19H19V13Z" fill="#D9DCE1"/>
        <path d="M13 19V41H19V13H13V19ZM17 39H15V19H17V39ZM15 15H17V17H15V15ZM21 13V41H41V13H21ZM39 39H23V15H39V39Z" fill="black"/>
    </svg>
  )
}
