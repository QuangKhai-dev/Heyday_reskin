import React from 'react'
import { article_1 } from './data'
import cn from '@/app/utils/cn'

export default function Article_1() {
    return (
        <div>
            {article_1.map((item, index) => {
                return (
                    <div key={index} className='text-2xl font-gothic font-normal leading-[2.5rem] text-white mb-11'>
                        <h3 className='bg-goldenAmber90deg text-transparent bg-clip-text font-beaufortLoL text-[2.5rem] leading-[3.125rem] mb-10 uppercase'>
                            {item.title}
                        </h3>
                        {item.subtitle && <div className='mb-6'>{item.subtitle}</div>}
                        <ul>
                            {item.paragraphs.map((paragraph, index) => {
                                return (
                                    <li key={index} className={cn('mt-6', {
                                        'list-disc ml-5 mt-0': item.title.toLowerCase() === 'core gameplay features'
                                    })}>
                                        {paragraph}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
