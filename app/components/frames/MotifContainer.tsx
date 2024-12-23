'use client'

import React from 'react'
import styles from './styles/Frames.module.css'
import { MotifContainerProps } from '@/app/dataType'
import Image from 'next/image'
import { centerOrnament_2, lgContainer_1, lgContainer_2 } from '@/public/frames'
import { disableLS, disableRS, enableLS, enableRS } from '@/public/icons'
import { ShareButton } from '../icons'
import ReturnButton from '../icons/buttonIcon/ReturnButton'
import { useRouter } from 'next/navigation'
import cn from '@/app/utils/cn'
import { twMerge } from 'tailwind-merge'

export default function MotifContainer({
  title,
  newsId,
  buttonClassname
}: MotifContainerProps) {
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
    <>
      <div
        className={twMerge(
          'relative',
          styles.borderGradient_2,
          buttonClassname
        )}
      >
        <div className='absolute h-full w-full'>
          <div className='flex justify-between'>
            <Image
              src={lgContainer_1}
              alt='LGContainer_1'
              className='h-[2.688rem] w-[2.563rem] -translate-x-2.5 -translate-y-1.5'
            />
            <Image
              src={centerOrnament_2}
              alt='centerOrnament_2'
              className='-translate-y-9'
            />
            <Image
              src={lgContainer_2}
              alt='LGContainer_1'
              className='h-[2.688rem] w-[2.563rem] -translate-y-1.5 translate-x-2.5'
            />
          </div>

          <div className='flex -translate-y-8 rotate-180 justify-between'>
            <Image
              src={lgContainer_1}
              alt='LGContainer_1'
              className='h-[2.688rem] w-[2.563rem] -translate-x-2.5 -translate-y-1'
            />
            <Image
              src={centerOrnament_2}
              alt='centerOrnament_2'
              className='-translate-y-9'
            />
            <Image
              src={lgContainer_2}
              alt='LGContainer_1'
              className='h-[2.688rem] w-[2.563rem] -translate-y-1 translate-x-2.5'
            />
          </div>
        </div>

        <div className='new-actions absolute flex h-full w-full items-center justify-between p-6'>
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
    </>
  )
}
