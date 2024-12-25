'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import AnimateHeight, { Height } from 'react-animate-height'

interface IProps {
  title: string
  content: string | undefined
}

const GamePlayItem = ({ title, content }: IProps) => {
  const [height, setHeight] = useState<Height>(0)
  return (
    <div className='gameplay-item relative'>
      <Image
        width={32}
        height={32}
        alt='icon'
        src='/2312/icon_gameplay_bottomleft.png'
        className='absolute -bottom-1 -left-1'
      />
      <Image
        width={32}
        height={32}
        alt='icon'
        src='/2312/icon_gameplay_bottomRight.png'
        className='absolute -bottom-1 -right-1'
      />
      <Image
        width={32}
        height={32}
        alt='icon'
        src='/2312/icon_gameplay_topleft.png'
        className='absolute -left-1 -top-1'
      />
      <Image
        width={32}
        height={32}
        alt='icon'
        src='/2312/icon_gameplay_topright.svg'
        className='absolute -right-1 -top-1'
      />
      <div
        className='animate-title flex cursor-pointer items-center justify-between'
        onClick={() => setHeight(height === 0 ? 'auto' : 0)}
      >
        <h3>{title}</h3>
        <div className='angle-icon'>
          <Image fill alt='icon gameplay' src='/2312/icon_gameplay.png' />
        </div>
      </div>
      <AnimateHeight
        id='example-panel'
        duration={500}
        height={height} // see props documentation below
      >
        <p className='desc pt-10 text-white'>{content}</p>
      </AnimateHeight>
    </div>
  )
}

export default GamePlayItem
