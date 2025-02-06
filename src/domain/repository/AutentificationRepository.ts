import apiConfig from '@/config/AxiosConfig'
import type SignupRequestModel from '../model/request/SignupRequestModel.ts'
async function fetchUserData(): Promise<UserResponseModel> {}
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
