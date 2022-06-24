import auth from '@src/redux/reducers/auth';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  auth,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
