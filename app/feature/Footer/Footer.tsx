'use client'
import { MediaList } from '@/app/components/structures'
import { logo } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { footer_nav } from './../../data'
import './style.scss'
import whiteDot from '@/public/2312/whiteDot.png'
import yellowDot from '@/public/2312/dot_image.png'

export default function Footer() {
  return (
    <footer className='relative w-full pb-24 pt-6' id='footer'>
      <div className='line-footer'></div>
      <div className='container-1640'>
        <div className='footer-content relative z-10 flex justify-between'>
          {/* {/ ICON + MEDIA LIST /} */}
          <div className='footer-title'>
            <Link href='/'>
              <Image src={logo} alt='logo' className='w-[12.5rem]' />
            </Link>
            <MediaList orientation='horizonal' page='footer' />
          </div>

          {/*ITEM LIST */}
          <div className='footer-text flex flex-1 justify-between gap-3'>
            {footer_nav.map((content, index) => {
              return (
                <div key={index} className='footer-text-item text-nowrap'>
                  <h3 className='bg-whiteToPeach98deg bg-clip-text font-beaufortLoL text-xl uppercase leading-5 text-transparent'>
                    {content.name}
                  </h3>
                  <ul className='mt-5'>
                    {content.list.map((item, index) => {
                      return (
                        <li key={index} className='flex items-center gap-2.5'>
                          <Image
                            src={yellowDot}
                            width={32}
                            height={32}
                            alt=''
                            className='dot-yellow'
                          />
                          <Image
                            src={whiteDot}
                            width={32}
                            height={32}
                            alt=''
                            className='dot-white'
                          />
                          <span className='cursor-pointer capitalize leading-loose text-beige-50'>
                            {item.path !== '' ? (
                              <Link href={`${item.path}`}>{item.name}</Link>
                            ) : (
                              item.name
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
