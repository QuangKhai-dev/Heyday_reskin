'use client'
import ReactSwiperNewUpdates from '@/app/components/carousel/ReactSwiperNewUpdates'
import { IMG } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { contents } from './../../news-update/[newsId]/contentsData'
import './style.scss'
export default function NewsUpdate() {
  return (
    <section id='community' className='scroll-mt-36 py-[180px]'>
      <div className='container-1640 z-10' id='communityTitle'>
        <div className='min-h-[520px]'>
          <h2 className='titleFont mb-6'>news & updates</h2>

          <div className='left-item content_newupdate relative flex'>
            {/* LEFT ITEM */}
            <div className='relative z-10 grid grid-cols-5'>
              <div className='col-span-3 lg:w-auto'>
                <Link href={`news-update/${contents[0].id}`}>
                  <h3 className='text titleFont mb-3'>{contents[0].title}</h3>
                </Link>
                <p className='line-clamp-3 pr-12 opacity-65'>
                  {contents[0].subtitle}
                </p>
              </div>
              <div className='flex w-[70%] justify-between'></div>
            </div>
            <Image
              className='absolute right-0 top-1/2 -translate-y-1/2'
              src={IMG.src}
              alt=''
              width={955}
              height={510}
            />
          </div>
        </div>

        {/* Slider */}
        <ReactSwiperNewUpdates />
      </div>
    </section>
  )
}
