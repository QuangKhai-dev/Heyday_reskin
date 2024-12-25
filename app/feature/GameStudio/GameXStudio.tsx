import React from 'react'
import './style.scss'
import { GameXStudioBox } from '@/app/components/frames'
export default function GameXStudio() {
  return (
    <section id='support' className='pt-160 pb-68'>
      <div className='container-1640'>
        <div data-aos='fade-up'>
          <h2 className='lineskin items-center'>gamexstudio</h2>

          <p className='content mx-auto mt-10 max-w-[1130px] text-center text-white opacity-65'>
            Born from the fusion of Been Boom Labs&apos; explosive innovation
            and EBIZWORLD&apos;s storytelling mastery, GameXStudio is where bold
            ideas and visionary gameplay collide. This dynamic partnership is
            dedicated to crafting experiences that blend thrilling narratives,
            rich world-building, and cutting-edge gaming technology
          </p>
        </div>
        <div className='no-scrollbar mt-10'>
          <GameXStudioBox />
        </div>
      </div>
    </section>
  )
}
