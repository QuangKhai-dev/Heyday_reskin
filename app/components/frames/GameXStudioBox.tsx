'use client'

// import React, { useEffect, useState } from 'react'
import { BB, EBWLogo, X } from '@/public/images/gameXStudio'
import Image from 'next/image'

export default function GameXStudioBox() {
  return (
    <div className='flexCenter mx-auto max-w-[861.31px]' data-aos='fade-up'>
      <div className='logos flex w-full items-center justify-between gap-5 px-0'>
        <Image src={EBWLogo} alt='EBWLogo' width={169} />
        <Image src={BB} alt='BChain' width={171} className='mt-[-21px]' />
        <Image src={X} alt='X' width={252.31} />
      </div>
    </div>
  )
}
