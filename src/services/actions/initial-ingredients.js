import { getIngredients } from "../../utils/Api";

export const GET_INITIAL_INGREDIENTS = "GET_INITIAL_INGREDIENTS";

export const loadInitialIngredients = () => (dispatch) => {

  getIngredients().then(res => {
    dispatch({
      type: GET_INITIAL_INGREDIENTS,
      paylod: res.data,
    })
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
};
