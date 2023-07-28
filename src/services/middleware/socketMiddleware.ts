import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../types/types';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_CLOSED, FEED_CONNECTION_ERROR, FEED_CONNECTION_INIT, FEED_CONNECTION_SUCCESS, FEED_GET_MESSAGE, FEED_CONNECTION_CONNECTING } from '../constants/ws';

type TFeedWSActions = {
  wsInit: typeof FEED_CONNECTION_INIT,
  wsClose: typeof FEED_CONNECTION_CLOSE,
  wsConnecting: typeof FEED_CONNECTION_CONNECTING,
  onOpen: typeof FEED_CONNECTION_SUCCESS,
  onClose: typeof FEED_CONNECTION_CLOSED,
  onError: typeof FEED_CONNECTION_ERROR,
  onMessage: typeof FEED_GET_MESSAGE,
}

export const socketMiddleware = (wsActions: TFeedWSActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;
        let isConnected: boolean = false;
        let reconnectTimer: number = 0;
        let url: string = "";

    return next => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsClose,
        wsConnecting,
        onOpen,
        onClose,
        onError,
        onMessage
      } = wsActions
      if (type === wsInit) {
        url = payload
        socket = new WebSocket(url);
        isConnected = true;
        dispatch({ type: wsConnecting })
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data)
          dispatch({ type: onMessage, payload: parsedData });
        };
        socket.onclose = event => {
          if (event.code !== 100) {
            dispatch({ type: onError, payload: event });
          }
          dispatch({ type: onClose, payload: event });

          if (isConnected) {
            dispatch({ type: wsConnecting })
            reconnectTimer = window.setTimeout(() => {
              dispatch({ type: onOpen, payload: event });
            }, 3000)
          }
        };
      }

      if (wsClose && type === wsClose && socket) {
        clearTimeout(reconnectTimer)
        isConnected = false;
        socket.close();
      }
      next(action);
    };
    }) as Middleware;
};