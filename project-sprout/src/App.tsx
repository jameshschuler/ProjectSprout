import firebase from "firebase";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { loadProjectData } from "../src/store/actions/ProjectActions";
import "../src/styles/styles.scss";
import LoginModal from "./components/account/LoginModal";
import SignUpModal from "./components/account/SignUpModal";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { firebaseConfig } from "./config/Firebase";
import { RootState } from "./store/reducers/RootReducer";

declare global {
  interface Window {
    M: any;
  }
}

interface AppProps {
  loadProjectData: () => any;
  isAuthenticated: boolean;
}

const App: React.FC<AppProps> = ({ isAuthenticated, loadProjectData }) => {
  useEffect(() => {
    // Firebase
    firebase.initializeApp(firebaseConfig);

    loadProjectData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />
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

export default connect(
  mapStateToProps,
  {
    loadProjectData
  }
)(App);
