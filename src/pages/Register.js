import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'
import create from '../images/create.PNG'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    zipcode: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    console.log(formValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      password: formValues.password,
      zipcode: formValues.zipcode
    })
    console.log('zipCode: ' + formValues.zipcode)
    setFormValues({
      username: '',
      password: '',
      confirmPassword: '',
      zipcode: ''
    })
    navigate('/login')
  }

  return (
    <div className="register-wrapper">
      <img src={create} alt="create account" />
      <div className="register">
        <form className="register-form" onSubmit={handleSubmit}>
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
          <div className="input-wrapper">
            <label>
              Confirm Password:
              <input
                onChange={handleChange}
                type="text"
                name="confirmPassword"
                placeholder="confirm password"
                value={formValues.confirmPassword}
                required
              />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
              Zipcode:
              <input
                onChange={handleChange}
                type="text"
                name="zipcode"
                placeholder="zipcode"
                value={formValues.zipcode}
                required
              />
            </label>
          </div>
          <div className="button">
            <button
              disabled={
                (!formValues.username && !formValues.zipcode) ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
