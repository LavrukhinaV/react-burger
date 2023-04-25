import {
  SET_SELECTED_INGREDIENT,
  DELETE_SELECTED_INGREDIENT,
} from "../actions/selected-ingredient";

const selectedIngredientState = {
  selectedIngredient: {},
};

export const selectedIngredientReduser = (state = selectedIngredientState, action) => {
  switch(action.type) {

    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.paylod,
      }
    }

    case DELETE_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: {}
      }
    }

    default:
      return state;
  }
}