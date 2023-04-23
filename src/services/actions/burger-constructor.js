export const UPDATE_CONSTRUCTOR_INGRIDIENTS = "UPDATE_CONSTRUCTOR_INGRIDIENTS";
export const ADD_CONSTRUCTOR_INGRIDIENT = "ADD_CONSTRUCTOR_INGRIDIENT";
export const DELETE_CONSTRUCTOR_INGRIDIENT = "DELETE_CONSTRUCTOR_INGRIDIENT";
export const SET_CONSTRUCTOR_BUN = "SET_CONSTRUCTOR_BUN";

export const addConstructorIngridient = (ingridient) => (dispatch) => {

  dispatch ({
    type: ADD_CONSTRUCTOR_INGRIDIENT,
    ingridient: {
      ...ingridient,
      uuid: crypto.randomUUID()
    }
  })
};

export const setConstructorBun = (bun) => (dispatch) => {
  dispatch ({
    type: SET_CONSTRUCTOR_BUN,
    bun
  })
}