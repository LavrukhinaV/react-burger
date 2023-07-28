import { SET_SELECTED_INGREDIENT, DELETE_SELECTED_INGREDIENT } from "../../services/constants/selected-ingredient";
import { TSelectedIngredientActions } from "../actions/selected-ingredient";
import { TIngredientData } from "../../utils/types";

type TSelectedIngredientState = {
  selectedIngredient: TIngredientData
}

const selectedIngredientState: TSelectedIngredientState = {
  selectedIngredient: {
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

export const selectedIngredientReduser = (state = selectedIngredientState, action: TSelectedIngredientActions): TSelectedIngredientState => {
  switch(action.type) {

    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: action.ingredient,
      }
    }

    case DELETE_SELECTED_INGREDIENT: {
      return {
        ...state,
        selectedIngredient: {
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
        }
      }
    }

    default:
      return state;
  }
}