import { ActionType } from "../../types/ActionType";
import { Action, AuthState } from "./RootReducer";

const initialState: AuthState = {
  user: null,
  isAuthenicated: undefined
};

const authReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP:
      return {
        ...state,
        isAuthenicated: !!action.payload,
        user: action.payload
      };
    case ActionType.LOGIN:
      return {
        ...state,
        isAuthenicated: !!action.payload,
        user: action.payload
      };
    case ActionType.SIGNOUT:
      return {
        ...state,
        isAuthenicated: undefined,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
