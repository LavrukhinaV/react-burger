import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED
} from "../constants/initial-ingredients";

import { TInitialIngredientsActions } from "../actions/initial-ingredients";
import { TIngredientData } from "../../utils/types";

type TInitialIngredientsState = {
  ingredients: Array<TIngredientData>;
  ingredientsRequestSuccess: boolean;
  ingredientsRequestFailed: boolean;
}

const initialIngredientsState: TInitialIngredientsState = {
  ingredients: [],
  ingredientsRequestSuccess: false,
  ingredientsRequestFailed: false,
};

export const initialIngredientsReduser = (state = initialIngredientsState, action: TInitialIngredientsActions): TInitialIngredientsState => {
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