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
        <g clip-path="url(#clip0_102_1061)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1123 9.02245H11.4607C11.2245 9.02245 11.0674 8.86503 11.0674 8.62916C11.0674 8.39329 11.2248 8.23587 11.4607 8.23587H13.1123C13.5053 8.23587 13.8986 8.15742 14.2919 8.07845C14.5278 8 14.6852 7.92129 14.8424 7.84258C14.9998 7.76413 15.0785 7.528 15.0785 7.37084C15.0785 7.21342 14.9998 7.056 14.9211 6.89884C14.5278 6.42709 13.8199 6.11251 12.8762 5.79793C12.7974 5.79793 12.7974 5.71922 12.7187 5.71922C12.4829 5.5618 12.3257 5.32593 12.247 5.09006C12.247 4.77522 12.4044 4.53935 12.6403 4.38219C13.1907 3.59561 13.5053 2.888 13.4269 2.25858C13.3482 1.86555 13.1907 1.55097 12.8762 1.31484C12.3257 0.921547 11.5394 0.921547 11.0671 1.31484C10.7528 1.55097 10.5954 1.86555 10.5167 2.25858C10.4382 2.88774 10.7528 3.59561 11.3033 4.38219C11.4607 4.53961 11.382 4.77548 11.2245 4.93264C11.0671 5.09006 10.8313 5.01135 10.6741 4.85419C9.88751 3.91019 9.57293 2.96645 9.73035 2.10142C9.80906 1.55097 10.1236 1.00026 10.5954 0.685676C11.382 0.0565144 12.5618 0.0565144 13.3482 0.685676C13.8199 1.07897 14.1345 1.55097 14.2132 2.10142C14.2919 2.96645 13.9773 3.91045 13.2694 4.85419C13.1907 4.93264 13.1907 5.01135 13.112 5.01135C13.112 5.01135 13.1907 5.01135 13.1907 5.09006C14.2132 5.40464 14.9998 5.87639 15.4715 6.42684C15.7076 6.66297 15.8648 7.05626 15.8648 7.44955C15.8648 7.66319 15.8151 7.87389 15.7195 8.06498C15.624 8.25606 15.4853 8.42227 15.3144 8.55045C15.0785 8.70787 14.8424 8.86529 14.5278 8.94374C14.056 8.94374 13.584 9.02245 13.1123 9.02245ZM4.53938 9.02245H2.88777C2.33732 9.02245 1.86558 8.94374 1.47229 8.78658C1.15745 8.70787 0.921576 8.55045 0.685705 8.39329C0.371125 8.15742 0.135254 7.68542 0.135254 7.29213C0.135254 6.89884 0.292673 6.58426 0.528544 6.26968C1.079 5.71922 1.86532 5.32593 2.88777 5.01135C2.88777 5.01135 2.96648 5.01135 2.96648 4.93264C2.96648 4.93264 2.88777 4.85419 2.88777 4.77522C2.10145 3.832 1.70842 2.80955 1.86583 2.02297C1.94429 1.47251 2.25887 0.921805 2.73087 0.607224C3.51745 -0.0219372 4.69706 -0.0219372 5.48364 0.607224C5.95538 1.00051 6.26996 1.47251 6.34867 2.02297C6.42738 2.888 6.1128 3.832 5.40493 4.77574C5.24751 4.93316 5.01164 4.93316 4.85448 4.85445C4.69706 4.69703 4.61835 4.46116 4.77577 4.30374C5.40493 3.51742 5.6408 2.73084 5.56209 2.18039C5.56209 1.7871 5.32622 1.47251 5.01164 1.23639C4.46119 0.843353 3.75332 0.843353 3.20261 1.23639C2.88803 1.47251 2.65216 1.7871 2.65216 2.10168C2.57345 2.73084 2.88803 3.43845 3.43874 4.22503C3.59616 4.46116 3.83203 4.69703 3.75332 4.9329C3.75332 5.24774 3.51745 5.4049 3.28132 5.56206C3.28132 5.56206 3.20287 5.64077 3.1239 5.64077C2.25887 6.03406 1.62971 6.34864 1.15796 6.82064C1.07925 6.97806 1.00054 7.13522 1.00054 7.29239C1.00054 7.52826 1.07925 7.68568 1.23642 7.76439C1.39383 7.84284 1.55125 7.9218 1.78712 8.00026C2.10171 8.15768 2.495 8.23613 2.88803 8.23613H4.53964C4.77577 8.23613 4.93293 8.39355 4.93293 8.62942C4.93293 8.86529 4.77551 9.02271 4.53964 9.02271L4.53938 9.02245Z" fill="#A7A9B6"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.65169 15.8648H6.42717C5.7193 15.8648 5.09014 15.7861 4.53943 15.5502C4.1464 15.3928 3.83182 15.2356 3.59569 14.9997C3.12395 14.7639 2.88782 14.2132 2.88782 13.6627C2.88782 13.1907 3.04524 12.7974 3.35982 12.4044C3.98898 11.6965 5.01143 11.1458 6.42717 10.6741L6.66304 10.4382L6.42717 10.2021C5.40472 8.86529 4.93298 7.68542 5.09014 6.58426C5.24756 5.87639 5.56188 5.24748 6.19104 4.77522C7.21349 4.06761 8.78666 4.06761 9.7304 4.77522C10.3596 5.24748 10.7529 5.87639 10.8313 6.58426C10.9887 7.68542 10.5167 8.94374 9.57298 10.2023C9.33711 10.4382 9.33711 10.5166 9.33711 10.5166C9.33711 10.5166 9.49453 10.5954 9.57298 10.6741C10.9887 11.1458 12.0112 11.6965 12.6403 12.4044C12.9549 12.719 13.1123 13.1907 13.1123 13.6627C13.1123 14.2132 12.8762 14.7639 12.4829 15.0785C12.247 15.3143 11.9325 15.4715 11.5392 15.6289C10.91 15.7863 10.2808 15.8648 9.65169 15.8648ZM8.00008 4.93264C7.52808 4.93264 7.05633 5.09006 6.66304 5.32593C6.19104 5.64077 5.95517 6.11251 5.87646 6.66297C5.79801 7.528 6.1913 8.55045 6.97762 9.65161C7.21349 9.88748 7.44962 10.1236 7.37091 10.5166C7.37091 10.8315 7.05608 11.0674 6.82046 11.3032C6.82046 11.3032 6.74175 11.3819 6.66304 11.3819C5.32627 11.7752 4.46098 12.3257 3.83182 12.9548C3.75311 13.1123 3.6744 13.4268 3.6744 13.6627C3.6744 13.9773 3.83182 14.2919 4.06769 14.449C4.22511 14.6065 4.53943 14.7639 4.85427 14.8423C5.32601 14.9997 5.87646 15.0785 6.42717 15.0785H9.65169C10.2021 15.0785 10.7528 14.9997 11.2246 14.8423C11.5394 14.7639 11.7753 14.6065 12.0112 14.449C12.247 14.2919 12.4045 13.9773 12.4045 13.6627C12.4045 13.4268 12.3258 13.1123 12.0896 12.9548C11.5392 12.3257 10.5954 11.8537 9.25866 11.3819C9.17969 11.3819 9.17969 11.3032 9.10124 11.3032C8.86511 11.0674 8.55053 10.8312 8.55053 10.5166C8.55053 10.2021 8.78666 9.88748 9.02253 9.65161C9.80911 8.62916 10.2021 7.528 10.1237 6.66297C10.045 6.11251 9.80885 5.71922 9.33711 5.32619C8.94382 5.09006 8.47208 4.93264 8.00008 4.93264Z" fill="#A7A9B6"/>
        </g>
        <defs>
          <clipPath id="clip0_102_1061">
            <rect width="16" height="16" fill="white"/>
          </clipPath>
        </defs>
    </svg>
  )
}
