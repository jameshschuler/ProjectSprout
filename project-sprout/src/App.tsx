import firebase from "firebase";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { loginLocally, signout } from "../src/store/actions/AuthActions";
import { loadProjectData } from "../src/store/actions/ProjectActions";
import "../src/styles/styles.scss";
import LoginModal from "./components/account/LoginModal";
import SignUpModal from "./components/account/SignUpModal";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { firebaseConfig } from "./config/Firebase";
import { RootState } from "./store/reducers/RootReducer";
import { User } from "./types/User";

declare global {
  interface Window {
    M: any;
  }
}

interface AppProps {
  loadProjectData: () => any;
  loginLocally: (payload: User) => any;
  isAuthenticated: boolean;
  signout: () => any;
}

const App: React.FC<AppProps> = ({
  isAuthenticated,
  loadProjectData,
  loginLocally,
  signout
}) => {
  useEffect(() => {
    // Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      if (user) {
        const { email, emailVerified, uid } = user;
        const payload: User = {
          email,
          emailVerified,
          uid
        };

        loginLocally(payload);
      }
    });

    loadProjectData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} signout={signout} />
        <Content isAuthenticated={isAuthenticated} />
        <Footer />
        <SignUpModal />
        <LoginModal />
      </div>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: !!state.auth.user
  };
};

export default connect(mapStateToProps, {
  loadProjectData,
  loginLocally,
  signout
})(App);
