import { Account } from "../../types/Account";
import { Project } from "../../types/Project";
import { RootState } from "../reducers/RootReducer";
import { ActionType } from "../../types/ActionType";
const uuidv1 = require("uuid/v1");

export const loadProjectData = () => async (dispatch: any, getState: any) => {
  const state: RootState = getState();

  let projects: Project[] = [];

  // if (state.global.user) {
  //   dispatch({ type: ActionType.FETCHING });
  //   // TODO: load from firestore
  // } else {
  //   let data = localStorage.getItem("account");
  //   if (!data) {
  //     let newAccount: Account = { isLocalOnly: true, projects: [] };
  //     localStorage.setItem("account", JSON.stringify(newAccount));
  //     data = localStorage.getItem("account");
  //   }

  //   let account: Account = JSON.parse(data!);
  //   if (account && account.projects) {
  //     projects = account.projects;
  //   }

  //   dispatch({ type: ActionType.LOAD_PROJECT_DATA, payload: projects });
  }

export const createProject = (project: Project) => async (
  dispatch: any,
  getState: any
) => {
  const state: RootState = getState();

  // if (state.global.user) {
  //   dispatch({ type: ActionType.FETCHING });
  //   // TODO: add to firestore
  // } else {
  //   let account = JSON.parse(localStorage.getItem("account")!) as Account;
  //   project.id = uuidv1();
  //   project.isLocalOnly = true;

  //   account.projects.push(project);

  //   localStorage.setItem("account", JSON.stringify(account));

  //   dispatch({ type: ActionType.CREATE_PROJECT, payload: project });
  // }
};

/**
 *
 * @param id
 */
export const deleteProject = (id: string) => async (
  dispatch: any,
  getState: any
) => {
  const state: RootState = getState();

  // if (state.global.user) {
  //   dispatch({ type: ActionType.FETCHING });
  //   // TODO: add to firestore
  // } else {
  //   let account = JSON.parse(localStorage.getItem("account")!) as Account;

  //   let projects = account.projects.filter(project => project.id !== id);
  //   account.projects = projects;
  //   localStorage.setItem("account", JSON.stringify(account));

  //   dispatch({ type: ActionType.DELETE_PROJECT, payload: projects });
  // }
};

/**
 *
 * @param project
 */
export const updateProject = (project: Project) => async (
  dispatch: any,
  getState: any
) => {
  const state: RootState = getState();

  // if (state.global.user) {
  //   dispatch({ type: ActionType.FETCHING });
  //   // TODO: add to firestore
  // } else {
  //   let account = JSON.parse(localStorage.getItem("account")!) as Account;

  //   let existingProject = account.projects.filter(
  //     existingProject => existingProject.id !== project.id!
  //   )[0];
  //   if (existingProject) {
  //     console.log(existingProject);

  //     existingProject.name = project.name;
  //     existingProject.description = project.description;

  //     console.log(existingProject);
  //     console.log(account.projects);

  //     localStorage.setItem("account", JSON.stringify(account));

  //     dispatch({ type: ActionType.UPDATE_PROJECT, payload: account.projects });
  //   } else {
  //     // TODO: show error message
  //   }
};
