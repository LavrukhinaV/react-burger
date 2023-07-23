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
  bun: TIngredientData
}

const constructorInitialState: TConstructorState = {
  ingredients: [],
  bun: {
    _id: "",
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: "",
    image_large: "",
    image_mobile: "",
    name: "",
    price: 0,
    proteins: 0,
    type: ""
  },
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
        bun: {
          _id: "",
          calories: 0,
          carbohydrates: 0,
          fat: 0,
          image: "",
          image_large: "",
          image_mobile: "",
          name: "",
          price: 0,
          proteins: 0,
          type: ""
        },
      }
    }
    
    default:
      return state;
  }
}