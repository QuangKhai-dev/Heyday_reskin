import React from 'react'
import './style.scss'
import { gameplayList } from './../../data'
import GamePlayItem from './GamePlayItem'
import ReactSwiperCustomGamePLay from '@/app/components/carousel/ReactSwiperCustomGamePLay'
export default function Gameplay() {
  return (
    <section
      id='gameplay'
      className='relative flex scroll-mt-60 items-center pt-40 duration-300'
    >
      <div className='container-1640'>
        <div className='title'>
          <h2 className='lineskin'>Game play</h2>
        </div>
        <div className='content-desktop flex gap-7'>
          <div className='flex-1 space-y-6'>
            {gameplayList.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <GamePlayItem
                    key={index}
                    title={item.title}
                    content={item.subtitle}
                  />
                )
              }
            })}
          </div>
          <div className='flex-1 space-y-6'>
            {gameplayList.map((item, index) => {
              if (index % 2 === 1) {
                return (
                  <GamePlayItem
                    key={index}
                    title={item.title}
                    content={item.subtitle}
                  />
                )
              }
            })}
          </div>
        </div>
        <ReactSwiperCustomGamePLay />
      </div>
    </section>
  )
}
