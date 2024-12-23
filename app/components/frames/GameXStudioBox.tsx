'use client'

// import React, { useEffect, useState } from 'react'
import { BB, EBWLogo, X } from '@/public/images/gameXStudio'
import Image from 'next/image'

export default function GameXStudioBox() {
  return (
    <div
      className='flexCenter max-h-[302px] bg-full bg-no-repeat'
      data-aos='fade-up'
    >
      <div className='logos flex w-full items-center justify-evenly sm:px-0 lg:px-12'>
        <Image
          src={EBWLogo}
          alt='EBWLogo'
          className='w-[8.333vw] object-contain xl:max-w-[159px]'
        />
        <Image
          src={BB}
          alt='BChain'
          className='w-[9.219vw] -translate-y-6 object-contain xl:max-w-[150px]'
        />
        <Image
          src={X}
          alt='X'
          className='w-[13.177vw] object-contain xl:max-w-[253px]'
        />
      </div>
    </div>
  )
}
