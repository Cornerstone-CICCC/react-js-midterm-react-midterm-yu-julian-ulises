import leagueLogo from '../../assets/Images_badge/england-premier-league-logo-on-transparent-background-free-vector.jpg';
import "./HeroSection.css";


const HeroSection = () => {
  return (
    <div className="herosection-info">
      <img src={leagueLogo} alt="Premier League Logo" className="herosection-logo" />
      <div>
        <h2 className="herosection-title">ENGLISH PREMIER LEAGUE</h2>
        <p className="herosection-description">This App is for checking the data of premier league!</p>
        <p className="herosection-description">We plan to publish information on other European leagues in the future!</p>
      </div>
    </div>
  );
};

export default HeroSection;
