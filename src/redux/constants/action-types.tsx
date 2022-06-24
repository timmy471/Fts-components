import { IUser } from 'type.d';
import { AuthActionType } from '@src/redux/constants/types';

interface RegisterSuccessAction {
  type: AuthActionType.REGISTER_SUCCESS;
  payload: IUser;
}

interface LoginSuccessAction {
  type: AuthActionType.LOGIN_SUCCESS;
}

interface RegisterFailAction {
  type: AuthActionType.REGISTER_FAIL;
  payload: string;
}

export type Action = RegisterSuccessAction | LoginSuccessAction | RegisterFailAction;
