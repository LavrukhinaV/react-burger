import { TIngredientData, TIngredientDataWithUUId } from "../../utils/types";
import { TBurgerConstructorActions } from "../../services/actions/burger-constructor";
import {
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SET_CONSTRUCTOR_BUN,
  REMOVE_CONSTRUCTOR
} from "../constants/burger-constructor";

type TConstructorState = {
  ingredients: Array<TIngredientDataWithUUId>;
  bun: TIngredientData | null
}

const constructorInitialState: TConstructorState = {
  ingredients: [],
  bun: null
};

export const constructorReduser = (state = constructorInitialState, action: TBurgerConstructorActions): TConstructorState => {
  switch(action.type) {
    case UPDATE_CONSTRUCTOR_INGREDIENTS: {

      const ingredients = [...state.ingredients];
      ingredients.splice(
        action.payload.to,
        0,
        ingredients.splice(action.payload.from, 1)[0]
      );
      return {
        ...state,
        ingredients
      }
    }

    case ADD_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.ingredient
        ]
      }
    }

    case DELETE_CONSTRUCTOR_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter(ingredient => ingredient.uuid !== action.ingredient.uuid)
        ]
      }
    }

    case SET_CONSTRUCTOR_BUN: {
      return {
        ...state,
        bun: action.bun
      }
    }

    case REMOVE_CONSTRUCTOR: {
      return {
        ...state,
        ingredients: [],
        bun: null
      }
    }
    
    default:
      return state;
  }
}