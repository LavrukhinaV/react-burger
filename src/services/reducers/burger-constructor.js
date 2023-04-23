import {
  UPDATE_CONSTRUCTOR_INGRIDIENTS,
  ADD_CONSTRUCTOR_INGRIDIENT,
  DELETE_CONSTRUCTOR_INGRIDIENT,
  SET_CONSTRUCTOR_BUN
} from "../actions/burger-constructor";

const constructorInitialState = {
  ingridients: [ ],
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
    case UPDATE_CONSTRUCTOR_INGRIDIENTS: {
      return {
        ...state,
        ingridients: action.ingridients
      }
    }

    case ADD_CONSTRUCTOR_INGRIDIENT: {
      return {
        ...state,
        ingridients: [
          ...state.ingridients,
          action.ingridient
        ]
      }
    }

    case DELETE_CONSTRUCTOR_INGRIDIENT: {
      return {
        ...state,
        ingridients: [
          ...state.ingridients.filter(ingridient => ingridient.uuid !== action.ingridient.uuid)
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