import GameFiM from './feature/GameFi/GameFiM'
import GameXStudio from './GameXStudio'
import Gameplay from './feature/GamePlay/Gameplay'
import MysticalStone from './feature/MysticalStone/MysticalStone'
import { IconDefs } from './components/icons/Icons'
import './index.scss'
import AuctionHouse from './feature/AuctionHouse/AuctionHouse'
import Banner from './Banner'
import Header from './feature/Header/Header'
import Footer from './feature/Footer/Footer'
import NewsUpdate from './feature/NewsUpdate/NewsUpdate'

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
      <NewsUpdate />
      <GameXStudio />
      <Footer />
    </>
  )
}
