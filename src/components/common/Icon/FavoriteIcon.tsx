import {IconProps} from "./IconProps";

export default (props: IconProps) => {
    const {width = 24, height = 24, fill = 'none', viewBox = '0 0 24 24'} = props
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_1_315" fill="#8C8C8C">
                <path
                    d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H13V15H11V21H6Z"/>
            </mask>
            <path
                d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.97933 20.8043 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.68333 4.071 9.38333 4.213 9.1C4.35433 8.81667 4.55 8.58333 4.8 8.4L10.8 3.9C10.9833 3.76667 11.175 3.66667 11.375 3.6C11.575 3.53333 11.7833 3.5 12 3.5C12.2167 3.5 12.425 3.53333 12.625 3.6C12.825 3.66667 13.0167 3.76667 13.2 3.9L19.2 8.4C19.45 8.58333 19.646 8.81667 19.788 9.1C19.9293 9.38333 20 9.68333 20 10V19C20 19.55 19.8043 20.021 19.413 20.413C19.021 20.8043 18.55 21 18 21H13V15H11V21H6Z"
                fill="#8C8C8C"/>
            <path
                d="M6 19H2V23H6V19ZM9 19V23H13V19H9ZM9 13V9H5V13H9ZM15 13H19V9H15V13ZM15 19H11V23H15V19ZM18 19V23H22V19H18ZM18 10H22V8L20.4 6.8L18 10ZM12 5.5L14.4 2.3L12 0.5L9.6 2.3L12 5.5ZM6 10L3.6 6.8L2 8V10H6ZM4.213 9.1L7.78903 10.8922L7.79239 10.8855L4.213 9.1ZM4.8 8.4L7.16545 11.6256L7.1828 11.6129L7.2 11.6L4.8 8.4ZM10.8 3.9L8.44731 0.665056L8.42353 0.682354L8.4 0.7L10.8 3.9ZM13.2 3.9L15.6 0.7L15.5765 0.682354L15.5527 0.665056L13.2 3.9ZM19.2 8.4L16.8 11.6L16.8172 11.6129L16.8345 11.6256L19.2 8.4ZM19.788 9.1L23.3674 7.31451L23.364 7.30778L19.788 9.1ZM19.413 20.413L22.239 23.2438L22.2438 23.239L19.413 20.413ZM13 21H9V25H13V21ZM13 15H17V11H13V15ZM11 15V11H7V15H11ZM11 21V25H15V21H11ZM6 23H9V15H6V23ZM13 19V13H5V19H13ZM9 17H15V9H9V17ZM11 13V19H19V13H11ZM15 23H18V15H15V23ZM22 19V10H14V19H22ZM20.4 6.8L14.4 2.3L9.6 8.7L15.6 13.2L20.4 6.8ZM9.6 2.3L3.6 6.8L8.4 13.2L14.4 8.7L9.6 2.3ZM2 10V19H10V10H2ZM6 17C6.20998 17 6.48131 17.0397 6.76999 17.1597C7.05818 17.2795 7.27386 17.442 7.41643 17.5846L1.75957 23.2414C2.89579 24.3776 4.38172 25 6 25V17ZM7.41643 17.5846C7.55802 17.7262 7.72021 17.9411 7.84 18.229C7.96006 18.5175 8 18.7891 8 19H0C0 20.6203 0.624133 22.106 1.75957 23.2414L7.41643 17.5846ZM8 19V10H0V19H8ZM8 10C8 10.3061 7.92559 10.6197 7.78902 10.8922L0.636976 7.30778C0.21641 8.14694 0 9.06055 0 10H8ZM7.79239 10.8855C7.65577 11.1594 7.44021 11.4241 7.16545 11.6256L2.43455 5.17438C1.65979 5.74254 1.05289 6.47397 0.633608 7.31452L7.79239 10.8855ZM7.2 11.6L13.2 7.1L8.4 0.7L2.4 5.2L7.2 11.6ZM13.1527 7.13494C13.0292 7.22473 12.8573 7.32228 12.6399 7.39473L10.1101 -0.194733C9.49272 0.0110579 8.93744 0.308599 8.44731 0.665056L13.1527 7.13494ZM12.6399 7.39473C12.4207 7.46779 12.2012 7.5 12 7.5V-0.5C11.3655 -0.5 10.7293 -0.401123 10.1101 -0.194733L12.6399 7.39473ZM12 7.5C11.7988 7.5 11.5793 7.46779 11.3601 7.39473L13.8899 -0.194733C13.2707 -0.401123 12.6345 -0.5 12 -0.5V7.5ZM11.3601 7.39473C11.1427 7.32228 10.9708 7.22473 10.8473 7.13494L15.5527 0.665056C15.0626 0.308599 14.5073 0.0110579 13.8899 -0.194733L11.3601 7.39473ZM10.8 7.1L16.8 11.6L21.6 5.2L15.6 0.7L10.8 7.1ZM16.8345 11.6256C16.5614 11.4253 16.3476 11.1628 16.212 10.8922L23.364 7.30778C22.9444 6.47055 22.3386 5.74136 21.5655 5.17438L16.8345 11.6256ZM16.2086 10.8855C16.0733 10.6142 16 10.303 16 10H24C24 9.06371 23.7854 8.15246 23.3674 7.31452L16.2086 10.8855ZM16 10V19H24V10H16ZM16 19C16 18.79 16.0397 18.5191 16.1593 18.2312C16.2787 17.9438 16.4405 17.7289 16.5822 17.587L22.2438 23.239C23.3779 22.1031 24 20.6181 24 19H16ZM16.587 17.5822C16.7289 17.4405 16.9438 17.2787 17.2312 17.1593C17.5191 17.0397 17.79 17 18 17V25C19.6181 25 21.1031 24.3779 22.239 23.2438L16.587 17.5822ZM18 17H13V25H18V17ZM17 21V15H9V21H17ZM13 11H11V19H13V11ZM7 15V21H15V15H7ZM11 17H6V25H11V17Z"
                fill="#8C8C8C" mask="url(#path-1-inside-1_1_315)"/>
        </svg>
    )
}