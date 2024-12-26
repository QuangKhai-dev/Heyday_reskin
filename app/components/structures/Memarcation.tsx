import React from 'react'
import Image from 'next/image'
import { line } from '@/public/frames'

export default function Memarcation() {
  return (
    <div className='footer-line flex w-full justify-center'>
      <Image src={line} alt='the line' className='mt-20 h-1.5 w-[80%]' />
    </div>
  )
}
