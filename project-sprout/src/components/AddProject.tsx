import React, { useContext } from "react";
import { isEmpty } from "validator";
import { ContextProps } from "../models/ContextProps";
import { Context } from "../store/contexts/Context";
import Tooltip from "./helpers/Tooltip";

const AddProject = () => {
  const { user } = useContext(Context) as ContextProps;

  const saveProject = (e: any) => {
    e.preventDefault();

    const addProjectForm: HTMLFormElement | null = document.querySelector(
      "#add-project #add-project-form"
    );

    const projectName = addProjectForm!.projectName.value;
    const projectDescription = addProjectForm!.projectDescription.value;
    console.log(projectName, projectDescription);

    if (isEmpty(projectName)) {
      console.log("error");
    } else {
      console.log("calling action to save");
      // TODO:
      // wait for response
      // show result modal: success or error message
      // close modal
      M.Modal.getInstance(
        document.getElementById("add-project-modal")!
      ).close();
    }

    // TODO: call action
  };

  return (
    <div id="add-project">
      <button
        id="add-component-btn"
        className="btn modal-trigger btn-floating waves-effect waves-light btn-small white"
        data-target="add-project-modal"
      >
        <i className="fas fa-plus black-text"></i>
      </button>
      <div id="add-project-modal" className="modal">
        <div className="modal-content">
          <h4>
            Add Project
            <Tooltip
              tooltipClasses="margin-left-xs"
              tooltipPosition="right"
              tooltipText="Project won't be saved permanently unless signed in."
              iconClass="fas fa-xs fa-exclamation-circle red-text"
              visible={!user}
            />
          </h4>
          <p>A bunch of text</p>

          <form id="add-project-form" onSubmit={(e: any) => saveProject(e)}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="project-name"
                  name="projectName"
                  type="text"
                  className="validate"
                />
                <label htmlFor="project-name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="project-description"
                  name="projectDescription"
                  className="materialize-textarea"
                ></textarea>
                <label htmlFor="textarea1">Description</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-red btn-flat">
            Cancel
          </button>
          <button
            className="waves-effect waves-green btn-flat"
            form="add-project-form"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
