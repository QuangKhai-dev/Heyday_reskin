'use client'
import { useRef } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import { gamefiMe } from '@/app/data'
import arrowNext from '@/public/images/arrow_next.png'
import dotActiveCarousel from '@/public/images/dot_active_carousel.png'
import dotUnactive from '@/public/images/dot_carousel.png'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { GameFiBox } from '../frames'

const ReactSwiperCustom = () => {
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
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
        className='mySwiper'
        // responsive slide
        breakpoints={{
          768: {
            slidesPerView: 1.2,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 2.4,
            spaceBetween: 40
          }
        }}
      >
        {gamefiMe.stories.map((story, index) => {
          return (
            <SwiperSlide className='box-game-fim' key={index}>
              <GameFiBox
                key={index}
                id_story={story.id}
                width={570}
                title={story.name}
                subtitle={story.story}
                image={story.url}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* button click slide */}
      <div className='arrows-swiper relative -bottom-10 mt-2 space-x-5 text-right'>
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

export default ReactSwiperCustom