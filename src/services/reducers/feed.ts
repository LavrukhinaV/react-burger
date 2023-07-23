import { TFeedOrder } from '../../utils/types';
import {
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_MESSAGE
} from '../constants/ws';
import { TWSActions } from '../actions/ws';

type TFeedState = {
  wsConnected: boolean,
  orders?: TFeedOrder[]
  total?: number,
  totalToday?: number,
  error?: Event,
}

const initialState: TFeedState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0
};

// Создадим редьюсер для WebSocket
export const feedReduser = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      };


    case FEED_GET_MESSAGE:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};