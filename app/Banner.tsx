import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'
import {
  AndroidIcon,
  BoardGameIcon,
  IOSIcon,
  MACIcon,
  PCIcon
} from './components/icons'
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
        <div className='app-item' key={item.name}>
          <span className='icon'>{item.componentIcon}</span>
          <span className='icon-name'>{item.name}</span>
        </div>
      )
    })
  }
  return (
    <section className='section-banner'>
      <div
        className='container-1920'
        style={{ backgroundImage: `url('/2312/bg-banner.png')` }}
      >
        <div className='content-wrapper'>
          {/* Heyday Logo */}
          <Image
            src='/2312/logo-text.png'
            width={442}
            alt='Hey day'
            height={172}
            className='logo-text'
          />
          {/* Title */}
          <h1>
            <span>RISE & CONQUER</span>
          </h1>
          {/* List app */}
          <div className='list-apps'>{handleRenderApp()}</div>
        </div>
      </div>
    </section>
  )
}

export default Banner
