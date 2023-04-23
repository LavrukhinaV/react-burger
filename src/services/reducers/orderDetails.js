import {
  UPDATE_ORDER_DATE,
} from "../actions/orderDetails";

const orderInitialState = {
  orderDate: {},
  // orderDateRequest: false,
};

export const orderReduser = (state = orderInitialState, action) => {
  switch(action.type) {
    case UPDATE_ORDER_DATE: {
      return {
        ...state,
        orderDate: action.payload,
      }
    }

    default:
      return state;
  }
}