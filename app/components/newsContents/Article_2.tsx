import React from 'react'
import { article_2 } from './data'

export default function Article_2() {
  return (
    <div className='grid gap-6 font-gothic font-normal text-2xl'>
      {article_2.map((item, index) => {
        return (

          <p key={index} className='leading-[2.75rem]'>{item}</p>

        )
      })}
    </div>
  )
}
