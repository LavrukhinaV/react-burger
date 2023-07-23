// socketMiddleware.ts
import type { Middleware, MiddlewareAPI } from 'redux';

import type { AppDispatch, RootState } from '../types/types';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_CLOSED, FEED_CONNECTION_ERROR, FEED_CONNECTION_INIT, FEED_CONNECTION_SUCCESS, FEED_GET_MESSAGE } from '../constants/ws';

type TFeedWSActions = {
  wsInit: typeof FEED_CONNECTION_INIT,
  wsClose: typeof FEED_CONNECTION_CLOSE,
  onOpen: typeof FEED_CONNECTION_SUCCESS,
  onClose: typeof FEED_CONNECTION_CLOSED,
  onError: typeof FEED_CONNECTION_ERROR,
  onMessage: typeof FEED_GET_MESSAGE,
}

export const socketMiddleware = (wsActions: TFeedWSActions): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const {
        wsInit,
        wsClose,
        // wsSendMessage,
        onOpen,
        onClose,
        onError,
        onMessage
      } = wsActions
      if (type === wsInit) {
        socket = new WebSocket(payload);
      }
      if (socket) {
                // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };
                // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

                // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data)
          dispatch({ type: onMessage, payload: parsedData });
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

      }

      if (wsClose && type === wsClose && socket) {
          socket.close()
      }
      next(action);
    };
    }) as Middleware;
};