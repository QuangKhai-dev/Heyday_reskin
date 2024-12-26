import React from 'react'

import cn from '@/app/utils/cn'
import { SVG } from '@/app/dataType'
import { socialLinks } from '@/app/data'
import Link from 'next/link'
import Icons from '../icons/Icons'

const mediaIcons = [
  {
    svg: <Icons.spaceXIcon className='h-20 w-20' />,
    link: socialLinks.twitter
  },
  {
    svg: <Icons.telegramIcon className='h-20 w-20' />,
    link: socialLinks.telegram
  },
  {
    svg: <Icons.discordIcon className='h-20 w-20' />,
    link: socialLinks.discord
  },
  {
    svg: <Icons.facebookIcon className='h-20 w-20' />,
    link: socialLinks.facebook
  }
]

interface Props extends SVG {
  orientation: string
  className?: string
}

export default function MediaList({ orientation }: Props) {
  return (
    <section
      className={cn(`mediaList flex gap-4`, {
        'flex-row': orientation == 'horizonal',
        'flex-col items-center': orientation == 'vertital'
      })}
    >
      {mediaIcons.map((icon, index) => {
        return (
          <Link key={index} href={icon.link}>
            {icon.svg}
          </Link>
        )
      })}
    </section>
  )
}
