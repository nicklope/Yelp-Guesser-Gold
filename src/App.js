import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Gameplay from './pages/Gameplay'
import Scores from './pages/Scores'
import Header from './components/Header'
import Quickplay from './pages/QuickPlay'
import Home from './pages/Home'
import Userpage from './pages/UserPage'

import LocalPlay from './pages/LocalPlay'

import CatGuesser from './pages/CatGuesser'

import { CheckSession } from './services/Auth'
import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import GlobalPlay from './pages/GlobalPlay'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [userLeaderboardScores, setUserLeaderboardScores] = useState(undefined)
  const [worldLeaderboardScores, setWorldLeaderboardScores] =
    useState(undefined)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  return (
    <div className="App">
      <Header
        user={user}
        authenticated={authenticated}
        setWorldLeaderboardScores={setWorldLeaderboardScores}
        worldLeaderboardScores={worldLeaderboardScores}
        userLeaderboardScores={userLeaderboardScores}
        setUserLeaderboardScores={setUserLeaderboardScores}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                user={user}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/gameplay"
            element={
              <Gameplay
                user={user}
                authenticated={authenticated}
                userLeaderboardScores={userLeaderboardScores}
                setUserLeaderboardScores={setUserLeaderboardScores}
                worldLeaderboardScores={worldLeaderboardScores}
                setWorldLeaderboardScores={setWorldLeaderboardScores}
              />
            }
          />
          <Route
            path="/scores"
            element={
              <Scores
                user={user}
                authenticated={authenticated}
                worldLeaderboardScores={worldLeaderboardScores}
                userLeaderboardScores={userLeaderboardScores}
                setWorldLeaderboardScores={setWorldLeaderboardScores}
                setUserLeaderboardScores={setUserLeaderboardScores}
              />
            }
          />
          <Route path="/quickplay" element={<Quickplay />} />
          <Route
            path="/quickgame"
            element={<HomePage user={user} authenticated={authenticated} />}
          />
          <Route
            path="/localplay"
            element={<LocalPlay user={user} authenticated={authenticated} />}
          />
          <Route
            path="/globalplay"
            element={<GlobalPlay user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/userpage"
            element={
              <Userpage
                user={user}
                authenticated={authenticated}
                userLeaderboardScores={userLeaderboardScores}
                setUserLeaderboardScores={setUserLeaderboardScores}
              />
            }
          />
          <Route path="/catguesser" element={<CatGuesser />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
