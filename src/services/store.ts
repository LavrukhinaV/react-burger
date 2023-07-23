import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers";
import thunk from 'redux-thunk';
import { socketMiddleware } from './middleware/socketMiddleware';
import { FEED_CONNECTION_CLOSE, FEED_CONNECTION_CLOSED, FEED_CONNECTION_ERROR, FEED_CONNECTION_INIT, FEED_CONNECTION_SUCCESS, FEED_GET_MESSAGE } from './constants/ws';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
};

const feedWSActions = {
  wsInit: FEED_CONNECTION_INIT,
  wsClose: FEED_CONNECTION_CLOSE,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_MESSAGE,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(feedWSActions)));

export const store = createStore(
  rootReducer,
  enhancer,
);