import React from 'react'
import './style.scss'
import { gameplayList } from './../../data'
import GamePlayItem from './GamePlayItem'
export default function Gameplay() {
  return (
    <section
      id='gameplay'
      className='relative flex scroll-mt-60 items-center pt-[140px] duration-300'
    >
      <div className='container-1680'>
        <div className='title'>
          <h2>Game play</h2>
        </div>
        <div className='flex gap-7'>
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
      </div>
    </section>
  )
}
