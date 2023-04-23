import { combineReducers } from 'redux';
import { constructorReduser } from "./burgerConstructor";
import { initialIngridientReduser } from "./initialIngridients";
import { orderReduser } from "./orderDetails";
import { selectedIngridientReduser } from "./selectedIngridient";

export const rootReducer = combineReducers({
  ingridients: initialIngridientReduser,
  constructor: constructorReduser,
  order: orderReduser,
  ingridient: selectedIngridientReduser
});