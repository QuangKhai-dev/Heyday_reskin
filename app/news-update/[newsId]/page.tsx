import Header from '@/app/Header'
import { texture } from '@/public/images/newsUpdate'
import GameXStudio from '@/app/GameXStudio'
import Footer from '@/app/Footer'
import { contents } from './contentsData'
import { MotifContainer } from '@/app/components/frames'
import { MediaList, Memarcation } from '@/app/components/structures'
import {
  Article_1,
  Article_2,
  Article_3,
  Article_4,
  Article_5
} from '@/app/components/newsContents'
import ButtonDetailPage from '@/app/components/frames/ButtonDetailPage'
import { IconDefs } from '@/app/components/icons/Icons'

export default async function NewsPage({
  params
}: {
  params: Promise<{ newsId: string }>
}) {
  const id = (await params).newsId
  const newsContents = contents.find(item => item.id.toString() === id)

  return (
    <>
      <IconDefs />
      <div id='news-update-page'>
        <Header />
        <div
          className='banner-news-update relative flex h-[57.188vw] items-center bg-full'
          style={{
            backgroundImage: `url(../images/newsUpdate/${newsContents?.url})`
          }}
        >
          <div className='social absolute flex h-full w-full items-center px-[6.25vw]'>
            <MediaList orientation='vertital' page='home' />
          </div>
          {/* <div className='absolute bottom-0 h-[100px] w-full bg-black bg-opacity-55 2xl:text-clip'></div> */}
        </div>

        <div
          className='news-update-page-content bg-full px-3 pt-[6.875rem] md:px-20 lg:px-28 xl:px-[9.75rem]'
          style={{
            backgroundImage: `url(${texture.src})`
          }}
        >
          <div className='header-title'>
            <div className='flex justify-between'>
              <div className='w-full md:mr-0 md:mr-5 md:w-[45.1vw]'>
                <span className='font-gothic text-2xl capitalize tracking-widest text-beige-50'>
                  {newsContents?.date}
                </span>
                <h3 className='bg-yellowToOrange bg-clip-text text-[clamp(0.75rem,0.2646rem+2.0712vw,2.75rem)] uppercase text-transparent'>
                  {newsContents?.title}
                </h3>
                {/* <NewsLine /> */}
              </div>
              <ButtonDetailPage
                buttonClassname='button-custom flex-shrink-0'
                width={327}
                height={164}
                title='share'
                newsId={id}
              />
              {/* <MotifContainer
              buttonClassname='w-[327px] h-[104px] button-custom'
              title='share'
              newsId={id}
            /> */}
            </div>

            <div className='mt-10 text-center font-gothic text-2xl text-white md:mt-[6.25rem]'>
              {newsContents?.subtitle}
            </div>
          </div>

          <div className='body mt-12'>
            <div className='content'>
              {id === '1' && <Article_1 />}
              {id === '2' && <Article_2 />}
              {id === '3' && <Article_3 />}
              {id === '4' && <Article_4 />}
              {id === '5' && <Article_5 />}
            </div>
          </div>

          <div className='footer-news mx-10 mt-[4.125rem] flex flex-col items-center'>
            <MotifContainer
              buttonClassname='w-[400px] md:w-[500px] h-[104px]'
              title='back to news list'
              newsId={id}
            />

            <div className='mt-[6.25rem] w-full'>
              <Memarcation />
            </div>
            <GameXStudio />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
