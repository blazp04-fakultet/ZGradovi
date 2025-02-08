import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SignupRequestModel } from '../model/request/SignupRequestModel.ts'
import {
  login as iLogin,
  signup as iSignup,
  fetchUserData,
} from '../repository/AutentificationRepository'
import router from '@/router/index'
import type { UserModel } from '../model/local/UserDataModel.js'
export const useAutentificationStore = defineStore(
  'autentificationStore',
  () => {
    //? ---------------[STATE]-----------------
    const token = ref<string | null>('')
    const userData = ref<UserModel | null>(null)

    //? ---------------[ACTIONS]---------------

    const login = async (email: string, password: string) => {
      try {
        const response = await iLogin(email, password)
        token.value = response
        localStorage.setItem('token', token.value)
        router.push({ name: 'home' })
        getUserData()
      } catch (e) {
        throw e
      }
    }

    const logout = async () => {
      token.value = null
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    }

    const automaticLogin = () => {
      token.value = localStorage.getItem('token')
      if (token.value) {
        router.push({ name: 'home' })
        getUserData()
      }
    }

    const signup = async (data: SignupRequestModel) => {
      try {
        const user = await iSignup(data)
        token.value = user
        localStorage.setItem('token', token.value)
        router.push({ name: 'home' })
        getUserData()
      } catch (e) {
        throw e
      }
    }

    const getUserData = async () => {
      try {
        const response = await fetchUserData()
        userData.value = {
          id: response.id,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
          fullName: response.firstName + ' ' + response.lastName,
        }
      } catch (e) {
        throw e
      }
    }

    //? ---------------[EXPORTS]---------------
    return {
      userData,
      login,
      logout,
      signup,
      automaticLogin,
      getUserData,
    }
  },
)
