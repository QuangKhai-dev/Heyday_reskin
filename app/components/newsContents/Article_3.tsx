import React from 'react'
import { article_3 } from './data'
import cn from '@/app/utils/cn'

export default function Article_3() {
  return (
    <div className='text-2xl font-gothic text-white '>
      {article_3.map((item, index) => {
        return (
          <div key={index} className=' font-normal mb-11 leading-[2.5rem]'>
            <h3 className='bg-goldenAmber90deg text-transparent bg-clip-text font-beaufortLoL text-[2.5rem] leading-[3.125rem] mb-10 uppercase'>
              {item.title}
            </h3>
            {item.subtitle && <div className='mb-6'>{item.subtitle}</div>}
            <ul>
              {item?.paragraphs.map((paragraph, index) => {
                return (
                  <li key={index} className={cn('mt-6 ', {
                    'list-decimal ml-5 mt-0': item.title.toLowerCase().toString() === 'a variety of game modes: catering to all playstyles'
                  })}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  >
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
      <p className='font-bold leading-[2.5rem]'>Join the battle for Covenant’s future. Forge your legacy, unlock powerful relics, and climb the Path of Ascendancy. The fate of the land is in your hands.</p>
    </div>
  )
}
