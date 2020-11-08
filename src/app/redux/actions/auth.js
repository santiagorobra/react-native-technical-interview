import { types } from "../types/types"

export const loginAuthAction = (token) => {
  return {
    type: types.login,
    payload: {
      userToken: token,
    }
  }
}
export const logoutAuthAction = () => {
  return {
    type: types.logout,
  }
}