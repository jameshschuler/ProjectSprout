import { authService } from "../../service/AuthService";
import { ActionType } from "../../types/ActionType";
import { User } from "../../types/User";
import { RootState } from "../reducers/RootReducer";

export const signup = (email: string, password: string) => async (
  dispatch: any,
  getState: any
) => {
  const state: RootState = getState();

  const response = await authService.signup(email, password);
  if (response.error) {
    dispatch({ type: ActionType.ERROR, payload: response });
    return;
  }

  const user = response.credentials!.user as firebase.User;

  const payload = {
    email: user!.email,
    uid: user!.uid,
    emailVerified: user!.emailVerified
  };
  dispatch({ type: ActionType.SIGNUP, payload });
};

/**
 * We already have a logged in user but just need to update our redux state
 * @param payload
 */
export const loginLocally = (payload: User) => (dispatch: any) => {
  dispatch({ type: ActionType.LOGIN, payload });
};

/**
 * Send request to firebase to login user
 * @param email
 * @param password
 */
export const login = (email: string, password: string) => async (
  dispatch: any
) => {
  const response = await authService.login(email, password);

  if (response.error) {
    dispatch({ type: ActionType.ERROR, payload: response });
    return;
  }

  const user = response.credentials!.user as firebase.User;

  const payload = {
    email: user!.email,
    uid: user!.uid,
    emailVerified: user!.emailVerified
  };

  dispatch({ type: ActionType.LOGIN, payload });
};

export const signout = () => async (dispatch: any) => {
  const result: boolean = await authService.signout();
  if (result) {
    dispatch({ type: ActionType.SIGNOUT });
  }
};
