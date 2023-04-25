import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from "../actions/initial-ingredients";

const initialIngredientState = {
  ingredients: [],
  ingredientsRequestSuccess: false,
  ingredientsRequestFailed: false,
};

export const initialIngredientReduser = (state = initialIngredientState, action) => {
  switch(action.type) {

    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.paylod,
        ingredientsRequestSuccess: true,
        ingredientsRequestFailed: false,
      }
    }

    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequestSuccess: true,
        ingredientsRequestFailed: false,
      }
    }

    case GET_INGREDIENTS_FAILED: {
      return {
        ...state,
        ingredientsRequestSuccess: false,
        ingredientsRequestFailed: true,
      }
    }

    default: {
      return state;
    }
  }
}