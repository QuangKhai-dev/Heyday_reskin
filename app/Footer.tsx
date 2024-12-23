'use client'
import { MediaList } from '@/app/components/structures'
import { Bg_footer, dot, line, logo } from '@/public/images'
import Image from 'next/image'
import Link from 'next/link'
import { footer_nav } from './data'

export default function Footer() {
  return (
    <footer className='w-full scroll-mt-36 pb-24' id='footer'>
      <div className='relative w-full'>
        <Image
          src={line.src}
          alt=''
          width={1420}
          height={5}
          className='m-auto mb-6 text-center'
        />

        <div className='absolute left-8 top-[-224px] z-[-1]'>
          <Image
            src={Bg_footer.src}
            alt=''
            width={1440}
            height={400}
            className=''
          />
        </div>
      </div>

      <div className='container-1420'>
        <div className='footer-content flex justify-between'>
          {/* {/ ICON + MEDIA LIST /} */}
          <div className='footer-title'>
            <Link href='/'>
              <Image src={logo} alt='logo' className='w-[12.5rem]' />
            </Link>
            <MediaList orientation='horizonal' page='footer' />
          </div>

          {/*ITEM LIST */}
          <div className='footer-text flex flex-1 justify-evenly'>
            {footer_nav.map((content, index) => {
              return (
                <div key={index} className='footer-text-item text-nowrap'>
                  <h6 className='bg-whiteToPeach98deg bg-clip-text font-beaufortLoL text-xl uppercase leading-5 text-transparent'>
                    {content.name}
                  </h6>
                  <ul className='mt-5'>
                    {content.list.map((item, index) => {
                      return (
                        <li key={index} className='flex items-center gap-2.5'>
                          <Image src={dot.src} width={20} height={20} alt='' />
                          <span className='cursor-pointer text-[10px] capitalize leading-loose text-beige-50 md:text-sm xl:text-xl'>
                            {item.path !== '' ? (
                              <Link href={`${item.path}`}>{item.name}</Link>
                            ) : (
                              item.name
                            )}
                          </span>
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
    </footer>
  )
}
