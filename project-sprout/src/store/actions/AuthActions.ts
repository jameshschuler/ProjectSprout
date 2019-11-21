import { authService } from "../../service/AuthService";
import { ActionType } from "../../types/ActionType";
import { RootState } from "../reducers/RootReducer";

export const signup = (email: string, password: string) => async (
  dispatch: any,
  getState: any
) => {
  const state: RootState = getState();
  console.log(email, password);

  const response = await authService.signup(email, password);
  if (response.error) {
    console.log(response.error);
    dispatch({ type: ActionType.ERROR, payload: response });
  }

  const user = response.credentials!.user as firebase.User;

  const payload = {
    email: user!.email,
    uid: user!.uid,
    emailVerified: user!.emailVerified
  };
  dispatch({ type: ActionType.SIGNUP, payload });
};
