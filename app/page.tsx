import Banner from './Banner'
import Footer from './Footer'
import GameFiM from './feature/GameFi/GameFiM'
import GameXStudio from './GameXStudio'
import Gameplay from './feature/GamePlay/Gameplay'
import Header from './Header'
import Home from './Home'
import MysticalStone from './feature/MysticalStone/MysticalStone'
import News_Updates from './News_Updates'
import { IconDefs } from './components/icons/Icons'
import './index.scss'
import AuctionHouse from './feature/AuctionHouse/AuctionHouse'

export default function Page() {
  return (
    <>
      <IconDefs />
      {/* <Header /> */}
      <GameFiM />
      <MysticalStone />
      <AuctionHouse />
      <Gameplay />
      {/* <News_Updates /> */}

      {/* <div
        id='page'
        className='relative w-full flex-1 bg-cover bg-top bg-no-repeat'
      >
        <Banner />

        <Home />
        
        <div>
          <AuctionHouse />
        </div>
        <GameXStudio />
        <Footer />
      </div> */}
    </>
  )
}
