import { SaveNewScore } from "../services/Leaderboard"
import { useEffect, useState } from "react"

const FinalScore = (props) => {

  const [finalScore,setFinalScore] = useState(props.score)

  const postScore = async (final) => {
    await SaveNewScore({
      userId: props.user.id,
      points: final
    })
  }
 const dummy = false
  useEffect(() => {
    postScore(finalScore)
  },[dummy])

  return (
    <div>
  <h1>Final Score!</h1>
  <h2>{props.score}</h2>
  <h2>{props.user.username}</h2>
  <button
    id="next-button"
    onClick={() => {
      props.setRound(0)
      props.setScore(0)
      props.setCountDown(3)
    }}
  >
    Try Again?
  </button>
  </div>
  )
}
export default FinalScore