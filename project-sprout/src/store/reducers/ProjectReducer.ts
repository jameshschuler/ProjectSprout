import { Project } from "../../types/Project";
import { ActionType } from "../../types/ActionType";
import { Action, ProjectState } from "./RootReducer";

const initialState: ProjectState = {
  projects: []
};

const projectReducer = (state: ProjectState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload] as Project[]
      };
    case ActionType.UPDATE_PROJECT:
      return {
        ...state,
        projects: [...action.payload] as Project[]
      };
    case ActionType.DELETE_PROJECT:
      return {
        ...state,
        projects: [...action.payload] as Project[]
      };
    case ActionType.LOAD_PROJECT_DATA:
      return {
        ...state,
        projects: [...state.projects, ...action.payload] as Project[]
      };
    default:
      return state;
  }
};

export default projectReducer;
