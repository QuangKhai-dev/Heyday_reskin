import { arrow_line, castle, dot, Highlight } from '@/public/images'
import Image from 'next/image'
import { auctionHouse } from './data'
export default function AuctionHouse() {
  return (
    <section id='mysticalStone' className='relative mb-[188px] scroll-mt-36'>
      <div className='container-1420 relative'>
        <div>
          <h2 className='titleFont'>auction house</h2>
          <Image
            src={arrow_line.src}
            alt=''
            width={220}
            height={4}
            className='mt-2'
          />
        </div>

        <div className='flex'>
          <p className='mt-5 line-clamp-4 w-[50%] font-extralight xl:pr-24 xl:text-xl'>
            {auctionHouse.phaseGraph}
          </p>

          <div className='hightlight relative xl:text-xl'>
            <Image
              src={Highlight.src}
              width={450}
              height={500}
              alt=''
              className='h-full w-[600px] object-contain'
            />
            <ul className='absolute left-[40px] top-[60px] font-extralight'>
              {auctionHouse.highlights.map((highlight, index) => {
                return (
                  <li key={index} className='mb-2 flex items-center gap-2'>
                    <Image src={dot.src} width={20} height={20} alt='' />
                    <p>{highlight}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className='container-1420 absolute left-20 top-52 z-[-1]'>
        <Image
          src={castle.src}
          alt='auction house'
          width={759}
          height={100}
          className='w-full'
        />
      </div>
    </section>
  )
}
