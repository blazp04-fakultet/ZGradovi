import { defineStore } from 'pinia'
import type { CityModel } from '@/domain/model/local/CityModel'
import type { CityDetails } from '@/domain/model/local/CityDetails'
import { ref } from 'vue'

import {
  fetchAllCities,
  fetchCityDetails,
  postNewCity,
} from '@/domain/repository/CityRepository'
import type { CityResponseModel } from '../model/response/CityResponseModel'
import type { CityDetailsModel } from '../model/local/CityDetailsModel'
import type { CityDetailsRequestModel } from '../model/request/CityDetailsRequestModel'
export const useCityStore = defineStore('cityStore', () => {
  //? ---------------[STATE]-----------------
  const cities = ref<CityModel[] | null>(null)

  //? ---------------[ACTIONS]---------------

  const initial = async () => {
    await getAllCities()
  }
  const getAllCities = async () => {
    const response: CityResponseModel[] = await fetchAllCities()
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

  const addNewCity = async (city: CityDetailsModel) => {
    const c: CityDetailsRequestModel = {
      name: city.name,
      description: city.description,
      country: city.country,
      settledYear: city.settledYear,
      consolidatedYear: city.consolidatedYear,
      population: city.population,
      zipCode: city.zipCode,
      imageUrl: city.imageUrl,
    }
    const response = await postNewCity(c)
    if (response) {
      await getAllCities()
    }
  }

  //? ---------------[EXPORTS]---------------
  return {
    cities,
    initial,
    getAllCities,
    getCityDetails,
    addNewCity,
  }
})
