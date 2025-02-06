import apiConfig from '@/config/AxiosConfig'
import type { CityResponseModel } from '../model/response/CityResponseModel'
import type { CityDetailsRequestModel } from '../model/request/CityDetailsRequestModel'

async function fetchAllCities(): Promise<CityResponseModel[]> {
  const response = await apiConfig.get('/cities?sortBy=name&sortType=ASC')
  const data = await response.data.data
  const cities: CityResponseModel[] = data.cities
  return cities
}
async function postNewCity(city: CityDetailsRequestModel): Promise<boolean> {
  const response = await apiConfig.post('/cities', city)
  if (response.status == 201) {
    return true
  }
  return false
}

export { fetchAllCities, postNewCity }
