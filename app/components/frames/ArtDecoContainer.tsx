'use client'

import { Frames } from '@/app/dataType'
import cn from '@/app/utils/cn'
import { l_bottom, l_top, r_bottom, r_top } from '@/public/images'
import Image from 'next/image'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import styles from './styles/Frames.module.css'

interface Props extends Frames {
  children: ReactNode
  subArr?: Array<string>
  isActive: boolean
  className?: string
}

export default function ArtDecoContainer({
  children,
  width,
  subArr,
  isActive,
  className
}: Props) {
  const setHeight = useMemo(() => {
    if (!isActive) return 5.625
    else if (subArr) return 18.125
    return 12.625
  }, [isActive, subArr])

  const [clientWidth, setClientWidth] = useState(0)

  useEffect(() => {
    // Function to update screen width
    const handleResize = () => {
      setClientWidth(window.innerWidth)
    }

    // Initialize screenWidth when component mounts
    if (typeof window !== 'undefined') {
      setClientWidth(window.innerWidth) // Set initial window width
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const setWidth = useMemo(() => {
    if (clientWidth >= 1536) {
      width = width
    } else if (clientWidth >= 640) {
      width = (width! + clientWidth / 16) * 0.22
    } else if (clientWidth <= 640) {
      width = (width! + clientWidth / 16) * 0.3
    }
    return width
  }, [clientWidth])

  return (
    <div className='relative'>
      <div
        className={cn(
          `${styles.borderGradient} ${className} artDeco overflow-hidden bg-black bg-opacity-35 transition-all duration-700 ease-in-out xl:max-w-[900px]`,
          {}
        )}
        style={{
          width: `${setWidth}rem`,
          height: `${setHeight}rem`
        }}
      >
        {children}
      </div>

      <Image
        src={r_top}
        width={33}
        height={33}
        alt='cornerTL'
        className='icon-wrapper absolute right-[-3px] top-[-4px]'
      />

      <Image
        src={r_bottom}
        width={33}
        height={33}
        alt='cornerTL'
        className='icon-wrapper absolute bottom-[-4px] right-[-3px]'
      />

      <Image
        src={l_top}
        width={33}
        height={33}
        alt='cornerTL'
        className='icon-wrapper absolute left-[-3px] top-[-4px]'
      />

      <Image
        src={l_bottom}
        width={33}
        height={33}
        alt='cornerTL'
        className='icon-wrapper absolute bottom-[-4px] left-[-3px]'
      />
    </div>
  )
}
