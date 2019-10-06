import { Project } from "../../models/Project";
import { RootState } from "../reducers/RootReducer";
import { ActionType } from "../types/ActionType";

export const createProject = (project: Project) => async (
  dispatch: any,
  getState: any
) => {
  console.log(getState());
  const state: RootState = getState();

  if (state.global.user) {
    dispatch({ type: ActionType.FETCHING });
    // TODO:
  } else {
    dispatch({ type: ActionType.CREATE_PROJECT, payload: project.convert() });
  }
};
