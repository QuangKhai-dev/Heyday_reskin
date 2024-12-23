import React from 'react'
import bg from '@/public/2312/bg-banner.png'

const Banner = () => {
  return (
    <section className='section-banner'>
      <div
        className='container-1920'
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
    </section>
  )
}

export default Banner
