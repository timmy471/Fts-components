import { IUser } from 'type.d';
import { Dispatch } from 'redux';
import { AuthActionType } from '@src/redux/constants/types';
import { Action } from '@src/redux/constants/action-types';

// Register
export const Register = (data: IUser) => async (dispatch: Dispatch<Action>) => {
  if (data) {
    return dispatch({ type: AuthActionType.REGISTER_SUCCESS, payload: data });
  }
  return dispatch({ type: AuthActionType.REGISTER_FAIL, payload: 'User failed registration' });
};
