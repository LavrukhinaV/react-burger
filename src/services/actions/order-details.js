import { submitOrder } from "../../utils/Api";
import { REMOVE_CONSTRUCTOR } from "./burger-constructor";

export const UPDATE_ORDER_DATE = "UPDATE_ORDER_DATE";
export const UPDATE_ORDER_SUCCESS = "UPDATE_ORDER_SUCCESS";
export const UPDATE_ORDER_FAILED = "UPDATE_ORDER_FAILED";

export const getOrderDate = (ingredients) => (dispatch) => {
  dispatch({
    type: UPDATE_ORDER_DATE,
  })

  submitOrder(ingredients).then(res => {
    dispatch({
      type: UPDATE_ORDER_SUCCESS,
      payload: res,
    })
    dispatch({
      type: REMOVE_CONSTRUCTOR
    })
  })
  .catch((err) => {
    dispatch({
      type: UPDATE_ORDER_FAILED,
    })
  });
};
