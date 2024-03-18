import HeroSection from '../../components/HeroSection/HeroSection'
import ScoreBoard from '../Scoreboard/ScoreBoard'

import './Home.css'

const Home = () => {

  return (
    <>
      <HeroSection />
      <h2>SCOREBOARD</h2>
      <ScoreBoard/>
      <h2>STANDINGS</h2>
      {/* <StandingsTable /> */}
      <h2>Ranking</h2>
      {/* <RankingTable /> */}
    </>
  )
}

export default Home