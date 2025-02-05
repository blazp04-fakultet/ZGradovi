import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { SignupRequestModel } from '../model/request/SignupRequestModel'

export const useAutentificationStore = defineStore(
  'autentificationStore',
  () => {
    //? ---------------[STATE]-----------------
    const userId = ref<string | null>('')


    //? ---------------[ACTIONS]---------------


    const login = async (email: string, password: string) => {

    }

    const logout = async () => {

    }

    const signup = async (data: SignupRequestModel, password: string) => {

    }

    //? ---------------[EXPORTS]---------------
    return {
      login,
      logout,
      signup,
    }
  },
)
