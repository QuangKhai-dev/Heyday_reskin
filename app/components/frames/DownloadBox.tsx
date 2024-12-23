import { Frames } from '@/app/dataType'
import React from 'react'
import { AndroidIcon, IOSIcon, MACIcon, PCIcon } from '../icons'

const operatingSystemIcons = [
  {
    name: 'android',
    componentIcon: <AndroidIcon key='android' />
  },
  {
    name: 'ios',
    componentIcon: <IOSIcon key='ios' />
  },
  {
    name: 'mac',
    componentIcon: <MACIcon key='mac' />
  },
  {
    name: 'pc',
    componentIcon: <PCIcon key='pc' />
  }
]

export default function DownloadBox({ width, height, title }: Frames) {
  return (
    <div
      className='relative overflow-hidden'
      style={{
        width: width,
        height: height
      }}
    >
      <div className='absolute left-[50%] top-[50%] h-[73%] w-[98%] -translate-x-[50%] -translate-y-[50%] bg-black bg-opacity-35'></div>
      <div
        className='absolute z-10 flex h-full w-full flex-col justify-center bg-no-repeat pl-14'
        style={{
          backgroundImage: 'url(./frames/downloadNow_box.png)',
          backgroundSize: '100% 100%'
        }}
      >
        <div>
          <h2 className='titleFont text-3xl md:text-4xl ld:text-5xl'>{title}</h2>
          <div className='my-6 h-[1px] w-[31.25vw] bg-fadeToYellow270deg'></div>
          <div className='mt-2.5 grid grid-cols-2 w-1/2 lg:flex uppercase'>
            {operatingSystemIcons.map((icon, index) => {
              return (
                <div key={index} className='flex items-center gap-3 px-2.5'>
                  <i className='py-2.5 text-lg'> {icon.componentIcon} </i>
                  <span className='cursor-pointer font-inter text-xs font-normal tracking-widest text-beige-50 shadow-custom-black hover:text-white'>
                    {icon.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
