import { UPDATE_ORDER_DATE, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAILED } from "../constants/order-details";
import { TOrderDetailsActions } from "../actions/order-details";
import { TOrderData } from "../../utils/types";

type TOrderInitialState = {
  orderDate: TOrderData
  orderRequestSuccess: boolean,
  orderRequestFailed: boolean,
}

const orderInitialState: TOrderInitialState = {
  orderDate: {
    name: "",
    order: {
      number: 6257
    },
    success: false
  },
  orderRequestSuccess: false,
  orderRequestFailed: false,
};

export const orderReduser = (state = orderInitialState, action: TOrderDetailsActions): TOrderInitialState => {
  switch(action.type) {
    case UPDATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequestSuccess: true,
        orderRequestFailed: false,
        orderDate: action.payload,
      }
    }

    case UPDATE_ORDER_DATE: {
      return {
        ...state,
        orderRequestSuccess: true,
        orderRequestFailed: false,
      }
    }

    case UPDATE_ORDER_FAILED: {
      return {
        ...state,
        orderRequestSuccess: false,
        orderRequestFailed: true,
      }
    }

    default: {
      return state;
    }
  }
};