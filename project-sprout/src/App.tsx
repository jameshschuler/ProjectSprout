import firebase from "firebase";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { loginLocally, signout } from "../src/store/actions/AuthActions";
import { loadProjectData } from "../src/store/actions/ProjectActions";
import Signin from "./components/account/Signin";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { firebaseConfig } from "./config/Firebase";
import { RootState } from "./store/reducers/RootReducer";
import "./styles/styles.scss";
import { User } from "./types/User";

declare global {
  interface Window {
    M: any;
  }
}

interface AppProps {
  loadProjectData: () => any;
  loginLocally: (payload: User | null) => any;
  isAuthenticated?: boolean;
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
    console.log(isAuthenticated);
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      let payload: User | null = null;
      if (user) {
        const { email, emailVerified, uid } = user;
        payload = {
          email,
          emailVerified,
          uid
        };
      }

      loginLocally(payload);
    });

    loadProjectData();
  }, []);

  return (
    <Router>
      {isAuthenticated !== undefined && (
        <div className="App">
          <Navbar isAuthenticated={isAuthenticated} />
          {isAuthenticated ? (
            <Route exact path="/" component={Dashboard} />
          ) : (
            <>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={Signin} />
            </>
          )}
        </div>
      )}
    </Router>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.auth.isAuthenicated
  };
};

export default connect(mapStateToProps, {
  loadProjectData,
  loginLocally,
  signout
})(App);
