import './style.scss'
import { masticalStone } from './../../data'
import Image from 'next/image'
export default function MysticalStone() {
  return (
    <section id='mysticalStone' className='pt-40'>
      <div className='container-1640'>
        <div className='title'>
          <h2 className='lineskin'>Mystical Stone</h2>
        </div>
        <div className='content relative z-10 flex items-center'>
          <p>{masticalStone.phaseGraph}</p>
          <div className='highlight-wrapper relative p-5'>
            <Image
              src='/2312/highlight_wrapper.png'
              alt='highlight-wrapper'
              fill
            />
            <ul className='space-y-5'>
              {masticalStone.highlights.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='relative'>
          <Image
            width={1920}
            height={500}
            src='/2312/list-stone.png'
            className='object-contain'
            alt='list-stone'
          />
        </div>
      </div>
    </section>
  )
}
