import { types } from "../types/types"

export const detailBookAction = (book) => {
  return {
    type: types.detailBook,
    payload: {
      book,
    }
  }
}