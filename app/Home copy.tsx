import { textShadow } from '@/public/images'
import bgHero1 from '@/public/images/home/bannerHeroSection1.png'
import video from '@/public/images/home/video.png'
import Image from 'next/image'
import Link from 'next/link'
import {
  AndroidIcon,
  BoardGameIcon,
  IOSIcon,
  MACIcon,
  PCIcon
} from './components/icons'
import MediaList from './components/structures/MediaList'

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
  },
  {
    name: 'board game',
    componentIcon: <BoardGameIcon key='boardgame' />
  }
]

export default function Home() {
  return (
    <div
      id='home'
      style={{
        backgroundImage: `url(${bgHero1.src})`
      }}
      className='section-home-banner relative flex items-end pb-52'
    >
      {/* Social Networks */}
      <div className='social absolute left-0 top-2/4 z-20 hidden h-max w-full translate-y-[-50%] md:flex lg:w-max'>
        <MediaList orientation='vertital' page='home' className='w-[200px]' />
      </div>
      {/* Main Content */}
      <div className='container-1420 h-full' data-aos='fade-up'>
        <section className='relative z-10 flex h-full flex-1 flex-col items-center justify-end'>
          <div className='relative flex flex-col items-center justify-end'>
            <Image
              src={textShadow}
              alt='rise & conquer'
              width={653}
              height={100}
              className='text-shadow'
            />
            <h1 className='titleFont mb-14'>rise & conquer</h1>
            <div className='mb-12 hidden sm:block'>
              {/* <SmallContainer title='white papper' /> */}
              <p>hello</p>
            </div>
            <h6 className='text-xl font-normal uppercase text-beige-50'>
              soon available on
            </h6>

            <div className='list-apps mt-2.5 flex w-full flex-wrap items-center justify-center gap-1 uppercase lg:gap-3'>
              {operatingSystemIcons.map((icon, index) => {
                return (
                  <Link
                    href={''}
                    key={index}
                    className={`flex basis-1/4 items-center justify-center gap-1 px-2.5 md:basis-1 lg:gap-3`}
                  >
                    <span className='py-2.5'> {icon.componentIcon} </span>
                    <span className='font-inter text-xs font-normal tracking-widest text-beige-50'>
                      {icon.name}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )

  return (
    <div
      id='home'
      style={{
        backgroundImage: `url(${bgHero1.src}), url(${video.src})`
      }}
      className='section-home-banner relative flex items-end'
    >
      {/* Social Networks */}
      <div className='social absolute left-0 top-2/4 z-20 hidden h-max w-full translate-y-[-50%] duration-300 md:flex lg:w-max'>
        <MediaList orientation='vertital' page='home' className='w-[200px]' />
      </div>

      {/* Main Content */}
      <div className='container-1420 relative h-[10%]'>
        <div className='list-apps absolute bottom-0 mb-[12%] flex w-full flex-wrap items-center justify-center gap-1 uppercase lg:gap-3'>
          {operatingSystemIcons.map((icon, index) => {
            return (
              <Link
                href={''}
                key={index}
                className='flex basis-1/4 items-center justify-center gap-1 px-2 md:basis-1 lg:gap-3'
              >
                <div className='relative'>
                  <div className='bg-blur'></div>

                  <span className='absolute left-1 top-[-10px] py-2.5 duration-300'>
                    {icon.componentIcon}
                  </span>
                </div>

                <span className='font-inter text-xs font-normal tracking-widest text-[#2a1b04] duration-300'>
                  {icon.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
