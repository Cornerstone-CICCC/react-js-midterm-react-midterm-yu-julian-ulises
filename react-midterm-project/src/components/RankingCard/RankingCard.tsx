import { RankingData } from "../../pages/Ranking/Ranking"


type RankingCardProps = {
  data: RankingData
}

const RankingCard = ({ data }: RankingCardProps) => {
  return (
    <>
      <td>{data.rank}</td>
      <td></td>
      <td>{data.name}</td>
      <td>{data.team}</td>
      <td>{data.goals}</td>
      <td>{data.assists}</td>
      <td>{data.played}</td>
    </>
  )
}

export default RankingCard