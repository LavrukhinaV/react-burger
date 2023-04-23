import {
  GET_CONSTRUCTOR_INGRIDIENTS,
} from "../actions/burgerConstructor";

const constructorInitialState = {
  constructorIngridients: [],
};

export const constructorReduser = (state = constructorInitialState, action) => {
  switch(action.type) {
    case GET_CONSTRUCTOR_INGRIDIENTS: {
      return {
        ...state,
        constructorIngridients: action.constructorIngridients
      }
    }
    default:
      return state;
  }
}