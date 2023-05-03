import { getIngredients } from "../../utils/Api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const loadInitialIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQUEST,
  })

  getIngredients().then(res => {
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      paylod: res.data,
    })
  })
  .catch((err) => {
    dispatch({
      type: GET_INGREDIENTS_FAILED,
    })
  });
};
