import Error from "../types/Error";

export interface FirebaseResponse {
  error?: Error;
  credentials?: firebase.auth.UserCredential;
}
