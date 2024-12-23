import { Tone } from '@/app/components/icons/gamePlay/tone'
import { arrow_line, dot } from '@/public/images'
import Image from 'next/image'
import { masticalStone } from './data'
import { Highlight } from '@/app/components/icons/Highlight'
export default function MysticalStone() {
  return (
    <section id='mysticalStone' className='py-188 scroll-mt-36'>
      <div className='container-1420 relative'>
        <div>
          <h2 className='titleFont'>mystical stone</h2>
          <Image
            src={arrow_line.src}
            alt=''
            width={220}
            height={4}
            className='mt-2'
          />
        </div>

        <div className='flex flex-col xl:flex-row'>
          <p className='mt-5 w-[50%] font-extralight xl:pr-24 xl:text-xl'>
            {masticalStone.phaseGraph}
          </p>

          <div className='hightlight relative xl:text-xl'>
            <div className='mt-[-30px]'>
              <Highlight />
            </div>

            <ul className='absolute left-[40px] top-[45px] font-extralight'>
              {masticalStone.highlights.map((highlight, index) => {
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

      <Tone className='mx-auto mt-[-120px] w-[100%]' />
    </section>
  )
}
