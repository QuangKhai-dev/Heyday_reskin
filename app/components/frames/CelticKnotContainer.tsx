'use client'

// import React, { useEffect, useMemo, useState } from 'react'
import styles from './styles/Frames.module.css'
import Image from 'next/image'
import cn from '@/app/utils/cn'
import { centerOrnament, cornerTL } from '@/public/frames'
import { Frames } from '@/app/dataType'

export default function CelticKnotContainer({ image }: Frames) {
  // const [clientWidth, setClientWidth] = useState(0)

  // useEffect(() => {
  //   // Function to update screen width
  //   const handleResize = () => {
  //     setClientWidth(window.innerWidth)
  //   }

  //   // Initialize screenWidth when component mounts
  //   if (typeof window !== 'undefined') {
  //     setClientWidth(window.innerWidth) // Set initial window width
  //   }

  //   // Add event listener for window resize
  //   window.addEventListener('resize', handleResize)

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [])

  // useMemo(() => {
  //   if (clientWidth <= 1024) {
  //     width = 47.396 * 2
  //     height = 27.083 * 2
  //   }
  // }, [clientWidth])

  return (
    <div
      className={cn(
        `${styles.borderGradient} relative flex flex-col justify-between overflow-hidden bg-black bg-opacity-35`,
        {}
      )}
      style={{
        width: '100%',
        height: `auto`,
        aspectRatio: ' 910/520 ',
        backgroundImage: `url(../images/newsUpdate/${image})`,
        backgroundSize: '100% 100%'
      }}
    >
      <div className='flex justify-between'>
        <Image src={cornerTL} alt='cornerTL' />
        <Image
          src={centerOrnament}
          alt='centerOrnament'
          className='rotate-180'
        />
        <Image src={cornerTL} alt='cornerTL' className='-scale-x-100' />
      </div>

      <div className='flex rotate-180 justify-between'>
        <Image src={cornerTL} alt='cornerTL' />
        <Image
          src={centerOrnament}
          alt='centerOrnament'
          className='rotate-180'
        />
        <Image src={cornerTL} alt='cornerTL' className='-scale-x-100' />
      </div>
    </div>
  )
}
