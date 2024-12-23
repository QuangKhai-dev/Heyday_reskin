'use client'
import React from 'react'
import backgroundButton from '@/public/layoutbuttonDetail.png'
import { MotifContainerProps } from '@/app/dataType'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ReturnButton, ShareButton } from '../icons'
import { disableLS, disableRS, enableLS, enableRS } from '@/public/icons'
import cn from '@/app/utils/cn'
const ButtonDetailPage = ({
  title,
  newsId,
  width,
  height,
  buttonClassname
}: MotifContainerProps) => {
  const router = useRouter()

  const handleClickButton = () => {
    if (title === 'share') {
    } else {
      router.push('/#community')
    }
  }

  const handleClickArrow = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      router.push(`${Number(newsId) - 1}`)
    } else {
      router.push(`${Number(newsId) + 1}`)
    }
  }

  return (
    <div
      style={{
        width: width,
        height: height
      }}
      className={`relative ${buttonClassname} `}
    >
      <img className='h-full w-full' src={backgroundButton.src} alt='' />
      <div className='absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-8'>
        <Image
          src={newsId === '1' ? disableLS : enableLS}
          alt='prevNewsButton'
          onClick={() => (newsId === '1' ? {} : handleClickArrow('prev'))}
          className={cn('cursor-pointer', {
            'cursor-not-allowed': newsId === '1'
          })}
        />

        <div
          className='flex cursor-pointer items-center gap-3'
          onClick={handleClickButton}
        >
          {title === 'share' ? <ShareButton /> : <ReturnButton />}
          <h6 className='bg-goldToBronze90deg bg-clip-text font-beaufortLoL text-2xl capitalize text-transparent'>
            {title}
          </h6>
        </div>

        <Image
          src={newsId === '5' ? disableRS : enableRS}
          alt='nextNewsButton'
          className={cn('cursor-pointer', {
            'cursor-not-allowed': newsId === '5'
          })}
          onClick={() => (newsId === '5' ? {} : handleClickArrow('next'))}
        />
      </div>
    </div>
  )
}

export default ButtonDetailPage
