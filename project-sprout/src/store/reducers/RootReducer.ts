import { combineReducers } from "redux";
import { Project } from "../../models/Project";
import { ActionType } from "../types/ActionType";
import globalReducer from "./GlobalReducer";
import projectReducer from "./ProjectReducer";

export interface Action {
  type: ActionType;
  payload: any;
}

export interface RootState {
  project: ProjectState;
  global: GlobalState;
}

export interface ProjectState {
  projects: Project[];
}

export interface GlobalState {
  fetching: boolean;
  message: any;
  user: any;
}

const rootReducer = combineReducers({
  project: projectReducer,
  global: globalReducer
});

export default rootReducer;
