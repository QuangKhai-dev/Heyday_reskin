import Image from 'next/image'
import React from 'react'

const ButtonHeader = () => {
  return (
    <button className='button-action-header relative'>
      <Image src='/2312/background-buttonHeader2.png' fill alt='' />
      <span className='relative z-10 uppercase'>Available Soon</span>
    </button>
  )
}

export default ButtonHeader
