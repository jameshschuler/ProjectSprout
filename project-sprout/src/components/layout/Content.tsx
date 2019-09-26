import React from "react";
import ComponentTreeList from "../ComponentTreeList";
import Panel from "./Panel";

const Content: React.FC = () => {
  return (
    <div id="content">
      <div className="row mb-0">
        <Panel _id="panel-left" classes="m4 s4 panel">
          <a
            id="add-component-btn"
            className="btn-floating waves-effect waves-light btn-small white"
            onClick={() => console.log("Add Component")}
          >
            <i className="fas fa-plus black-text"></i>
          </a>

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
