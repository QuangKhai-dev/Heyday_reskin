import React from 'react'
import GameXStudioBox from './components/frames/GameXStudioBox'
import Image from 'next/image'
import { arrow_line } from '@/public/images'

export default function GameXStudio() {
  return (
    <section id='support'>
      <div className='container-1420 relative z-10 pb-[30px]' id='supportTitle'>
        <div data-aos='fade-up'>
          <h2 className='titleFont mb-5 text-center'>gamexstudio</h2>
          <div className='mb-8 w-full'>
            <Image
              src={arrow_line.src}
              alt=''
              width={220}
              height={4}
              className='m-auto text-center'
            />
          </div>
          <p className='m-auto w-[800px] text-center opacity-65'>
            {`Born from the fusion of Been Boom Lab\'s explosive innovation and EBIZWORLD\'s storytelling mastery, 
                        GameXStudio is where bold ideas and visionary gameplay collide. 
                        This dynamic partnership is dedicated to crafting experiences that blend thrilling 
                        narratives, rich world-building, and cutting-edge gaming technology`}
          </p>
        </div>
        <div className='no-scrollbar mt-10'>
          <GameXStudioBox />
        </div>
      </div>
    </section>
  )
}
