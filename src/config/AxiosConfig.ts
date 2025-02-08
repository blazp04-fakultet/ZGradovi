import axios from 'axios'

const apiConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,
})

apiConfig.interceptors.request.use(config => {
  const token = localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    config.headers.Accept = 'application/json'
    config.headers['ngrok-skip-browser-warning'] = true
  }

  return config
})

export default apiConfig
