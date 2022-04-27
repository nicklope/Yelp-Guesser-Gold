import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

// export const DeleteUser = async (data) => {
//   try {
//     const res = await Client.delete('/auth/user', data)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

export const UpdatePassword = async (data) => {
  try {
    const res = await Client.put('/auth/userpage', data)
    return res.data
  } catch (error) {
    throw error
  }
}
