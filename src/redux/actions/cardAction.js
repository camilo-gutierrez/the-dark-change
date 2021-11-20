import { getCardById } from "../../api/cardById";
import { types } from "../types/types";

export const cardData = (id) => {
  return async (dispatch) => {
    const response = await getCardById(id);
    dispatch(getCardData(response));
  };
};

export const setCharacter = (characterSelected) => (dispatch) => {
  console.log("🚀 ~ file: cardAction.js ~ line 12 ~ setCharacter ~ characterSelected", characterSelected)
  dispatch({
    type: types.setCharacter,
    payload: characterSelected,
  });
};

export const getCardData = (data) => {
  console.log("🚀 ~ file: cardAction.js ~ line 21 ~ getCardData ~ data", data);

  return {
    type: types.getCard,
    payload: data,
  };
};
