import { ActionType } from "../../types/ActionType";
import { Action, AuthState } from "./RootReducer";

const initialState: AuthState = {
  user: null
};

const authReducer = (state: AuthState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGNUP:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
