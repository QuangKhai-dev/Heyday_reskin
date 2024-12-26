import React from 'react'
import DownloadBox from './components/frames/DownloadBox'

export default function Download() {
  return (
    <div className='flexCenter h-[38.75rem] w-full px-10'>
      <DownloadBox
        width={1420}
        height={506}
        title='download now'
        image='./images/download_bg.png'
      />
    </div>
  )
}
