import { TFeedOrders } from "../../utils/types";
import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_ERROR,
  FEED_CONNECTION_CLOSED,
  FEED_GET_MESSAGE } from "../constants/ws"

export interface IWSConnectionStart {
  readonly type: typeof FEED_CONNECTION_INIT;
}

export interface IWSConnectionSuccessAction {
  readonly type: typeof FEED_CONNECTION_SUCCESS;
}

export interface IWSConnectionErrorAction {
  readonly type: typeof FEED_CONNECTION_ERROR;
  readonly payload: Event;
}

export interface IWSConnectionClosedAction {
  readonly type: typeof FEED_CONNECTION_CLOSED;
}

export interface IWSGetMessageAction {
  readonly type: typeof FEED_GET_MESSAGE;
  readonly payload: TFeedOrders;
}

export type TWSActions =
  | IWSConnectionStart
  | IWSConnectionSuccessAction
  | IWSConnectionErrorAction
  | IWSConnectionClosedAction
  | IWSGetMessageAction