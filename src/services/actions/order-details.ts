import { submitOrder } from "../../utils/Api";
import { REMOVE_CONSTRUCTOR } from "../constants/burger-constructor";
import { TIngredientData } from "../../utils/types";
import { AppDispatch, AppThunkAction } from "../types/types"
import { TOrderData } from "../../utils/types";

import {
  UPDATE_ORDER_DATE,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILED
} from "../constants/order-details";

export interface IUpdateOrderDate {
  readonly type: typeof UPDATE_ORDER_DATE;
};

export interface IUpdateOrderSuccess {
  payload: TOrderData;
  readonly type: typeof UPDATE_ORDER_SUCCESS;
};

export interface IUpdateOrderFailed {
  readonly type: typeof UPDATE_ORDER_FAILED;
};

export type TOrderDetailsActions = 
  | IUpdateOrderDate
  | IUpdateOrderSuccess
  | IUpdateOrderFailed

export const getOrderDate = (ingredients: Array<TIngredientData>): AppThunkAction => (dispatch: AppDispatch) => {
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
