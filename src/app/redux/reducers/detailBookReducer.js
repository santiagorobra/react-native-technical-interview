import { types } from "../types/types";

const initialState = {
  book: null,
}

export const detailBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.detailBook:
      return {
        book: action.payload.book,
      }
    default:
      return state;
  }
}