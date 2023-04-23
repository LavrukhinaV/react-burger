import {
  GET_INITIAL_INGRIDIENTS,
} from "../actions/initial-ingridients";

const initialIngridientState = {
  ingridients: [],
  ingridientsRequest: false,
  ingridientsFailed: false,
};

export const initialIngridientReduser = (state = initialIngridientState, action) => {
  switch(action.type) {
    case GET_INITIAL_INGRIDIENTS: {
      return {
        ...state,
        ingridients: action.paylod,
      }
    }
    default:
      return state;
  }
}