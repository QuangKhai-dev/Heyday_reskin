import Image from 'next/image'
import React from 'react'

import {
  AndroidIcon,
  BoardGameIcon,
  IOSIcon,
  MACIcon,
  PCIcon
} from './components/icons'
import Link from 'next/link'

const operatingSystemIcons = [
  {
    name: 'android',
    componentIcon: <AndroidIcon key='android' />
  },
  {
    name: 'ios',
    componentIcon: <IOSIcon key='ios' />
  },
  {
    name: 'mac',
    componentIcon: <MACIcon key='mac' />
  },
  {
    name: 'pc',
    componentIcon: <PCIcon key='pc' />
  },
  {
    name: 'board game',
    componentIcon: <BoardGameIcon key='boardgame' />
  }
]
const Banner = () => {
  const handleRenderApp = () => {
    return operatingSystemIcons.map(item => {
      return (
        <Link className='app-item' key={item.name} href='#'>
          <span className='icon'>{item.componentIcon}</span>
          <span className='icon-name'>{item.name}</span>
        </Link>
      )
    })
  }
  return (
    <section className='section-banner'>
      <div
        className='container-1920'
        // style={{ backgroundImage: `url('/2312/bg-banner.png')` }}
      >
        <div className='content-wrapper'>
          {/* Heyday Logo */}
          <Image
            src='/2312/logo-text.png'
            width={690}
            alt='Hey day'
            height={282}
            className='logo-text'
          />
          <div className='div-translateY'>
            {/* Title */}
            <h1>{/* <span>RISE & CONQUER</span> */}</h1>
            {/* List app */}
            <div className='list-apps'>{handleRenderApp()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
