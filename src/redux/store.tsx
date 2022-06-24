import thunk from 'redux-thunk';
import rootReducer from '@src/redux/reducers';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [thunk];
const initialState = {};
const makeStore = () =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(compose(applyMiddleware(...middleware)))
  );

export const store = createWrapper(makeStore);
