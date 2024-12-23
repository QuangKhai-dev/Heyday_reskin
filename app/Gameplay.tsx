import React from 'react'
import GameplayBox from './components/frames/GameplayBox'
import { gameplayList } from './data'
import ReactSwiperCustomGamePLay from './components/carousel/ReactSwiperCustomGamePLay'
import Image from 'next/image'
import { arrow_line } from '@/public/images'

export default function Gameplay() {
  return (
    <section
      id='gameplay'
      className='relative flex scroll-mt-60 items-center pt-[140px] duration-300'
    >
      <div className='container-1420'>
        <div
          className='flexCenter -h-full relative z-20 w-full flex-col gap-12'
          id='gameplayTitle'
        >
          <div className='title mr-auto'>
            <h2 className='titleFont relative z-10'>game play</h2>
            <Image
              src={arrow_line.src}
              alt=''
              width={220}
              height={4}
              className='mt-2'
            />
          </div>
          <div className='relative z-10 w-full'>
            <div className='hidden w-full grid-cols-2 gap-5 sm:mr-2.5 lg:grid'>
              {gameplayList.map((gameplay, index) => {
                return (
                  <GameplayBox
                    key={index}
                    width={43.75}
                    title={gameplay.title}
                    subtitle={gameplay.subtitle}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className='relative z-30 mb-20 block lg:hidden'>
          <ReactSwiperCustomGamePLay />
        </div>
      </div>
    </section>
  )
}
