import { Link } from 'react-router-dom'
import { useState } from 'react'
import yelpGuesserLogo from '../images/yelpguesserlogo.png'
import playGameLogo from '../images/gamecontroller.png'
import leaderBoard from '../images/leaderboard.png'
import questionMark from '../images/questionmark.png'
import strawberry from '../images/strawberry.png'
import pear from '../images/pear.png'
import orange from '../images/orange.png'


const Header = (props) => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [palette, setPalette] = useState('navBarRed')


  // const retrieveWorldLeaderboard = async () => {
  //   const worldBoard = await GetFullWorldLeaderboard()
  //   props.setWorldLeaderboardScores(worldBoard)
  // }

  // useEffect(() => {
  //   retrieveWorldLeaderboard()
  // }, [])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
    window.location.reload()
  }



  let authenticatedOptions
  if (props.user) {
    authenticatedOptions = (
      <nav className={palette}>
      <div id="navleft-box">
        <div className="nav">
          <Link to="/">
            <img id="nav-logo" src={yelpGuesserLogo} alt="yelp guesser" />
          </Link>
        </div>
        <div className="nav">
          <Link to="/quickplay">
            <img id="nav-gamelogo" src={playGameLogo} alt="yelp guesser" />
          </Link>
        </div>
        <div className="nav">
          <Link to="/scores">
            <img id="nav-scorelogo" src={leaderBoard} alt="yelp guesser"/>
          </Link>
        </div>
      </div>
      <div id="navright-box">
      <div className="nav" id="nav-username">
          <Link to={"/userpage"}>
            {'Welcome ' + props.user.username}
          </Link>
        </div>
        <div className='nav' id="logout">
          <Link to="/" onClick={handleLogOut}>Log Out</Link> 
        </div>
        <div className='nav' id="fruit">
          <div className="accordian horizontal">
          <img id="strawberry"src={strawberry} alt='strawberry' onClick={()=> setPalette('navBarRed')}></img>
          <img id="pear" src={pear} alt='pear' onClick={()=> setPalette('navBarGreen')}></img>
          <img id="orange" src={orange} alt='orange' onClick={()=> setPalette('navBarOrange')}></img>
          </div>
        </div>
        
        <div className="nav">
          <Link to="/About">
            <img id="nav-aboutlogo" src={questionMark} alt="yelp guesser" />
          </Link>
        </div>
      </div>
    </nav>
    )
  }

  const publicOptions = (
    <nav className={palette}>
    <div id="navleft-box">
      <div className="nav">
        <Link to="/">
          <img id="nav-logo" src={yelpGuesserLogo} alt="yelp guesser" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/quickplay">
          <img id="nav-gamelogo" src={playGameLogo} alt="yelp guesser" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/scores">
          <img id="nav-scorelogo" src={leaderBoard} alt="yelp guesser"/>
        </Link>
      </div>
    </div>
    <div id="navright-box">
    <div className="nav" id="nav-username">
        <Link to={'/login'}>
          {'Log In'}
        </Link>
      </div>
      <div className='nav' id="fruit">
        <div className="accordian horizontal">
        <img id="strawberry"src={strawberry} alt='strawberry' onClick={()=> setPalette('navBarRed')}></img>
        <img id="pear" src={pear} alt='pear' onClick={()=> setPalette('navBarGreen')}></img>
        <img id="orange" src={orange} alt='orange' onClick={()=> setPalette('navBarOrange')}></img>
        </div>
      </div>
      
      <div className="nav">
        <Link to="/About">
          <img id="nav-aboutlogo" src={questionMark} alt="yelp guesser" />
        </Link>
      </div>
    </div>
  </nav>
  )

  return (
    <header>
    
      {props.authenticated && props.user ? authenticatedOptions : publicOptions}
 
    </header>
  )
}

export default Header
