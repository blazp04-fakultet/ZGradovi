import { defineStore } from 'pinia'
import type { CityModel } from '@/domain/model/local/CityModel'
import { ref } from 'vue'
import { fetchAllCities, postNewCity } from '@/domain/repository/CityRepository'
import type { CityResponseModel } from '../model/response/CityResponseModel'
import type { CityDetailsModel } from '../model/local/CityDetailsModel'
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

  const addNewCity = async (city: CityDetailsModel) => {
    const response = await postNewCity(city)
    if (response) {
      await getAllCities()
    }
  }

  //? ---------------[EXPORTS]---------------
  return {
    cities,
    initial,
    getAllCities,
    addNewCity,
  }
})
