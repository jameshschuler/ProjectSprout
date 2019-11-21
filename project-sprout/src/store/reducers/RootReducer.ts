import { combineReducers } from "redux";
import { ActionType } from "../../types/ActionType";
import { FirebaseResponse } from "../../types/FirebaseResponse";
import { Project } from "../../types/Project";
import authReducer from "./AuthReducer";
import globalReducer from "./GlobalReducer";
import projectReducer from "./ProjectReducer";

export interface Action {
  type: ActionType;
  payload: any;
}

export interface RootState {
  project: ProjectState;
  global: GlobalState;
  auth: AuthState;
}

export interface ProjectState {
  projects: Project[];
}

export interface GlobalState {
  fetching: boolean;
  response?: FirebaseResponse;
}

export interface AuthState {
  user: any;
}

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  global: globalReducer
});

export default rootReducer;
