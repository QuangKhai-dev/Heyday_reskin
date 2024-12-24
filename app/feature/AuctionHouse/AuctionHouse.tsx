import './style.scss'
import { auctionHouse } from './../../data'
import Image from 'next/image'
export default function AuctionHouse() {
  return (
    <section id='auctionHouse'>
      <div className='container-1640'>
        <div className='title'>
          <h2>Auction House</h2>
        </div>
        <div className='flex items-center'>
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
        <div className='relative h-[530px]'>
          <Image
            fill
            src='/2312/background_auction_house.png'
            alt='auction house'
          />
        </div>
      </div>
    </section>
  )
}
