import './RankingTable.css';
import { Container, Table } from 'react-bootstrap';
import { RankingData } from '../../pages/Ranking/Ranking';
import RankingCard from '../RankingCard/RankingCard';

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
              <RankingCard data={element} />
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default RankingTable