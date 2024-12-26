import React from 'react'

export const DotCarousel = {
  dotCarousel: () => (
    <svg
      width={13}
      height={14}
      viewBox='0 0 13 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49992 1.55273L12.2928 7.34563L6.49992 13.1385L0.707031 7.34563L6.49992 1.55273Z'
        fill='black'
        stroke='#FBCEA0'
        strokeOpacity='0.5'
      />
    </svg>
  ),
  dotActiveCarousel: () => (
    <svg
      width={13}
      height={14}
      viewBox='0 0 13 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.49977 2.9668L10.8785 7.34548L6.49977 11.7242L2.12109 7.34548L6.49977 2.9668Z'
        fill='black'
        stroke='#FBCEA0'
        strokeWidth={3}
      />
    </svg>
  )
}

export default DotCarousel
