import AuctionHouse from './AuctionHouse'
import Banner from './Banner'
import Footer from './Footer'
import GameFiM from './GameFiM'
import GameXStudio from './GameXStudio'
import Gameplay from './Gameplay'
import Header from './Header'
import Home from './Home'
import MysticalStone from './MysticalStone'
import News_Updates from './News_Updates'
import { IconDefs } from './components/icons/Icons'
import './index.scss'

export default function Page() {
  return (
    <>
      <IconDefs />
      <Header />
      <div
        id='page'
        className='relative w-full flex-1 bg-cover bg-top bg-no-repeat'
      >
        {/* Banner */}
        <Banner />
        {/* <Home />
        <GameFiM />
        <div>
          <MysticalStone />
          <AuctionHouse />
        </div>
        <Gameplay />
        <News_Updates />
        */}
        <GameXStudio />
        <Footer />
      </div>
    </>
  )
}
