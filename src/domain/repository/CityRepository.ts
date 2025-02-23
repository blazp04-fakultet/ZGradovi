import apiConfig from '@/config/AxiosConfig'
import type { CityResponseModel } from '../model/response/CityResponseModel'
import type { CityResponseDetails } from '../model/response/CityResponseDetails'
import type { CityDetailsRequestModel } from '../model/request/CityDetailsRequestModel'

async function fetchAllCities(): Promise<CityResponseModel[]> {
  const response = await apiConfig.get('/cities?sortBy=name&sortType=ASC')
  const data = await response.data.data

  const cities: CityResponseModel[] = data.cities
  return cities
}
async function fetchCityDetails(id: string): Promise<CityResponseDetails> {
  const response = await apiConfig.get(`/cities/${id}`)
  const data = response.data.data

  const cityDetails: CityResponseDetails = data.city

  return cityDetails
}

async function postNewCity(city: CityDetailsRequestModel): Promise<boolean> {
  const response = await apiConfig.post('/cities', city)
  if (response.status == 201) {
    return true
  }
  return false
}

async function deleteCity(id: string): Promise<boolean> {
  const response = await apiConfig.delete(`/cities/${id}`)
  if (response.status == 200) {
    return true
  }
  return false
}

async function patchCityImage(
  id: string,
  data: CityDetailsRequestModel,
): Promise<boolean> {
  const response = await apiConfig.patch(`/cities/${id}`, data)
  if (response.status == 200) {
    return true
  }
  return false
}

export {
  fetchAllCities,
  postNewCity,
  fetchCityDetails,
  deleteCity,
  patchCityImage,
}
