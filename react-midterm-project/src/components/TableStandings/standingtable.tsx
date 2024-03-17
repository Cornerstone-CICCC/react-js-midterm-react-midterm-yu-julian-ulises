import React from 'react';
import { Container, Table } from 'react-bootstrap';
import teamBadges from '../../utils/teamBadges';

type StandingsRow = {
  rank: string;
  team_badge?: string;
  name: string;
  points: string;
  goals_scored: string;
  goals_conceded: string;
  goal_diff: string;
  matches: string;
  won: string;
  drawn: string;
  lost: string;
};

type StandingsTableProps = {
  standings: StandingsRow[];
};

const StandingsTable: React.FC<StandingsTableProps> = ({ standings }) => {
  return (
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
      </Table>
    </Container>
  );
};

export default StandingsTable;
