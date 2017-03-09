import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';

export const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )
);
