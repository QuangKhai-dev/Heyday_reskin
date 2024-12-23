import React from 'react'
import { article_4 } from './data'
import cn from '@/app/utils/cn'

export default function Article_4() {
  return (
    <div>
      {article_4.map((item, index) => {
        return (
          <div key={index} className=' mb-11  text-2xl'>
            <h3 className='bg-goldenAmber90deg text-transparent bg-clip-text font-beaufortLoL text-[2.5rem] leading-[3.125rem] mb-10 uppercase'>
              {item.title}
            </h3>
            {
              item.subtitle !== undefined && <p className='leading-[2.5rem]' dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>
            }
            <div className=''>
              {Array.isArray(item.paragraphs) ? item.paragraphs.map((paragraph, index) => {
                return (
                  <div key={index} className='mt-6'>
                    <h5 className={cn('text-white text-[2rem] leading-[2.5rem] font-gothic ', {
                      'inline': paragraph.childTitle.toLowerCase().toString().includes('mode')
                    })}>
                      {paragraph.childTitle}
                    </h5>
                    <p
                      className={cn('leading-[2.5rem] inline', {
                        'inline ml-2': paragraph.childTitle.toLowerCase().toString().includes('mode')
                      }
                      )}
                      dangerouslySetInnerHTML={{ __html: paragraph.childSub }}
                    >
                    </p>
                  </div>
                )
              }) :
                <p className='leading-[2.5rem]'
                  dangerouslySetInnerHTML={{ __html: item.paragraphs }}
                >
                </p>
              }
            </div>
          </div >
        )
      })}
      <p className='text-2xl text-white font-bold '>Join the world of Covenant today, build your empire, and rise through the ranks to become a legendary commander in Heyday: Rise of Empires!</p>
    </div >
  )
}
