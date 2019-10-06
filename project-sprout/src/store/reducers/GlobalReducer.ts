import { ActionType } from "../types/ActionType";
import { Action, GlobalState } from "./RootReducer";

const initialState: GlobalState = {
  fetching: false,
  message: null,
  user: null
};

const globalReducer = (state: GlobalState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCHING:
      return {
        ...state,
        fetching: true
      };
    case ActionType.SUCCESS:
      return {
        ...state,
        fetching: false
      };
    case ActionType.ERROR:
      return {
        ...state,
        fetching: false
      };
    default:
      return state;
  }
};

export default globalReducer;
