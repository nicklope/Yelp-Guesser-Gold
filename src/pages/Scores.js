import { useEffect, useState } from 'react'
import {
  GetFullWorldLeaderboard,
  GetFullUserLeaderboard
} from '../services/Leaderboard'
import trophy from '../images/trophy.png'

const Scores = ({
  user,
  authenticated,
  worldLeaderboardScores,
  userLeaderboardScores,
  setWorldLeaderboardScores,
  setUserLeaderboardScores
}) => {
  const [worldButtonClicked, setWorldButtonClicked] = useState(false)
  const [userButtonClicked, setUserButtonClicked] = useState(false)
  const [spinClassOne, setSpinClassOne] = useState(false)
  const [leaderboardBoolean, setLeaderBoardBoolean] = useState(false)

  const retrieveWorldLeaderboard = async () => {
    const worldBoard = await GetFullWorldLeaderboard()
    setWorldLeaderboardScores(worldBoard)
  }

  useEffect(() => {
    setWorldButtonClicked(false)
    setLeaderBoardBoolean(true)
  }, [])
  if (leaderboardBoolean) {
    retrieveWorldLeaderboard()
    setLeaderBoardBoolean(false)
  }
  return user && authenticated && userButtonClicked ? (
    <div id="scores-page">
      <div className="leader-scores">
        <h2>World Leaderboard</h2>

        <ol id="leaderboard-list">
          <li>
            <div className="points">{worldLeaderboardScores[0].points}</div>
            <div className="username">{worldLeaderboardScores[0].username}</div>
            <div className="date">{worldLeaderboardScores[0].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[1].points}</div>
            <div className="username">{worldLeaderboardScores[1].username}</div>
            <div className="date">{worldLeaderboardScores[1].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[2].points}</div>
            <div className="username">{worldLeaderboardScores[2].username}</div>
            <div className="date">{worldLeaderboardScores[2].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[3].points}</div>
            <div className="username">{worldLeaderboardScores[3].username}</div>
            <div className="date">{worldLeaderboardScores[3].date}</div>
          </li>
          <li>
            <div className="points">{worldLeaderboardScores[4].points}</div>
            <div className="username">{worldLeaderboardScores[4].username}</div>
            <div className="date">{worldLeaderboardScores[4].date}</div>
          </li>
        </ol>
      </div>
    </div>
  ) : (
    <div id="scores-page">
      <div
        className="leader-scores"
        onMouseOver={() => {
          setSpinClassOne(true)
        }}
        onMouseLeave={() => setSpinClassOne(false)}
        onClick={() => {
          setUserButtonClicked(true)
        }}
      >
        <h2>World Leaderboard</h2>
        <img
          id="trophy"
          className={spinClassOne ? 'spin' : undefined}
          src={trophy}
        />
      </div>
    </div>
  )
}

export default Scores
