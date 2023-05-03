export const UPDATE_CONSTRUCTOR_INGREDIENTS = "UPDATE_CONSTRUCTOR_INGREDIENTS";
export const ADD_CONSTRUCTOR_INGREDIENT = "ADD_CONSTRUCTOR_INGREDIENT";
export const DELETE_CONSTRUCTOR_INGREDIENT = "DELETE_CONSTRUCTOR_INGREDIENT";
export const SET_CONSTRUCTOR_BUN = "SET_CONSTRUCTOR_BUN";

export const addConstructorIngredient = (ingredient) => {
  return {
    type: ADD_CONSTRUCTOR_INGREDIENT,
    ingredient: {
      ...ingredient,
      uuid: crypto.randomUUID()
    }
  }
};

export const setConstructorBun = (bun) => {
  return {
    type: SET_CONSTRUCTOR_BUN,
    bun
  }
};