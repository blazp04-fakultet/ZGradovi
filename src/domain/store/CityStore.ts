import { defineStore } from 'pinia'
import type { CityModel } from '@/domain/model/local/CityModel'
import { ref } from 'vue'
import { fetchAllCities } from '@/domain/repository/CityRepository'
import type { CityResponseModel } from '../model/response/CityResponseModel'
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

  //? ---------------[EXPORTS]---------------
  return {
    cities,
    initial,
    getAllCities,
  }
})
