import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login as iLogin } from '../repository/AutentificationRepository'

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
      } catch (e) {
        throw e
      }
    }

    const logout = async () => {}

    // const signup = async (data: SignupRequestModel, password: string) => {}

    //? ---------------[EXPORTS]---------------
    return {
      login,
      logout,
      // signup,
    }
  },
)
