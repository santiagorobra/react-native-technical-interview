import { types } from "../types/types"

export const loginAuthAction = (user) => {
  return {
    type: types.login,
    payload: {
      user,
    }
  }
}
export const logoutAuthAction = () => {
  return {
    type: types.logout,
  }
}