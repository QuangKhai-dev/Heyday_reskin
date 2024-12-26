import { socialLinks } from '@/app/data'
import { Frames } from '@/app/dataType'
import { button_box } from '@/public/frames'
import Link from 'next/link'

const SmallContainer = ({ title }: Frames) => {
  return (
    <Link
      className='smallContainer cursor-pointer bg-no-repeat'
      style={{
        backgroundImage: `url(${button_box.src})`,
        backgroundSize: '100% 100%'
      }}
      href={socialLinks.document}
    >
      {title}
    </Link>
  )
}

export default SmallContainer
