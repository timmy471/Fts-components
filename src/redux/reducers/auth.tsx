import { Action } from '@src/redux/constants/action-types';
import { AuthActionType, IAuthInitialState } from '@src/redux/constants/types';

const initialState = {
  user: {},
  isAuthenticated: false,
  token: '',
  error: null,
  loading: false,
};

const auth = (state: IAuthInitialState = initialState, action: Action) => {
  switch (action.type) {
    case AuthActionType.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case AuthActionType.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
