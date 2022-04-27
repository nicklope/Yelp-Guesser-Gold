import Client from './api'

export const GetUserLeaderboard = async (user_id) => {
  try {
    const res = await Client.get(`/leaderboard/userId/${user_id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const GetFullUserLeaderboard = async (user_id) => {
  try {
    const res = await Client.get(`/leaderboard/userIdfull/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetFullWorldLeaderboard = async () => {
  try {
    const res = await Client.get(`/leaderboard/world`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const SaveNewScore = async (data) => {
  try {
    const res = await Client.post('/score/new-score-full', data)
    return res.data
  } catch (error) {
    throw error
  }
}
