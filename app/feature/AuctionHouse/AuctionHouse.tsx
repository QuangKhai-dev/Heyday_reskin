import './style.scss'
import { auctionHouse } from './../../data'
import Image from 'next/image'
export default function AuctionHouse() {
  return (
    <section id='auctionHouse' className='pt-40'>
      <div className='container-1640'>
        <div className='title'>
          <h2 className='lineskin'>Auction House</h2>
        </div>
        <div className='content flex items-center'>
          <p>{auctionHouse.phaseGraph}</p>
          <div className='highlight-wrapper relative p-5'>
            <Image
              src='/2312/highlight_wrapper.png'
              alt='highlight-wrapper'
              fill
            />
            <ul className='space-y-5'>
              {auctionHouse.highlights.map((item, index) => {
                return (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='image-main'>
        <Image
          src='/2312/auction-house.png'
          alt='auction-house'
          width={1794}
          height={623}
        />
      </div>
    </section>
  )
}
