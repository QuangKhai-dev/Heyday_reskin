import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  bgColor: string
  opacity: number
}

export default function BlurBgText({ children, bgColor, opacity }: Props) {
  return (
    <div className='relative'>
      <div
        className={'bg-blur-text z-10'}
        style={{
          backgroundColor: `${bgColor}`,
          filter: `blur(${opacity}px)`
        }}
      ></div>
      {children}
    </div>
  )
}
