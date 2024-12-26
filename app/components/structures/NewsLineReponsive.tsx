import React from 'react'

type Props = {
  className: string
}

const NewsLineReponsive = ({ className }: Props) => {
  return (
    <svg
      width='{327}'
      height='{14}'
      viewBox='0 0 327 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49977 2.49658L10.8785 6.87526L6.49977 11.2539L2.12109 6.87526L6.49977 2.49658Z'
        fill='black'
        stroke='#FBCEA0'
        strokeWidth='{3}'
      />
      <path
        d='M326 7.375C326.276 7.375 326.5 7.15114 326.5 6.875C326.5 6.59886 326.276 6.375 326 6.375V7.375ZM11 7.375H326V6.375H11V7.375Z'
        fill='url(#paint0_linear_11_40643)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_11_40643'
          x1='{11}'
          y1='7.375'
          x2='{326}'
          y2='7.375'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FBCEA0' />
          <stop offset='{1}' stopColor='#D68A3D' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default NewsLineReponsive
