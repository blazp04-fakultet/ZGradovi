import { defineStore } from 'pinia'
import type { CityModel } from '@/domain/model/local/CityModel'
import type { CityDetails } from '@/domain/model/local/CityDetails'
import { ref } from 'vue'
import {
  fetchAllCities,
  fetchCityDetails,
} from '@/domain/repository/CityRepository'
import type { CityResponseModel } from '../model/response/CityResponseModel'

export const useCityStore = defineStore('cityStore', () => {
  //? ---------------[STATE]-----------------
  const cities = ref<CityModel[] | null>(null)

  //? ---------------[ACTIONS]---------------

  const initial = async () => {
    await getAllCities()
  }
  const getAllCities = async () => {
    console.log('getAllCities')
    const response: CityResponseModel[] = await fetchAllCities()
    console.log(response)
    const c: CityModel[] = response.map(city => ({
      id: city.id,
      name: city.name,
      country: city.country,
      thumbnailURL: city.imageUrl,
    }))
    cities.value = c
  }
  const getCityDetails = async (id: string): Promise<CityDetails> => {
    console.log('getCityDetails')
    const response = await fetchCityDetails(id)
    const cityDetails: CityDetails = {
      name: response.name,
      description: response.description,
      country: response.country,
      settledYear: response.settledYear,
      consolidatedYear: response.consolidatedYear,
      population: response.population,
      zipCode: response.zipCode,
      imageUrl: response.imageUrl,
    }
    return cityDetails
  }

  //? ---------------[EXPORTS]---------------
  return {
    cities,
    initial,
    getAllCities,
    getCityDetails,
  }
})
