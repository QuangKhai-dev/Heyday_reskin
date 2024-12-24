import Footer from './Footer'
import GameFiM from './feature/GameFi/GameFiM'
import GameXStudio from './GameXStudio'
import Gameplay from './feature/GamePlay/Gameplay'
import MysticalStone from './feature/MysticalStone/MysticalStone'
import { IconDefs } from './components/icons/Icons'
import './index.scss'
import AuctionHouse from './feature/AuctionHouse/AuctionHouse'
import Banner from './Banner'
import Header from './Header'

export default function Page() {
  return (
    <>
      <Header />

      <Banner />
      <IconDefs />
      <GameFiM />
      <MysticalStone />
      <AuctionHouse />
      <Gameplay />
      {/* <News_Updates /> */}

      {/* <div
        id='page'
        className='relative w-full flex-1 bg-cover bg-top bg-no-repeat'
      >
      

        <Home />
        
        <div>
          <AuctionHouse />
        </div>
        <Gameplay />
        <News_Updates />
        */}
      <GameXStudio />
      <Footer />
    </>
  )
}
