import {
  UPDATE_ORDER_DATE,
  UPDATE_ORDER_SUCCESS,
  UPDATE_ORDER_FAILED
} from "../actions/order-details";

const orderInitialState = {
  orderDate: {},
  orderRequestSuccess: false,
  orderRequestFailed: false,
};

export const orderReduser = (state = orderInitialState, action) => {
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