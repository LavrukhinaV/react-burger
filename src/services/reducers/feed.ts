import { TFeedOrder, WebsocketStatus } from '../../utils/types';
import {
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_MESSAGE,
  FEED_CONNECTION_CONNECTING
} from '../constants/ws';
import { TWSActions } from '../actions/ws';

type TFeedState = {
  wsConnected: WebsocketStatus,
  orders: TFeedOrder[]
  total?: number,
  totalToday?: number,
  error?: Event,
}

const initialState: TFeedState = {
  wsConnected: WebsocketStatus.OFFLINE,
  orders: [],
  total: 0,
  totalToday: 0
};

export const feedReduser = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    case FEED_CONNECTION_CONNECTING:
      return {
        ...state,
        wsConnected: WebsocketStatus.CONNECTING
      }
    case FEED_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: WebsocketStatus.ONLINE
      };

    case FEED_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: WebsocketStatus.OFFLINE
      };

    case FEED_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: WebsocketStatus.OFFLINE
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