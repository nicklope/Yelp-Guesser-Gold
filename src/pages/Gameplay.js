import { useNavigate } from 'react-router-dom'

const Gameplay = ({ user, authenticated, setUserLeaderboardScores }) => {
  let navigate = useNavigate()

  const userIdString = user.id.toString()

  return user && authenticated ? (
    <div className="gameplay-wrapper">
      <h2>Hey {user.username}, let's play Yelp Guesser!</h2>
      <div className="gameboard"></div>
      <div className="question">
        How many Stars do you think (restuarant name) has?
      </div>
      <div className="stars"></div>
      <button className="game-button">SUBMIT</button>
    </div>
  ) : (
    <div className="no-no">
      <h3>Uh oh! You need to sign in to do that.</h3>
      <div className="button">
        <button onClick={() => navigate('/login')}>SIGN IN</button>
      </div>
    </div>
  )
}

export default Gameplay
