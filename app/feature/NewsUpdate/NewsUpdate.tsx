'use client'
import ReactSwiperNewUpdates from '@/app/components/carousel/ReactSwiperNewUpdates'
import IMG from '@/public/2312/news-updated.png'
import Image from 'next/image'
import Link from 'next/link'
import { contents } from './../../news-update/[newsId]/contentsData'
import './style.scss'
import Icons from '@/app/components/icons/Icons'
export default function NewsUpdate() {
  return (
    <section id='community' className='pb-16 pt-40'>
      <div className='container-1640 z-10'>
        {/* Main News */}
        <h2 className='lineskin title-mobile'>news & updates</h2>
        <div className='main-news mb-12'>
          <div className='leftSide'>
            <h2 className='lineskin'>news & updates</h2>
            <div className='main-news-item'>
              <Link href={`news-update/${contents[0].id}`}>
                <h3 className='text titleFont mb-3'>{contents[0].title}</h3>
              </Link>
              <p className='main-news-item-content line-clamp-3 opacity-65'>
                {contents[0].subtitle}
              </p>
              <div className='main-news-item-footer mt-2 flex justify-between'>
                <p className='date'>{contents[0].date}</p>
                <Link
                  className='animation-readmore-title flex items-center'
                  href={`news-update/${contents[0].id}`}
                >
                  <div className='animation'>
                    <Icons.svgReadMore />
                    <span>Read more</span>
                  </div>
                  <div className='invisible flex items-center opacity-0'>
                    <Icons.svgReadMore />
                    <span>Read more</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className='rightSide'>
            <Image src={IMG.src} alt='' width={954.05} height={508} />
          </div>
        </div>
        {/* Slider */}
        <ReactSwiperNewUpdates />
      </div>
    </section>
  )
}
