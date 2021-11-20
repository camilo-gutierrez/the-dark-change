import { types } from "../types/types";

const initialState = {
  cardList: [],
  cardSelected: null,
};

export const cardsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.getCards:
      return {
        cardList: payload.slice(0,35),
      };
    case types.setCharacter:
      return {
        ...state,
        cardSelected: {...payload},
      };

    default:
      return state;
  }
};
