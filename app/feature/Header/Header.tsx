'use client'
import logo from '@/public/2312/logo.png'
import iconRight from '@/public/2312/icons/menu-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import './style.scss'
import ButtonHeader from './ButtonHeader'

const navs = [
  { name: 'about', path: '/#aboutTitle' },
  { name: 'game features', path: '/#gameplayTitle' },
  { name: 'community', path: '/#communityTitle' },
  { name: 'support', path: '/#supportTitle' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Menu state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Sidebar state
  const [currentPath, setCurrentPath] = useState('')

  const handleActive = (path: string) => setCurrentPath(path)
  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen ? false : true)
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsMenuOpen(false)
    setIsSidebarOpen(false)
  }

  const renderNav = () => {
    return navs.map(item => {
      return (
        <Link href={item.path} key={item.name} className='menu'>
          <Image
            src={iconRight}
            alt={item.name}
            width={60}
            className='icon-left'
          />
          <span className='text'>{item.name}</span>
          <Image
            src={iconRight}
            alt={item.name}
            width={60}
            className='icon-right'
          />
        </Link>
      )
    })
  }

  return (
    <header className='header' id='header'>
      <div className='header-wrapper'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} alt='Logo' className='header-logo' width={130.46} />
        </Link>
        {/* Main Menu */}
        <nav>{renderNav()}</nav>
        {/* Avaiable Soon */}
        <ButtonHeader />
      </div>
    </header>
  )
}
