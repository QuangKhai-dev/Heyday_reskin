import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ButtonHeader = () => {
  return (
    <Link
      className='button-action-header relative'
      href='https://docs.heyday.game/whitepaper'
      target='_blank'
    >
      <Image
        src='/2312/avaiablesoon.png'
        alt=''
        width={261.04}
        height={176.84}
        className='button-avaiable-soon'
      />
      <span className='relative z-10 uppercase'>Available Soon</span>
    </Link>
  )
}

export default ButtonHeader
