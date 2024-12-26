'use client'

import { IconAround } from '@/app/components/icons/gamePlay/IconAround'
import cn from '@/app/utils/cn'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isActive: boolean
  onClick: () => void
}

export default function RoundEdge({ children, isActive, onClick }: Props) {
  return (
    <div className='h-15 w-15 flexCenter group relative' onClick={onClick}>
      <IconAround />
      <div
        className={cn('absolute duration-700', {
          '-scale-y-100': isActive,
          'scale-y-100': !isActive
        })}
      >
        {children}
      </div>
    </div>
  )
}
