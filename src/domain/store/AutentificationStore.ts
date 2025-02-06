import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type SignupRequestModel from '../model/request/SignupRequestModel.ts'
import { signup as iSignup } from '../repository/AutentificationRepository'
import { login as iLogin } from '../repository/AutentificationRepository'
import router from '@/router/index'
export const useAutentificationStore = defineStore(
  'autentificationStore',
  () => {
    //? ---------------[STATE]-----------------
    const token = ref<string | null>('')

    //? ---------------[ACTIONS]---------------

    const login = async (email: string, password: string) => {
      try {
        const response = await iLogin(email, password)
        token.value = response
        localStorage.setItem('token', token.value)
        router.push({ name: 'home' })
      } catch (e) {
        throw e
      }
    }

    const logout = async () => {}

    const automaticLogin = () => {
      token.value = localStorage.getItem('token')
      if (token.value) {
        router.push({ name: 'home' })
      }
    }

    const signup = async (data: SignupRequestModel) => {
      console.log(data)
      console.log('iSignup')
      try {
        const user = await iSignup(data)
        token.value = user
        localStorage.setItem('token', token.value)
        router.push({ name: 'home' })
      } catch (e) {
        throw e
      }
    }

    //? ---------------[EXPORTS]---------------
    return {
      login,
      logout,
      signup,
      automaticLogin,
    }
  },
)
