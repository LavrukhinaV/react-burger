import { combineReducers } from 'redux';
import { constructorReduser } from "./burger-constructor";
import { initialIngredientsReduser } from "./initial-ingredients";
import { orderReduser } from "./order-details";
import { selectedIngredientReduser } from "./selected-ingredient";
import { userReduser } from "./auth";
import { feedReduser } from './feed';

export const rootReducer = combineReducers({
  ingredients: initialIngredientsReduser,
  burgerConstructor: constructorReduser,
  order: orderReduser,
  ingredient: selectedIngredientReduser,
  user: userReduser,
  feed: feedReduser,
});