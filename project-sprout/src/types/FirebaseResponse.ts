import { Error } from "./Error";

export type FirebaseResponse = {
  error?: Error;
  credentials?: firebase.auth.UserCredential;
};
