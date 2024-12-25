import cn from '@/app/utils/cn'
import Icons from '../icons/Icons'
import Image from 'next/image'
import Link from 'next/link'

interface NewUpdates {
  id_story?: number | string
  title: string
  date: string
  subtitle?: string
  Img: () => JSX.Element
}

export default function NewUpdatesBox({
  date,
  title,
  subtitle,
  Img,
  id_story
}: NewUpdates) {
  return (
    <Link
      href={`news-update/${id_story}`}
      className='game-fi-box group relative block cursor-pointer overflow-hidden bg-black bg-opacity-35 backdrop-blur-sm'
    >
      <div className='game-fi-box-wrapper'>
        <Image
          className='topLeft-icon absolute'
          width={48}
          height={48}
          alt=''
          src='/2312/topLeft-update.png'
        />
        <Image
          className='topRight-icon absolute'
          width={48}
          height={48}
          alt=''
          src='/2312/topRight-update.png'
        />
        <Image
          className='bottomLeft-icon absolute'
          width={48}
          height={48}
          alt=''
          src='/2312/bottomLeft-update.png'
        />
        <Image
          className='bottomRight-icon absolute'
          width={48}
          height={48}
          alt=''
          src='/2312/bottomRight-update.png'
        />
        {/* Content on Frame */}
        <div className='game-fi-content group relative flex h-full bg-cover bg-no-repeat'>
          <div className='z-10 ml-5 flex w-[60%] flex-col gap-3 pt-4 sm:ml-10'>
            <h6 className='font-beaufortLoL text-[#D0B285]'>{date}</h6>

            <h4 className={cn('line-clamp-2 uppercase group-hover:text-white')}>
              {title}
            </h4>

            <div className='content opacity-65'>
              <p className='line-clamp-2 duration-300 group-hover:text-[#fff]'>
                {subtitle}
              </p>
            </div>
          </div>

          <div className='absolute z-[-2] w-[40%]'>
            <div className='view-bg absolute left-[12rem] h-full w-[300px] translate-x-24 bg-cover bg-no-repeat duration-[1500ms] md:translate-x-20'>
              <Img />
            </div>
          </div>
        </div>
        <div className='animation-readmore mt-5 flex items-center'>
          <Icons.svgReadMore />
          <span>Read more</span>
        </div>
      </div>
    </Link>
  )
}
