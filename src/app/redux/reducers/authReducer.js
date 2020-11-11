import { types } from "../types/types";

const initialState = {
  user: null,
  isLoading: true,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        user: action.payload.user,
        isLoading: false,
      }
    case types.logout:
      return {
        user: null,
        isLoading: false,
      }
    default:
      return state;
  }
}