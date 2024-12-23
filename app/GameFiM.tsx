'use client'
import { arrow_line } from '@/public/images'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { gamefiMe } from './data'
import gameFi1 from '@/app/components/icons/gameFi/gameFi1.png'

interface StateType {
  id: number | string
  name: string
  desc: string
  img: StaticImageData
}

const initialState: StateType = {
  id: 1,
  name: 'lands',
  desc: 'In Heyday, NFTs are central to the Play-to-Earn experience. Players can collect, trade, and enhance various NFTs, each providing unique abilities and benefits. These NFTs represent lands, heroes, beasts, items, and much more, providing a dynamic way to impact gameplay and monetize in-game achievements.',
  img: gameFi1
}

export default function GameFiM() {
  const [text, setText] = useState(initialState)
  const [idActive, setIDActive] = useState(initialState.id)
  const handleChangeText = (obj: StateType) => {
    setText(obj)
    setIDActive(obj.id)
  }

  return (
    <section id='gameFiM' className='mt-11 scroll-mt-36'>
      <div className='container-1420 relative z-10 pt-28'>
        <div className='grid grid-cols-12'>
          <div className='col-span-5'>
            <h2>gamefi mechanism</h2>
            <Image
              src={arrow_line.src}
              alt=''
              width={220}
              height={4}
              className='mt-2'
            />
            <h3 className='titleFont mt-4 font-light text-white lg:mt-5'>
              {text.name}
            </h3>
            <p className='mt-4 font-light text-white lg:mt-5'>{text.desc}</p>
          </div>

          <div className='col-span-7'>
            {
              <Image
                src={text.img.src}
                alt=''
                width={400}
                height={400}
                className='h-[200px] xl:h-[460px] xl:w-[900px]'
              />
            }
          </div>
        </div>

        <div className='flex w-full justify-between'>
          {gamefiMe.stories.map((el, id) => (
            <div
              key={id}
              className='cursor-pointer'
              onClick={() =>
                handleChangeText({
                  id: el.id,
                  name: el.name,
                  desc: el.story,
                  img: el.img
                })
              }
            >
              <div className='relative m-auto h-[94px] w-[96px] xl:h-[194px] xl:w-[196px]'>
                <Image
                  src={`/images/gameFiM/${el.url}`}
                  alt=''
                  width={160}
                  height={160}
                  className={`left-0 top-0 z-40 h-[80px] w-[86px] xl:h-[156px] xl:w-[162px] ${idActive === el.id || text.id === el.id ? 'brightness-150' : 'brightness-50'}`}
                />

                <Image
                  src={`/images/gameFiM/frame.png`}
                  alt=''
                  width={160}
                  height={160}
                  objectFit='cover'
                  className='absolute left-0 top-0 h-[80px] w-[86px] xl:left-[-18px] xl:top-[-14px] xl:h-[190px] xl:w-[196px]'
                />
                {idActive === el.id && (
                  <div className='game-fi-bg-blur absolute left-[-18px] top-[-17px] z-[-1]'></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
