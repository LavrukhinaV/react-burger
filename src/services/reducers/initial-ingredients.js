import {
  GET_INITIAL_INGREDIENTS,
} from "../actions/initial-ingredients";

const initialIngredientState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const initialIngredientReduser = (state = initialIngredientState, action) => {
  switch(action.type) {
    case GET_INITIAL_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.paylod,
      }
    }
    default:
      return state;
  }
}