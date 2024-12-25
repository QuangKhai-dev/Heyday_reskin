'use client'
import { useRef } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import NewUpdatesBox from '@/app/components/frames/NewUpdatesBox'
import { newUpdate } from '@/app/data'
import arrowNext from '@/public/2312/arrowNextUpdate.png'
import dotActiveCarousel from '@/public/images/dot_active_carousel.png'
import dotUnactive from '@/public/images/dot_carousel.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const ReactSwiperNewUpdates = () => {
  const swiperRef = useRef<SwiperClass>()

  return (
    <>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={8}
        onBeforeInit={swiper => {
          swiperRef.current = swiper
        }}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false
        // }}
        pagination={{
          clickable: true,
          // custom pagination
          renderBullet: function (index, className) {
            return `<span class="dot-carousel-gamefim ${className}">
          <img class="dot-unActive" src=${dotUnactive.src} />
          <img class="dot-active" src=${dotActiveCarousel.src} />
          </span>`
          }
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className='swiper-update'
        // responsive slide
        breakpoints={{
          768: {
            slidesPerView: 1.5,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 40
          },
          1280: {
            slidesPerView: 2.2,
            spaceBetween: 40
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        {newUpdate.map((data, index) => {
          return (
            <SwiperSlide className='box-game-fim' key={index}>
              <NewUpdatesBox
                date={data.date}
                key={index}
                id_story={data.id}
                title={data.title}
                subtitle={data.subtitle}
                Img={data.url}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* button click slide */}
      <div
        className='arrows-swiper relative -bottom-10 mt-2 space-x-5 text-right'
        style={{
          marginTop: '-7%',
          zIndex: 5
        }}
      >
        <button
          onClick={() => {
            swiperRef.current?.slidePrev()
          }}
          className='cursor-pointer'
        >
          <img className='dot-unActive rotate-180' src={arrowNext.src} />
        </button>
        <button
          onClick={() => {
            swiperRef.current?.slideNext()
          }}
          className='cursor-pointer'
        >
          <img className='dot-unActive' src={arrowNext.src} />
        </button>
      </div>
    </>
  )
}

export default ReactSwiperNewUpdates
