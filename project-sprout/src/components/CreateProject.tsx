import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "validator";
import { Project } from "../models/Project";
import { createProject } from "../store/actions/ProjectActions";
import { RootState } from "../store/reducers/RootReducer";
import Tooltip from "./helpers/Tooltip";

interface CreateProjectProps {
  createProject: (project: Project) => any;
  user: boolean;
}

const CreateProject: React.FC<CreateProjectProps> = ({
  createProject,
  user
}) => {
  const saveProject = (e: any) => {
    e.preventDefault();

    const createProjectForm: HTMLFormElement | null = document.querySelector(
      "#create-project #create-project-form"
    );

    const projectName = createProjectForm!.projectName.value;
    const projectDescription = createProjectForm!.projectDescription.value;

    if (!isEmpty(projectName)) {
      const project: Project = {
        name: projectName,
        description: projectDescription
      };
      createProject(project);
      createProjectForm!.reset();

      M.Modal.getInstance(
        document.getElementById("create-project-modal")!
      ).close();
    }
  };

  return (
    <div id="create-project">
      <button
        id="load-create-project-modal-btn"
        className="btn modal-trigger btn-floating waves-effect waves-light btn-small white"
        data-target="create-project-modal"
      >
        <i className="fas fa-plus black-text"></i>
      </button>
      <div id="create-project-modal" className="modal">
        <div className="modal-content">
          <h4>
            Create Project
            <Tooltip
              tooltipClasses="margin-left-xs"
              tooltipPosition="right"
              tooltipText="Project won't be saved permanently unless signed in."
              iconClass="fas fa-xs fa-exclamation-circle red-text"
              visible={!user}
            />
          </h4>
          <p>A bunch of text</p>

          <form id="create-project-form" onSubmit={(e: any) => saveProject(e)}>
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="project-name"
                  name="projectName"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="project-name">Name</label>
                <span
                  className="helper-text"
                  data-error="Name is required."
                ></span>
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
            form="create-project-form"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    user: !!state.global.user
  };
};

export default connect(
  mapStateToProps,
  {
    createProject
  }
)(CreateProject);
