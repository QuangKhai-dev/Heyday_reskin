import React from 'react'
import { article_5 } from './data'
import { Diamond } from '../icons/basicShapes'
import cn from '@/app/utils/cn'

export default function Article_5() {
  return (
    <div className='text-2xl font-gothic text-white'>
      {article_5.map((item, index) => {
        return (
          <div key={index} className='font-normal mb-11 leading-[2.5rem]'>
            <h3 className='bg-goldenAmber90deg text-transparent bg-clip-text font-beaufortLoL text-[2.5rem] leading-[3.125rem] mb-10 uppercase'>
              {item.title}
            </h3>
            <p
              className='leading-[2.5rem]'
              dangerouslySetInnerHTML={{ __html: item.subtitle }}>

            </p>
            <ul>
              {item.paragraphs?.map((paragraph, index) => {
                return (
                  <div key={index} className='mt-10'>

                    {paragraph.childTitle && <li className={cn('list-none', {
                      'list-decimal ml-5': item.title === 'The Difference Between Free-to-Play and NFT Players'
                    })}
                      dangerouslySetInnerHTML={{ __html: paragraph.childTitle }}></li>}

                    {
                      Array.isArray(paragraph.childSub) ?
                        paragraph.childSub.map((item, index) => {
                          return (
                            <div key={index} className='flex gap-3 mt-6 ml-5'>
                              <i className='flex-shrink-0 mt-2.5'><Diamond color='#FFFFFF' /></i>
                              <ul>
                                <li
                                  className='leading-[2.5rem]'
                                  dangerouslySetInnerHTML={{ __html: item }}
                                >
                                </li>
                              </ul>
                            </div>

                          )
                        })
                        : <p className='leading-[2.5rem] mt-6'
                          dangerouslySetInnerHTML={{ __html: paragraph.childSub }}>
                        </p>
                    }
                  </div>

                )
              })}
            </ul>
          </div>
        )
      })}
      <p className='leading-[2.5rem]'>
        {`The Heyday experience is designed with player convenience and seamless interaction in mind,
        particularly when it comes to blockchain-related processes. All blockchain interactions, such as trading, battles, and earning GEMs, are handled outside of the game, ensuring smooth gameplay and reducing gas fees for users. The game's infrastructure is optimized to minimize the use of blockchain where possible, allowing players to focus on their in-game activities without needing to worry about additional fees or complex blockchain management. As long as players own NFTs, they can fully participate in the game without incurring extra gas costs—even when collaborating with other players. All major game mechanics, including tournaments and upgrades, are processed off-chain, while NFT mechanics are streamlined for ease of use.`}
      </p>
    </div>
  )
}
