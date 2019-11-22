import firebase from "firebase";
import { Error } from "../types/Error";
import { FirebaseResponse } from "../types/FirebaseResponse";

const signup = async (
  email: string,
  password: string
): Promise<FirebaseResponse> => {
  const auth = firebase.auth();

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    return {
      credentials: cred
    };
  } catch (err) {
    return {
      error: err as Error
    };
  }
};

const signout = async (): Promise<boolean> => {
  try {
    await firebase.auth().signOut();
    return true;
  } catch (err) {
    return false;
  }
};

export const authService = {
  signup,
  signout
};
