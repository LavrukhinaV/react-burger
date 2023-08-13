import { orderReduser, orderInitialState } from './order-details'
import { UPDATE_ORDER_DATE, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_FAILED } from "../constants/order-details";

const orderDate = {
  name: "name",
  order: {
    number: 1
  },
  success: true
}

describe('order reduser', () => {
  it('should return the initial state', () => {
    expect(orderReduser(undefined, {})).toEqual(orderInitialState)
  })

  it('should hadle UPDATE_ORDER_SUCCESS', () => {
    expect(
      orderReduser(orderInitialState, {
        type: UPDATE_ORDER_SUCCESS,
        payload: orderDate
      })
    ).toEqual(
      {
        orderDate: orderDate,
        orderRequestSuccess: true,
        orderRequestFailed: false,
      }
    )
  })

  it('should hadle UPDATE_ORDER_DATE', () => {
    expect(
      orderReduser(orderInitialState, {
        type: UPDATE_ORDER_DATE,
      })
    ).toEqual(
      {
        orderDate: {
          name: "",
          order: {
            number: null
          },
          success: false
        },
        orderRequestSuccess: true,
        orderRequestFailed: false,
      }
    )
  })

  it('should hadle UPDATE_ORDER_FAILED', () => {
    expect(
      orderReduser(orderInitialState, {
        type: UPDATE_ORDER_FAILED,
      })
    ).toEqual(
      {
        orderDate: {
          name: "",
          order: {
            number: null
          },
          success: false
        },
        orderRequestSuccess: false,
        orderRequestFailed: true,
      }
    )
  })
})