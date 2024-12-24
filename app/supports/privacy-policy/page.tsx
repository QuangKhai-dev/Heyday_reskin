import React from 'react'
import { privacyP } from '@/public/images/supports'
import Header from '@/app/feature/Header/Header'
import { privacyPData } from '../data_sp'
import cn from '@/app/utils/cn'
import { NewsLine } from '@/app/components/structures'
import NewsLineReponsive from '@/app/components/structures/NewsLineReponsive'
import Footer from '@/app/Footer'
import { IconDefs } from '@/app/components/icons/Icons'

export default function PrivacyPolicyPage() {
  return (
    <>
      <IconDefs />
      <div id='privacy-conditions-page'>
        <Header />
        <div className=''>
          <div
            className='banner-privacy-conditions h-screen w-full'
            style={{
              backgroundImage: `url(${privacyP.src})`,
              backgroundSize: '100% 100%'
            }}
          ></div>
          <div className='container-1620'>
            <div className='pb-10'>
              <div className='title-privacy-policy'>
                <span className='sub-title font-gothic text-2xl capitalize leading-8 tracking-widest text-beige-50'>
                  October 1, 2024
                </span>
                <h3 className='mb-2 bg-yellowToOrange bg-clip-text font-beaufortLoL text-[clamp(0.75rem,0.2646rem+2.0712vw,2.75rem)] uppercase text-transparent'>
                  Privacy Policy
                </h3>
                <div>
                  <NewsLine className='line-desktop' />
                  <NewsLineReponsive className='line-mobile' />
                </div>
              </div>
              <div>
                {privacyPData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='privacy-data-content font-gothic text-white'
                    >
                      <h4 className='text-[2.5rem] capitalize'>{item.title}</h4>
                      <ul className='mt-5'>
                        {item.content.map((paragraph, index) => {
                          return (
                            <li
                              key={index}
                              className={cn('ml-8 mt-0 text-2xl', {
                                'list-privacy-content-item ml-0 mt-5 list-item list-none':
                                  item.title.toLowerCase().toString() !==
                                  'title 2'
                              })}
                            >
                              {paragraph}{' '}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
