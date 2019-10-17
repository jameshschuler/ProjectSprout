import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/styles/styles.scss";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { loadProjectData } from "./store/actions/ProjectActions";

declare global {
  interface Window {
    M: any;
  }
}

interface AppProps {
  loadProjectData: () => any;
}

const App: React.FC<AppProps> = ({ loadProjectData }) => {
  useEffect(() => {
    loadProjectData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Content} />
        <Footer />
      </div>
    </Router>
  );
};

export default connect(
  null,
  {
    loadProjectData
  }
)(App);
