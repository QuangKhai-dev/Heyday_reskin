import React from 'react'

interface Props {
  color?: string
}

export default function Diamond({ color }: Props) {
  return (
    <svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='7.7782'
        y='0.221802'
        width={5}
        height={5}
        transform='rotate(45 7.7782 0.221802)'
        fill={color ? color : 'url(#paint0_linear_367_2764)'}
      />
      <rect
        x='12.0208'
        y='4.46442'
        width={5}
        height={5}
        transform='rotate(45 12.0208 4.46442)'
        fill={color ? color : 'url(#paint0_linear_367_2764)'}
      />
      <rect
        x='7.7782'
        y='8.70709'
        width={5}
        height={5}
        transform='rotate(45 7.7782 8.70709)'
        fill={color ? color : 'url(#paint0_linear_367_2764)'}
      />
      <rect
        x='3.53558'
        y='4.46442'
        width={5}
        height={5}
        transform='rotate(45 3.53558 4.46442)'
        fill={color ? color : 'url(#paint0_linear_367_2764)'}
      />
      <defs>
        <linearGradient
          id='paint0_linear_367_2764'
          x1='7.7782'
          y1='2.7218'
          x2='15.4683'
          y2='2.7218'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEFFBC' />
          <stop offset={1} stopColor='#FFC671' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_367_2764'
          x1='12.0208'
          y1='6.96442'
          x2='19.7109'
          y2='6.96442'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEFFBC' />
          <stop offset={1} stopColor='#FFC671' />
        </linearGradient>
        <linearGradient
          id='paint2_linear_367_2764'
          x1='7.7782'
          y1='11.2071'
          x2='15.4683'
          y2='11.2071'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEFFBC' />
          <stop offset={1} stopColor='#FFC671' />
        </linearGradient>
        <linearGradient
          id='paint3_linear_367_2764'
          x1='3.53558'
          y1='6.96442'
          x2='11.2256'
          y2='6.96442'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FEFFBC' />
          <stop offset={1} stopColor='#FFC671' />
        </linearGradient>
      </defs>
    </svg>
  )
}
