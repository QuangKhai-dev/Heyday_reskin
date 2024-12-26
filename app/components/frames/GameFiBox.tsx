import { Frames } from '@/app/dataType'
import { mask } from '@/public/images/gameFiM'
import { story_box } from '@/public/frames'
import React from 'react'
// import LeftLine from '../icons/directionShapes/LeftLine'
import cn from '@/app/utils/cn'
import Icons from '../icons/Icons'

interface GameFi extends Frames {
  id_story: number
}

export default function GameFiBox({
  height,
  title,
  subtitle,
  image,
  id_story
}: GameFi) {
  return (
    <div>
      <div
        className='game-fi-box group relative h-[360px] w-full cursor-pointer overflow-hidden bg-black bg-opacity-35 backdrop-blur-sm'
        style={{
          // width: width,
          height: height
        }}
      >
        <div
          className='view-bg absolute right-0 h-full w-[360px] translate-x-24 bg-cover bg-no-repeat duration-[1500ms] group-hover:translate-x-[25%] md:translate-x-20 md:group-hover:translate-x-3'
          style={{
            backgroundImage: `url(../images/gameFiM/${image})`,
            backgroundSize: 'contain',
            maskImage: `url(${mask.src})`,
            maskSize: '120% 100%',
            maskRepeat: 'no-repeat'
          }}
        ></div>
        <div
          className='group absolute h-full w-full bg-cover bg-no-repeat py-7 pl-10'
          style={{
            backgroundImage: `url(${story_box.src})`,
            backgroundSize: '100% 100%'
          }}
        >
          <div className='flex flex-col gap-3'>
            <h3
              className={cn(
                'text-title-gameFIM bg-clip-text font-beaufortLoL text-3xl uppercase',
                {
                  'text-2xl':
                    id_story === 6 ||
                    title?.toLowerCase().toString() ===
                      'marketplace for trading and lending'
                }
              )}
            >
              {title}
            </h3>

            <div className='content max-w-[350px] font-gothic leading-[1.375rem] text-white opacity-65'>
              {subtitle}
              <div className='animation-readmore mt-5'>
                <Icons.svgReadMore />
                <span>Read more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
