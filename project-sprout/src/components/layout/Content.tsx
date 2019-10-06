import React from "react";
import ComponentTreeList from "../ComponentTreeList";
import CreateProject from "../CreateProject";
import ProjectList from "../ProjectList";
import Panel from "./Panel";

const Content: React.FC = () => {
  return (
    <div id="content">
      <div className="row mb-0">
        <Panel _id="panel-left" classes="m4 s4 panel">
          <CreateProject />
          <ProjectList />
          <ComponentTreeList />
        </Panel>
        <Panel _id="panel-right" classes="m8 s8 panel">
          <h3 className="center-align">Component Tree Viewer</h3>
        </Panel>
      </div>
    </div>
  );
};

export default Content;
