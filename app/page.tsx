import GameFiM from './feature/GameFi/GameFiM'
import Gameplay from './feature/GamePlay/Gameplay'
import MysticalStone from './feature/MysticalStone/MysticalStone'
import { IconDefs } from './components/icons/Icons'
import './index.scss'
import AuctionHouse from './feature/AuctionHouse/AuctionHouse'
import Banner from './Banner'
import Header from './feature/Header/Header'
import Footer from './feature/Footer/Footer'
import NewsUpdate from './feature/NewsUpdate/NewsUpdate'
import GameXStudio from './feature/GameStudio/GameXStudio'

export default function Page() {
  return (
    <>
      <IconDefs />
      {/* <Header />
      <Banner />
      
      <GameFiM />
      <MysticalStone />
      <AuctionHouse />
      
      <NewsUpdate />
 */}
      <Gameplay />
      <GameXStudio />
      <Footer />
    </>
  )
}
