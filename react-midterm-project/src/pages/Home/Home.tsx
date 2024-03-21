import HeroSection from '../../components/HeroSection/HeroSection'
import { Button, Container } from 'react-bootstrap';

import './Home.css';
import ScoreboardSection from '../../components/ScoreboardSection/ScoreboardSection';
import StandingsSection from '../../components/StandingsSection/StandingsSection';
import RankingSection from '../../components/RankingSection/RankingSection';

const Home = () => {

  return (
    <>
      <HeroSection />
      <Container className="d-flex align-items-center justify-content-center" style={{ width: '100vw' }}>
        <Button className="btn btn-light">
          More Details
        </Button> 
      </Container>
      <ScoreboardSection />
      <StandingsSection />
      <RankingSection />
    </>
  )
}

export default Home