import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../src/styles/styles.scss";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

declare global {
  interface Window {
    M: any;
  }
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route path="/" exact component={Content} />

        {/* <Content /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
