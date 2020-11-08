import { types } from "../types/types";

const initialState = {
  message: null,
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loading:
      return {
        message: action.payload.message,
      }
    default:
      return state;
  }
}