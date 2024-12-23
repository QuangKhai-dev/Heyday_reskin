'use client'
import { gameplayList } from '@/app/data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { GameplayBox } from '../frames'
import dotActiveCarousel from '@/public/images/dot_active_carousel.png'
import dotUnactive from '@/public/images/dot_carousel.png'
import 'swiper/css'

const ReactSwiperCustomGamePLay = () => {
  return (
    <Swiper
      className='swiperGamePlay'
      slidesPerView={1.1}
      spaceBetween={20}
      // centeredSlides={true}
      pagination={{
        clickable: true,
        renderBullet: function (_index, className) {
          return `<span class="dot-carousel-gamefim ${className}">
        <img class="dot-unActive" src=${dotUnactive.src} />
        <img class="dot-active" src=${dotActiveCarousel.src} />
        </span>`
        }
      }}
      modules={[Pagination]}
    >
      <SwiperSlide key={1}>
        <div className='space-y-5'>
          {gameplayList.slice(0, 4).map((gameplay, index) => {
            return (
              <GameplayBox
                key={index}
                width={43.75}
                title={gameplay.title}
                subtitle={gameplay.subtitle}
              />
            )
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide key={2}>
        <div className='space-y-5'>
          {gameplayList.slice(4, 8).map((gameplay, index) => {
            return (
              <GameplayBox
                key={index}
                width={43.75}
                title={gameplay.title}
                subtitle={gameplay.subtitle}
              />
            )
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide key={3}>
        <div className='space-y-5'>
          {gameplayList.slice(8, 12).map((gameplay, index) => {
            return (
              <GameplayBox
                key={index}
                width={43.75}
                title={gameplay.title}
                subtitle={gameplay.subtitle}
              />
            )
          })}
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default ReactSwiperCustomGamePLay
