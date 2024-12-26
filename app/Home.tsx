import bgHero2 from '@/public/images/home/bannerHeroSection2.png'
import video from '@/public/images/home/video.png'
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
    <section
      id='home'
      style={{
        backgroundImage: `url(${bgHero2.src}), url(${video.src})`
      }}
      className='section-home-banner relative flex items-end'
    >
      {/* Social Networks */}
      <div className='social absolute left-0 top-2/4 z-20 hidden h-max w-full translate-y-[-50%] duration-300 md:flex lg:w-max'>
        <MediaList orientation='vertital' page='home' className='w-max' />
      </div>

      {/* Main Content */}
      <div className='container-1420 relative'>
        <div className='list-apps absolute bottom-0 mb-[7%] flex w-full flex-wrap items-center justify-center gap-1 uppercase lg:gap-3'>
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
    </section>
  )
}
