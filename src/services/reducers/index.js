import { combineReducers } from 'redux';
import { constructorReduser } from "./burger-constructor";
import { initialIngridientReduser } from "./initial-ingridients";
import { orderReduser } from "./order-details";
import { selectedIngridientReduser } from "./selected-ingridient";

export const rootReducer = combineReducers({
  ingridients: initialIngridientReduser,
  burgerConstructor: constructorReduser,
  order: orderReduser,
  ingridient: selectedIngridientReduser,
});