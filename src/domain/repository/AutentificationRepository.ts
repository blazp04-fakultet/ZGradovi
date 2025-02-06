import apiConfig from "@/config/AxiosConfig";
import type  SignupRequestModel  from "../model/request/SignupRequestModel.ts";


// async function fetchUserData(): Promise<UserResponseModel> {

// }
// async function login(): Promise<string> {

// }
async function signup(model:SignupRequestModel): Promise<string> {
const response = await apiConfig.post('users/signup', model)
const data = await response.data
const token = data.token
return token
}

export { signup }
