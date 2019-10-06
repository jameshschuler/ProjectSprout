import { Project } from "../../models/Project";
import { ActionType } from "../types/ActionType";
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
    default:
      return state;
  }
};

export default projectReducer;
