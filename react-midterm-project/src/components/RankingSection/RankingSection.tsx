import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import "./RankingSection.css";

const RankingSection = () => {
  return (
    <div className="ranking-container">
      <div className="left-section">
        <FontAwesomeIcon icon={faRankingStar} className="section-font" />
      </div>
      <div className="right-section">
        <h2 className="right-section-title">Ranking</h2>
        <div>The "Player Rankings" page is a leaderboard showcasing individual players' performances across the league.This ranking allows fans to see which players are in top form and leading the charts in various categories.</div>
      </div>
    </div>
  )
}

export default RankingSection