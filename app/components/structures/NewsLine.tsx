import React from 'react'

type Props = {
  width?: string
  className: string
}

export default function NewsLine({ width = '100%', className }: Props) {
  return (
    <svg
      width={width}
      height='13'
      viewBox='0 0 1609 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49977 2.12158L10.8785 6.50026L6.49977 10.8789L2.12109 6.50026L6.49977 2.12158Z'
        fill='black'
        stroke='#FBCEA0'
        strokeWidth='3'
      />
      <path
        d='M1608 7C1608.28 7 1608.5 6.77614 1608.5 6.5C1608.5 6.22386 1608.28 6 1608 6V7ZM11 7H1608V6H11V7Z'
        fill='url(#paint0_linear_11_39675)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_11_39675'
          x1='11'
          y1='7'
          x2='1608'
          y2='7'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FBCEA0' />
          <stop offset='1' stop-color='#D68A3D' />
        </linearGradient>
      </defs>
    </svg>
  )
}
