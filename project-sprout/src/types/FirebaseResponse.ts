export interface FirebaseResponse {
  error?: Error;
  credentials?: firebase.auth.UserCredential;
}
