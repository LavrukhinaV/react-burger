import { submitOrder } from "../../utils/Api";

export const UPDATE_ORDER_DATE = "UPDATE_ORDER_DATE";

export const getOrderDate = (ingridients) => (dispatch) => {
  submitOrder(ingridients).then(res => {
    dispatch({
      type: UPDATE_ORDER_DATE,
      payload: res,
    })
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
};
