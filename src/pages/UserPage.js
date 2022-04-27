import { useNavigate } from 'react-router-dom'
import { UpdatePassword } from '../services/Auth'
// import { DeleteUser } from '../services/Auth'
import { useState } from 'react'
import hardHat from '../images/hardhat.webp'
const Userpage = ({
  user,
  authenticated,
  toggleAuthenticated,
  setUser,
  userLeaderboardScores,
  setUserLeaderboardScores
}) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    oldPassword: '',
    newPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // const payload = await UpdatePassword(formValues)
    // setFormValues({
    //   oldPassword: '',
    //   newPassword: ''
    // })
    // setUser(payload)
    // toggleAuthenticated(true)
    // navigate('/')
  }

  return user && authenticated ? (
    <div>
      {' '}
      <div id="construction">
        <img id="under-construction" src={hardHat} />
        <h1>User Page is still baking in the oven...</h1>
      </div>
      <div className="your-scores">
        <h2>{user.username}'s Profile</h2>
        <div className="username">Username: {user.username}</div>
      </div>
      <div className="update">
        <h2>Update Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Old Password:
              <input
                onChange={handleChange}
                type="text"
                name="oldPassword"
                placeholder="old password"
                value={formValues.oldPassword}
                required
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              New Password:
              <input
                onChange={handleChange}
                type="text"
                name="newPassword"
                placeholder="new password"
                value={formValues.newPassword}
                required
              />
            </label>
          </div>
          <button disabled={!formValues.oldPassword && !formValues.newPassword}>
            Submit
          </button>
        </form>
      </div>
      <div className="dont-click">
        <h3>DONT CLICK THIS BUTTON</h3>
        <button>Delete Account</button>
      </div>
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

export default Userpage
