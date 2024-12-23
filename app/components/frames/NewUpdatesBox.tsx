import { Frame } from '@/app/components/icons/new-up/frame'
import cn from '@/app/utils/cn'
import Icons from '../icons/Icons'

interface NewUpdates {
  id_story?: number | string
  title: string
  date: string
  subtitle?: string
  Img: () => JSX.Element
  width: number
}

export default function NewUpdatesBox({
  date,
  title,
  subtitle,
  Img
}: NewUpdates) {
  return (
    <div className='game-fi-box group relative h-[300px] w-[530px] cursor-pointer overflow-hidden bg-black bg-opacity-35 backdrop-blur-sm'>
      {/* Frame wrapper */}
      <div className='absolute z-[-1] h-full w-full'>
        <Frame />
      </div>

      {/* Content on Frame */}
      <div className='group relative flex h-full bg-cover bg-no-repeat'>
        <div className='z-10 ml-10 flex w-[60%] flex-col gap-3 pt-10'>
          <h6 className='font-beaufortLoL text-[14px] text-[#D0B285]'>
            {date}
          </h6>

          <h3
            className={cn(
              'font-beaufortLoL text-[14px] uppercase text-[#DFAD69] group-hover:text-white'
            )}
          >
            {title}
          </h3>

          <div className='content max-w-[350px] font-gothic leading-[1.375rem] opacity-65'>
            <p className='line-clamp-3 text-[12px] duration-300 group-hover:text-[16px] group-hover:text-[#fff]'>
              {subtitle}
            </p>
            <div className='animation-readmore mt-5'>
              <Icons.svgReadMore />
              <span>Read more</span>
            </div>
          </div>
        </div>

        <div className='absolute z-[-2] w-[40%]'>
          <div className='view-bg absolute left-[12rem] h-full w-[300px] translate-x-24 bg-cover bg-no-repeat duration-[1500ms] group-hover:translate-x-[25%] md:translate-x-20 md:group-hover:translate-x-3'>
            <Img />
          </div>
        </div>
      </div>
    </div>
  )
}
