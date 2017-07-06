import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import io from 'socket.io-client';

import reducers from './reducers';
import { setBoard, setTurnRemote } from './actions';
import { loadState } from './localStorage';

const socket = io(`:8000`, { transports: ['websocket'] });
const createStoreWithMiddleware = applyMiddleware(ReduxThunk.withExtraArgument(socket))(createStore);
const savedState = loadState();
export const store = createStoreWithMiddleware(reducers, savedState, window.devToolsExtension ? window.devToolsExtension() : f => f);

socket.on('connect', () => {
  console.log('ws connected!');
});

socket.on('state', state => {
  console.log('state from ws', state);
  store.dispatch(setBoard(state.board));
  store.dispatch(setTurnRemote(state.turn));
});

socket.on('action', action => {
  console.log(action);
  store.dispatch(action);
});
