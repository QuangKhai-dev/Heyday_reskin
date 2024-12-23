import './style.scss'
import { masticalStone } from './../../data'
import Image from 'next/image'
export default function MysticalStone() {
  return (
    <section id='mysticalStone'>
      <div className='container-1680'>
        <div className='title'>
          <h2>Mystical Stone</h2>
        </div>
        <div className='flex items-center'>
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
        <div className='relative h-[489px]'>
          <Image fill src='/2312/list-stone.png' alt='list-stone' />
        </div>
      </div>
    </section>
  )
}
