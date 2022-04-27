import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'
import signIn from '../images/signIn.PNG'

const Login = ({ user, setUser, toggleAuthenticated }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({
      username: '',
      password: ''
    })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/quickplay')
  }

  return (
    <div className="signin-main">
      <img src={signIn} alt="sign in" />
      <div className="signin">
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>
              Username:
              <input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                required
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Password:
              <input
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="password"
                value={formValues.password}
                required
              />
            </label>
          </div>
          <div className="button">
            <button disabled={!formValues.username && !formValues.password}>
              SIGN IN
            </button>
          </div>
        </form>
      </div>
      <div className="register-button">
        <h3>Dont have an account?</h3>
        <div className="button">
          <button
            onClick={() => {
              navigate('/register')
            }}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
