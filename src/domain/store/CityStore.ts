import { defineStore } from 'pinia'
import type { CityModel } from '@/domain/model/local/CityModel'
import type { CityDetails } from '@/domain/model/local/CityDetails'
import { ref } from 'vue'

import {
  fetchAllCities,
  fetchCityDetails,
  postNewCity,
  patchCityImage,
  deleteCity as iDeleteCity,
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

  const deleteCity = async (id: string) => {
    await iDeleteCity(id)
    getAllCities()
  }

  const changePicture = async (id: string, imageUrl: string) => {
    if (cityDetails.value) {
      const c: CityDetailsRequestModel = {
        name: cityDetails.value.name,
        description: cityDetails.value.description,
        country: cityDetails.value.country,
        settledYear: parseInt(cityDetails.value.settledYear),
        consolidatedYear: parseInt(cityDetails.value.consolidatedYear),
        population: parseInt(cityDetails.value.population),
        zipCode: parseInt(cityDetails.value.zipCode),
        imageUrl: imageUrl,
      }
      await patchCityImage(id, c)
    }
    getCityDetails(id)
    getAllCities()
  }

  const addNewCity = async (city: CityDetailsModel) => {
    const c: CityDetailsRequestModel = {
      name: city.name,
      description: city.description,
      country: city.country,
      settledYear: parseInt(city.settledYear),
      consolidatedYear: parseInt(city.consolidatedYear),
      population: parseInt(city.population),
      zipCode: parseInt(city.zipCode),
      imageUrl: city.imageURL,
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
    deleteCity,
    changePicture,
    cityDetails,
  }
})
