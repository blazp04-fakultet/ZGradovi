import apiConfig from '@/config/AxiosConfig'
import type { CityResponseModel } from '../model/response/CityResponseModel'

async function fetchAllCities(): Promise<CityResponseModel[]> {
  const response = await apiConfig.get('/cities?sortBy=name&sortType=ASC')
  const data = await response.data.data
  const cities: CityResponseModel[] = data.cities
  return cities
}

export { fetchAllCities }
