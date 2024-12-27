'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gamefiMe } from '../../data'
import gameFi1 from '@/app/components/icons/gameFi/gameFi1.png'
import './style.scss'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface StateType {
  id: number | string
  name: string
  desc: string
  img: StaticImageData
}

const initialState: StateType = {
  id: 1,
  name: 'lands',
  desc: 'Generate resources and allow for passive income from other players using the land.',
  img: gameFi1
}

export default function GameFiM() {
  const [text, setText] = useState(initialState)
  const [idActive, setIDActive] = useState(initialState.id)
  const [fade, setFade] = useState(false)

  const handleChangeText = (obj: StateType) => {
    setFade(true) // Bắt đầu fade-out
    setTimeout(() => {
      setText(obj) // Cập nhật nội dung mới
      setFade(false) // Bắt đầu fade-in
      setIDActive(obj.id)
    }, 400) // Thời gian fade-out
  }

  useEffect(() => {
    // Lấy element mới được active
    const activeElement = document.querySelector(`.gamefiMe-item-image.active`)
    if (activeElement) {
      const activeElementParent = activeElement.parentElement
      const swiperContainer = document.querySelector('.mySwiper')
      if (activeElementParent && swiperContainer) {
        const activeRect = activeElementParent.getBoundingClientRect()
        const swiperRect = swiperContainer.getBoundingClientRect()

        // Tính toán vị trí `left` tương đối với container
        const leftPosition = activeRect.left - swiperRect.left

        // Gắn vị trí cho highlight
        const highlight = document.getElementById('highlight-swiper')
        if (highlight) {
          highlight.style.left = `${leftPosition}px`
        }
      }
    }
  }, [idActive])

  const swiperRef = useRef<SwiperClass>()

  return (
    <section id='gameFiM' className='pt-11'>
      <div className='container-1640 relative z-10 pt-28'>
        <div className='relative' data-aos='fade-up'>
          <div className='group-content relative z-10 w-1/2'>
            <h2 className='lineskin'>gamefi mechanism</h2>
            <h3 className='titleFont mt-4 font-light text-white lg:mt-5'>
              {text.name}
            </h3>
            <p className='content mt-4 font-light text-white lg:mt-5'>
              {text.desc}
            </p>
          </div>
          <Image
            className={`gameFiBg absolute right-0 ${fade ? 'fade-out' : 'fade-in'}`}
            src={text.img.src}
            alt=''
            width={1280}
            height={797.56}
          />
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          onBeforeInit={swiper => {
            swiperRef.current = swiper
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          data-aos='fade-up'
          className='mySwiper'
          breakpoints={{
            768: {
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 24
            }
          }}
        >
          {/* Highlight Element */}
          <div
            id='highlight-swiper'
            className='bg-yellow-500 absolute h-[4px] transition-all duration-300 ease-in-out'
            style={{ left: 0 }}
          ></div>
          {gamefiMe.stories.map((el, id) => {
            return (
              <SwiperSlide
                className='gamefiMe-item cursor-pointer'
                key={id}
                onClick={() =>
                  handleChangeText({
                    id: el.id,
                    name: el.name,
                    desc: el.story,
                    img: el.img
                  })
                }
              >
                <div
                  className={`gamefiMe-item-image ${idActive === el.id || text.id === el.id ? 'active' : ''}`}
                >
                  <Image
                    src={`/images/gameFiM/${el.url}`}
                    alt=''
                    width={207}
                    height={207}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
