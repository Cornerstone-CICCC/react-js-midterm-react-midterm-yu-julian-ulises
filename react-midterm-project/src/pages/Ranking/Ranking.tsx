import { useEffect, useState } from 'react';
import './Ranking.css'
import RankingTable from '../../components/RankingTable/RankingTable';
import Standingslogo from '../../components/TableStandings/logostanding';

export type RankingData = {
  rank: number;
  name: number;
  team: string;
  goals: number;
  assists: number;
  played: number;
}

const Ranking = () => {
  const [rankingData, setRankingData] = useState<RankingData[]>([{
    "rank": 0,
    "name": 0,
    "team": "",
    "goals": 0,
    "assists": 0,
    "played": 0,
  }]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        const url = `https://livescore-api.com/api-client/competitions/topscorers.json?competition_id=2&key=${apiKey}&secret=${secretKey}`;
        
        const response = await fetch(url);
        const data = await response.json();
        const rankingData = data.data.topscorers;

        const filteredData = rankingData.map((element: any, index: number) => ({
          "rank" : index + 1,
          "name" : element.player.name,
          "team" : element.team.name,
          "goals" : element.goals,
          "assists" : element.assists,
          "played" : element.played,
        }))

        setRankingData(filteredData)
        
      } catch (err) {
        console.log(err);
      }
    }
    fetchRankingData();
  }, []);
  return (
    <>
      <Standingslogo />
      <RankingTable rankingData={rankingData} />
    </>
  )
}

export default Ranking