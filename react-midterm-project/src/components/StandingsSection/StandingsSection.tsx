import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import "./StandingSection.css";

const StandingsSection = () => {
  return (
    <div className="standings-container">
      <div className="left-section">
        <FontAwesomeIcon icon={faList} className="section-font" />
      </div>
      <div className="right-section">
        <h2 className="right-section-title">Standings</h2>
        <div>The "Standings" page offers a comprehensive view of the team rankings within a soccer league.This page is vital for fans who want to follow the league's competitive landscape and track their team's progress throughout the season.</div>
      </div>
    </div>
  )
}

export default StandingsSection