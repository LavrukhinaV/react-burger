import { combineReducers } from 'redux';
import { constructorReduser } from "./burger-constructor";
import { initialIngredientReduser } from "./initial-ingredients";
import { orderReduser } from "./order-details";
import { selectedIngredientReduser } from "./selected-ingredient";

export const rootReducer = combineReducers({
  ingredients: initialIngredientReduser,
  burgerConstructor: constructorReduser,
  order: orderReduser,
  ingredient: selectedIngredientReduser,
});