'use client'
import ReactSwiperNewUpdates from '@/app/components/carousel/ReactSwiperNewUpdates'
import Icons from '@/app/components/icons/Icons'
import { arrow_line, IMG } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { contents } from './news-update/[newsId]/contentsData'
export default function News_Updates() {
  return (
    <section id='community' className='scroll-mt-36 py-[180px]'>
      <div className='container-1680 z-10' id='communityTitle'>
        <div className='h-[520px]'>
          <h2 className='titleFont mb-6'>news & updates</h2>
          <Image
            src={arrow_line.src}
            alt=''
            width={220}
            height={4}
            className='mt-2'
          />

          <div className='left-item content_newupdate relative flex'>
            {/* LEFT ITEM */}
            <div className='w-[55%]'>
              <div className='pt-14 lg:w-auto'>
                <Link href={`news-update/${contents[0].id}`}>
                  <h3 className='text titleFont mb-3'>{contents[0].title}</h3>
                </Link>
                <p className='opacity-65'>{contents[0].subtitle}</p>
              </div>

              <div className='flex w-[70%] justify-between'>
                <h6 className='mb-3 mt-6 text-[12px] tracking-widest text-beige-50'>
                  {contents[0].date}
                </h6>

                <div className='new-update-box w-32 cursor-pointer'>
                  <div className='animation-readmore mt-5'>
                    <Icons.svgReadMore />
                    <span className='text-title-newUpdates font-bold'>
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT ITEM */}
            <div className='absolute right-0 z-[-1]'>
              <Image
                src={IMG.src}
                alt=''
                width={800}
                height={400}
                className='h-[450px] w-[800px]'
              />
            </div>
          </div>
        </div>

        {/* Slider */}
        <ReactSwiperNewUpdates />
      </div>
    </section>
  )
}
