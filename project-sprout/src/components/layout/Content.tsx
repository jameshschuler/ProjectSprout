import React from "react";
import ComponentTreeList from "../ComponentTreeList";
import CreateProjectModal from "../project/CreateProjectModal";
import ProjectList from "../project/ProjectList";
import Panel from "./Panel";

interface ContentProps {
  isAuthenticated: boolean;
}

const Content: React.FC<ContentProps> = ({ isAuthenticated }) => {
  return (
    <div id="content">
      {isAuthenticated ? (
        <div className="row mb-0">
          <Panel _id="panel-left" classes="m4 s4 panel">
            <button
              id="load-create-project-modal-btn"
              className="btn modal-trigger btn-floating waves-effect waves-light light-green"
              data-target="create-project-modal"
            >
              <i className="fas fa-plus white-text"></i>
            </button>
            <CreateProjectModal />
            <ProjectList />
            <ComponentTreeList />
          </Panel>
          <Panel _id="panel-right" classes="m8 s8 panel">
            <h3 className="center-align">Component Tree Viewer</h3>
          </Panel>
        </div>
      ) : (
        <div className="center-align">
          <h3>Welcome to Sprout!</h3>
          <h3>Log in or sign up to get started!</h3>
        </div>
      )}
    </div>
  );
};

export default Content;
