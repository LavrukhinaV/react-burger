import {
  UPDATE_CONSTRUCTOR_INGREDIENTS,
  ADD_CONSTRUCTOR_INGREDIENT,
  DELETE_CONSTRUCTOR_INGREDIENT,
  SET_CONSTRUCTOR_BUN
} from "../actions/burger-constructor";

const constructorInitialState = {
  ingredients: [ ],
  bun: {
    _id: "643d69a5c3f7b9001cfa093c",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large:" https://code.s3.yandex.net/react/code/bun-02-large.png",
  }
};

export const constructorReduser = (state = constructorInitialState, action) => {
  switch(action.type) {
    case UPDATE_CONSTRUCTOR_INGREDIENTS: {
      console.log(action)
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
    default:
      return state;
  }
}