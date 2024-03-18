import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import "./ScoreboardSection.css";

const ScoreboardSection = () => {
  return (
    <div className="scoreboard-container">
      <div className="left-section">
        <FontAwesomeIcon icon={faTable} className="section-font"/>
      </div>
      <div className="right-section">
        <h2 className="right-section-title">ScoreBoard</h2>
        <div>The "Scoreboard" page is dedicated to displaying live soccer scores, presenting the match outcomes for various soccer clubs. It's a real-time board that shows which teams are competing, the current scoreline and updates throughout the match.</div>
      </div>
    </div>

  )
}

export default ScoreboardSection