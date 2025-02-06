import apiConfig from '@/config/AxiosConfig'
import type SignupRequestModel from '../model/request/SignupRequestModel.ts'
import type { UserResponseModel } from '../model/response/UserResponseDataModel.js'

async function fetchUserData(): Promise<UserResponseModel> {
  try {
    const response = await apiConfig.get('users/me')
    console.log(response)
    const data = response.data.data
    const user: UserResponseModel = data.user
    return user
  } catch (e) {
    throw e
  }
}
async function login(email: string, password: string): Promise<string> {
  try {
    const payload = {
      email: email,
      password: password,
    }
    const response = await apiConfig.post('users/login', payload)
    const data = response.data
    const token = data.token
    return token
  } catch (e) {
    throw e
  }
}
async function signup(model: SignupRequestModel): Promise<string> {
  const response = await apiConfig.post('users/signup', model)
  const data = await response.data
  const token = data.token
  return token
}
export { fetchUserData, login, signup }
