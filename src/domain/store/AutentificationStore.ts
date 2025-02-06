import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type  SignupRequestModel  from "../model/request/SignupRequestModel.ts";
import {signup as iSignup} from '../repository/AutentificationRepository'

export const useAutentificationStore = defineStore(
  'autentificationStore',
  () => {
    //? ---------------[STATE]-----------------
    const token = ref<string | null>(null)


    //? ---------------[ACTIONS]---------------


    const login = async (email: string, password: string) => {

    }

    const logout = async () => {

    }

    const signup = async (data: SignupRequestModel) => {
      console.log(data)
      console.log('iSignup')
      try{
        const user = await iSignup(data)
        token.value = user
        localStorage.setItem('token', token.value)
        alert('user created')
      }
      catch(e)
      {
        throw e
      }

    }

    //? ---------------[EXPORTS]---------------
    return {
      login,
      logout,
      signup,
    }
  },
)
