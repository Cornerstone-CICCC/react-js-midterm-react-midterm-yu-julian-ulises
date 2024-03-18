import './RankingTable.css';
import { Container, Table } from 'react-bootstrap';
import { RankingData } from '../../pages/Ranking/Ranking';

type RankingTableProps = {
  rankingData: RankingData[]
}

const RankingTable = ({ rankingData }: RankingTableProps) => {
  return (
    <Container className='rankingContainer'>
      <Table striped bordered hover variant="dark" className='rankingTable mt-6'>
        <thead>
          <tr>
            <th>Position</th>
            <th></th> 
            <th>Name</th>
            <th>Team</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Played</th>
          </tr>
        </thead>
        <tbody>
          {rankingData.map((element, index) => (
            <tr key={index}>
              <td>{element.rank}</td>
              <td></td>
              <td>{element.name}</td>
              <td>{element.team}</td>
              <td>{element.goals}</td>
              <td>{element.assists}</td>
              <td>{element.played}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default RankingTable