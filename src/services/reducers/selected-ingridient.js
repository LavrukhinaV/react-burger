import {
  SET_SELECTED_INGRIDIENT,
  DELETE_SELECTED_INGRIDIENT,
} from "../actions/selected-ingridient";

const selectedIngridientState = {
  selectedIngridient: {},
};

export const selectedIngridientReduser = (state = selectedIngridientState, action) => {
  switch(action.type) {

    case SET_SELECTED_INGRIDIENT: {
      return {
        ...state,
        selectedIngridient: action.paylod,
      }
    }

    case DELETE_SELECTED_INGRIDIENT: {
      return {
        ...state,
        selectedIngridient: {}
      }
    }

    default:
      return state;
  }
}