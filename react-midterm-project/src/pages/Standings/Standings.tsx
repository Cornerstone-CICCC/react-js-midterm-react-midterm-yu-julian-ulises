import { useEffect, useState } from 'react';
import Standingslogo from "../../components/TableStandings/logostanding";
import StandingsTable from "../../components/TableStandings/standingtable";
import './Standings.css';

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
    <>
      <Standingslogo />
      <StandingsTable standings={standings} />
    </>
  );
};

export default Standings;
