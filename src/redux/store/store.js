import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { cardReducer } from "../reducers/cardReducer";
import { cardsReducer } from "../reducers/cardsReducer";

const reducers = combineReducers({
  cards: cardsReducer,
  card: cardReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);