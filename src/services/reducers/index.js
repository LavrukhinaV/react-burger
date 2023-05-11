import { combineReducers } from 'redux';
import { constructorReduser } from "./burger-constructor";
import { initialIngredientReduser } from "./initial-ingredients";
import { orderReduser } from "./order-details";
import { selectedIngredientReduser } from "./selected-ingredient";
import { userReduser } from "./auth";

export const rootReducer = combineReducers({
  ingredients: initialIngredientReduser,
  burgerConstructor: constructorReduser,
  order: orderReduser,
  ingredient: selectedIngredientReduser,
  user: userReduser
});