import leagueLogo from '../../assets/Images_badge/england-premier-league-logo-on-transparent-background-free-vector.jpg';

const Standingslogo = () => {
  return (
    <div className="league-info">
      <img src={leagueLogo} alt="Premier League Logo" className="league-logo" />
      <div>
        <h2 className="league-title">ENGLISH PREMIER LEAGUE</h2>
        <p className="league-description">Top four teams qualify for next season's Champions League</p>
        <p className="league-description">Fifth place team qualifies for next season's Europa League</p>
        <p className="league-description">Bottom three teams are relegated</p>
      </div>
    </div>
  );
};

export default Standingslogo;
