import React from 'react'
import { heyDayROE } from './data'
import backgroundAbout from '@/public/images/home/bg-about.jpg'
import shadowLeftRight from '@/public/images/home/shadow-left-right.png'
import Image from 'next/image'
import Link from 'next/link'
export default function HeyDay_ROE() {
  return (
    <div
      id='about'
      style={{
        backgroundImage: `url(${backgroundAbout.src})`,
        backgroundSize: 'cover'
      }}
      className='relative mt-40'
    >
      <Image
        src={shadowLeftRight.src}
        alt='shadow decoration'
        width={100}
        height={100}
        className='shadowLeftRight'
      />
      <div className='container-1420 container-blur-text'>
        <div className='flex justify-end pb-80'>
          <div className='content relative -mt-[10%] w-3/4 max-w-[872px]'>
            <h2
              className='mb-2 pt-16 xl:mb-16'
              id='aboutTitle'
              data-aos='fade-up'
            >
              heyday: rise of empires
            </h2>

            <div className='content' data-aos='fade-up'>
              {heyDayROE.map((item, index) => {
                return (
                  <p className='mb-8 font-light' key={index}>
                    {item}
                  </p>
                )
              })}
            </div>
            <div>
              <Link className='link-inter-underline' href='/news-update/2'>
                Read The Whole Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
