import  { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import teamBadges from '../../utils/teamBadges';
import './Standings.css';
import leagueLogo from '../../assets/Images_badge/england-premier-league-logo-on-transparent-background-free-vector.jpg';

type StandingsRow = {
  rank: string;
  team_badge?: string;
  name: string;
  points: string;
  goals_scored: string; // GA
  goals_conceded: string; // GC
  goal_diff: string; // DIF
  matches: string; // MP
  won: string; // W
  drawn: string; // D
  lost: string; // L
}

const Standings = () => {
  const [standings, setStandings] = useState<StandingsRow[]>([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  useEffect(() => {
    const fetchStandings = async () => {
      const url = `https://livescore-api.com/api-client/competitions/standings.json?competition_id=2&key=${apiKey}&secret=${secretKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.data && data.data.table) {
          setStandings(data.data.table);
        } else {
          console.error("Datos de tabla no encontrados o formato inesperado:", data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchStandings();
  }, [apiKey, secretKey]);

  return (
    <div className="container mt-5">
      <div className="league-info">
        <img src={leagueLogo} alt="Premier League Logo" className="league-logo" />
        <div>
          <h2 className="league-title">ENGLISH PREMIER LEAGUE</h2>
          <p className="league-description">Top four teams qualify for next season's Champions League</p>
          <p className="league-description">Fifth place team qualifies for next season's Europa League</p>
          <p className="league-description">Bottom three teams are relegated</p>
        </div>
      </div>

      <Container className='PremierTable'>
      <Table striped bordered hover variant="dark" className='PremierTable'>
        <thead>
          <tr>
            <th>Position</th>
            <th></th> 
            <th>Team</th>
            <th>MP</th>
            <th>PTS</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row, index) => (
            <tr key={index}>
              <td>{row.rank}</td>
              <td>
                <img src={teamBadges[row.name]} alt={`Escudo de ${row.name}`} style={{ width: '50px' }} />
              </td>
              <td>{row.name}</td>
              <td>{row.matches}</td>
              <td>{row.points}</td>
              <td>{row.won}</td>
              <td>{row.drawn}</td>
              <td>{row.lost}</td>
              <td>{row.goals_scored}</td>
              <td>{row.goals_conceded}</td>
              <td>{row.goal_diff}</td>
            </tr>
          ))}
        </tbody>
      </Table></Container>
    </div>
  );
};

export default Standings;
