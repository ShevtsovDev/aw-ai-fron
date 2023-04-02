export default () => {
  return (
    <svg viewBox="0 0 150 5" xmlns="http://www.w3.org/2000/svg">
      <circle cx="1" cy="2.5" r="1" fill="var(--color-grey-3)">
        <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="3.5" cy="2.5" r="1" fill="var(--color-grey-3)">
        <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="6" cy="2.5" r="1" fill="var(--color-grey-3)">
        <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>

  )
}