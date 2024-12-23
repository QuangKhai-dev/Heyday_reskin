'use client'
import { Item_l } from '@/app/components/icons/header/item_l'
import { Item_r } from '@/app/components/icons/header/item_r'
import { Nav_line } from '@/app/components/icons/header/nav_line'
import logo from '@/public/2312/logo.png'
import imageButton from '@/public/images/svgButton.png'

import iconRight from '@/public/2312/icons/menu-arrow-right.svg'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MediaList } from './components/structures'
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
    // <header
    //   className='fixed left-1/2 top-0 z-50 w-full max-w-none -translate-x-1/2 border-b border-[#fffbe47a] bg-[#eadfa2] bg-opacity-20'
    //   id='header'
    // >
    //   <div className='container-1680'>
    //     <div className='header_content flex w-full items-center justify-between'>
    //       <div className='header-left'>
    //         <Link href='/'>
    //           <Image src={logo} alt='Logo' className='header-logo' />
    //         </Link>
    //       </div>

    //       <div className='flex h-full flex-1 items-center justify-between xl:h-max'>
    //         <div
    //           className={`header-center mx-auto hidden h-full items-center justify-center gap-12 xl:flex`}
    //         >
    //           {navs.map((nav, index) => {
    //             return (
    //               <div key={index} className='wrapper'>
    //                 <div className='relative flex scroll-mt-64 items-center font-gothic font-semibold uppercase text-white'>
    //                   {nav.path === currentPath ? (
    //                     <>
    //                       <Item_l />
    //                       <Link
    //                         href={`${nav.path}`}
    //                         scroll={false}
    //                         onClick={() => handleActive(nav.path)}
    //                       >
    //                         {nav.name}
    //                       </Link>
    //                       <Item_r />

    //                       <span className='absolute bottom-[-20px] left-[22%]'>
    //                         <Nav_line />
    //                       </span>
    //                     </>
    //                   ) : (
    //                     <>
    //                       <Link
    //                         href={`${nav.path}`}
    //                         scroll={true}
    //                         className={clsx('text-white')}
    //                         onClick={() => handleActive(nav.path)}
    //                       >
    //                         {nav.name}
    //                       </Link>
    //                     </>
    //                   )}
    //                 </div>
    //               </div>
    //             )
    //           })}
    //         </div>

    //         <div className='header-right hidden xl:relative xl:block'>
    //           <Image
    //             src={'/images/header/icon.png'}
    //             alt=''
    //             width={160}
    //             height={60}
    //             className=''
    //           />

    //           <p className='absolute left-[40px] top-[22px] cursor-pointer font-["BeaufortforLOL"] text-sm text-[#3A1704]'>
    //             Available Soon
    //           </p>
    //         </div>

    //         {/* Nav Mobile */}
    //         <div className='div-toggle-menu ml-auto block items-center xl:invisible xl:hidden xl:w-0 xl:opacity-0'>
    //           {/* Menu button (small view only) */}
    //           <button
    //             onClick={toggleMenu}
    //             className='hover:bg-gray-700 rounded-md p-2 transition-all duration-300'
    //           >
    //             <div className='space-y-1 sm:space-y-2'>
    //               <div className='h-0.5 w-5 rounded-md bg-[#FFC671] sm:h-1 sm:w-8'></div>
    //               <div className='h-0.5 w-5 rounded-md bg-[#FFC671] sm:h-1 sm:w-8'></div>
    //               <div className='h-0.5 w-5 rounded-md bg-[#FFC671] sm:h-1 sm:w-8'></div>
    //             </div>
    //           </button>

    //           {/* Sidebar */}
    //           <div
    //             className={`fixed right-0 top-0 z-20 h-screen w-max transform bg-black p-6 pl-10 pr-4 text-white transition-transform duration-300 ease-in-out ${
    //               isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
    //             }`}
    //             onClick={closeSidebar}
    //           >
    //             {/* Close button */}
    //             <div className='mb-8 flex justify-end'>
    //               <button
    //                 onClick={closeSidebar}
    //                 className='text-3xl font-bold text-white'
    //               >
    //                 <img src={imageButton.src} alt='' width={16} />
    //               </button>
    //             </div>

    //             {/* Navigation Links */}
    //             <nav className='nagigation-sidebar flex flex-col items-end gap-8'>
    //               {navs.map((nav, index) => (
    //                 <div
    //                   key={index}
    //                   onClick={() => {
    //                     window.location.href = `/${nav.path}`
    //                     closeSidebar()
    //                   }}
    //                 >
    //                   <Link
    //                     href={`/${nav.path}`}
    //                     scroll={true}
    //                     className='hover:text-gray-300 font-gothic font-semibold uppercase text-white transition-all duration-200'
    //                     onClick={closeSidebar}
    //                   >
    //                     {nav.name}
    //                   </Link>
    //                 </div>
    //               ))}
    //             </nav>

    //             <div className='mt-8 flex items-center justify-end gap-5'>
    //               <MediaList
    //                 orientation='horizonal'
    //                 page='header'
    //                 className='media-list-sidebar flex gap-4'
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         {/* HEADER ITEM */}
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <header className='header' id='header'>
      <div className='header-wrapper'>
        {/* Logo */}
        <Link href='/'>
          <Image src={logo} alt='Logo' className='header-logo' width={130.46} />
        </Link>
        {/* Main Menu */}
        <nav>{renderNav()}</nav>
        {/* Avaiable Soon */}
      </div>
    </header>
  )
}
