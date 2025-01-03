'use client'

import logo from '@/public/2312/logo.png'
import iconRight from '@/public/2312/icons/menu-arrow-right.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './style.scss'
import ButtonHeader from './ButtonHeader'
import { MediaList } from '@/app/components/structures'
import imageButton from '@/public/images/svgButton.png'
import menuBtn from '@/public/2312/menu-button.png'
export default function Header() {
  const [idActive, setIdActive] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Menu state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Sidebar state
  const [navs] = useState([
    {
      name: 'about',
      path: '/#section-banner',
      id: 0,
      sectionId: 'section-banner'
    },
    { name: 'game features', path: '/#gameplay', id: 1, sectionId: 'gameplay' },
    { name: 'community', path: '/#community', id: 2, sectionId: 'community' },
    { name: 'support', path: '/#support', id: 3, sectionId: 'support' }
  ])
  useEffect(() => {
    const observerOptions = {
      root: null, // Theo dõi toàn bộ viewport
      threshold: 0.5 // Ít nhất 50% phần tử phải xuất hiện trong viewport
    }

    interface Nav {
      name: string
      path: string
      id: number
      sectionId: string
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const nav = navs.find((nav: Nav) => nav.sectionId === entry.target.id)
          if (nav) setIdActive(nav.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Gắn observer cho từng section
    navs.forEach(nav => {
      const section = document.getElementById(nav.sectionId)
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect() // Cleanup observer khi component unmount
    }
  }, [navs])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsMenuOpen(false)
    setIsSidebarOpen(false)
  }

  const renderNav = () => {
    return navs.map(item => (
      <Link
        href={item.path}
        key={item.name}
        className={item.id == idActive ? 'menu active' : 'menu'}
        onClick={() => setIdActive(item.id)}
        scroll={true}
      >
        {item.id === idActive && (
          <Image
            src={iconRight}
            alt={item.name}
            width={60}
            className='icon-left'
          />
        )}

        <span className='text'>{item.name}</span>

        {item.id === idActive && (
          <Image
            src={iconRight}
            alt={item.name}
            width={60}
            className='icon-right'
          />
        )}
      </Link>
    ))
  }

  return (
    <header className='header' id='header'>
      <div className='header-wrapper'>
        {/* Logo */}
        <div className='logo'>
          <Link href='/'>
            <Image
              src={logo}
              alt='Logo'
              className='header-logo'
              width={130.46}
            />
          </Link>
        </div>
        {/* Main Menu */}
        <nav className='hidden xl:flex'>{renderNav()}</nav>
        {/* Available Soon */}
        <ButtonHeader />

        <div className='div-toggle-menu block items-center'>
          {/* Menu button (small view only) */}
          <button
            onClick={toggleMenu}
            className='hover:bg-gray-700 rounded-md p-2 transition-all duration-300'
          >
            <Image src={menuBtn} width={27} height={26} alt='' />
          </button>

          {/* Sidebar */}
          <div
            className={`side-barr fixed left-0 top-0 z-20 h-screen w-max max-w-[60%] transform bg-black p-6 pl-10 pr-4 text-white transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? 'translate-x-0' : 'translate-x-[-100%]'
            }`}
            onClick={closeSidebar}
          >
            {/* Close button */}
            <div className='mb-8 flex justify-start'>
              <button
                onClick={closeSidebar}
                className='text-3xl font-bold text-white'
              >
                <Image src={imageButton.src} alt='' width={16} height={16} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className='nagigation-sidebar flex flex-col items-end gap-8'>
              {navs.map((nav, index) => (
                <div
                  key={index}
                  onClick={() => {
                    window.location.href = `/${nav.path}`
                    closeSidebar()
                  }}
                >
                  <Link
                    href={`/${nav.path}`}
                    scroll={true}
                    className='hover:text-gray-300 font-gothic font-semibold uppercase text-white transition-all duration-200'
                    onClick={closeSidebar}
                  >
                    {nav.name}
                  </Link>
                </div>
              ))}
            </nav>
            <div className='mt-8 flex items-center justify-end gap-5'>
              <MediaList
                orientation='horizonal'
                page='header'
                className='media-list-sidebar flex gap-4'
              />
            </div>
          </div>
        </div>

        {/* HEADER ITEM */}
      </div>
    </header>
  )
}
