import { types } from "../types/types";

const initialState = {
  characterSelected: {},
};

export const cardReducer = (state = initialState, action) => {
  const {type,payload} = action;
  switch (type) {
    case types.getCard:
      return {
        cardList: payload,
      };
    case types.setCharacter:
      return {
        cardList: payload,
      };

    default:
      return state;
  }
};