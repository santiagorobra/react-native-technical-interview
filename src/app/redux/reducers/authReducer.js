import { types } from "../types/types";

const initialState = {
  userToken: null,
  isLoading: true,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        userToken: action.payload.userToken,
        isLoading: false,
      }
    case types.logout:
      return {
        userToken: null,
        isLoading: false,
      }
    default:
      return state;
  }
}