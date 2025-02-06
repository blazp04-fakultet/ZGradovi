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
  const cityDetails = ref<CityDetails | null>(null)

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
  const getCityDetails = async (id: string) => {
    console.log('getCityDetails')
    const response = await fetchCityDetails(id)
    console.log(response)
    if (response) {
      const cd: CityDetails = {
        name: response.name ?? '',
        description: response.description ?? '',
        country: response.country ?? '',
        settledYear: response.settledYear?.toString() ?? '',
        consolidatedYear: response.consolidatedYear?.toString() ?? '',
        population: response.population?.toString() ?? '',
        zipCode: response.zipCode?.toString() ?? '',
        imageUrl: response.imageUrl ?? '',
      }
      cityDetails.value = cd
    }
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
    cityDetails,
  }
})
