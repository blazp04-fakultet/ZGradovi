import apiConfig from '@/config/AxiosConfig'

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
async function signup(): Promise<string> {}

export { fetchUserData, login, signup }
