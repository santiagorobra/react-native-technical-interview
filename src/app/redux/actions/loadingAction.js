import { types } from "../types/types"

export const loadingAction = (message) => {
  return {
    type: types.loading,
    payload: {
      message,
    }
  }
}