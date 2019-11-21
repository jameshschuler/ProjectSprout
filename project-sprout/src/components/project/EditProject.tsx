import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "validator";
import { updateProject } from "../../store/actions/ProjectActions";
import { RootState } from "../../store/reducers/RootReducer";
import { Project } from "../../types/Project";
import Tooltip from "../helpers/Tooltip";

interface EditProjectProps {
  projectId?: string | undefined;
  user: boolean;
  updateProject: (project: Project) => any;
}

const EditProject: React.FC<EditProjectProps> = ({
  projectId,
  user,
  updateProject
}) => {
  const [project, setProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    console.log(projectId);
  }, [projectId]);

  const saveProject = (e: any) => {
    e.preventDefault();

    const editProjectForm: HTMLFormElement | null = document.querySelector(
      "#edit-project-form"
    );

    const projectName = editProjectForm!.projectName.value;
    const projectDescription = editProjectForm!.projectDescription.value;

    if (!isEmpty(projectName)) {
      const project: Project = {
        name: projectName,
        description: projectDescription
      };
      updateProject(project);
      M.Modal.getInstance(
        document.getElementById("edit-project-modal")!
      ).close();
    }
  };

  return (
    <div id="edit-project-modal" className="modal">
      <div className="modal-content">
        <h4>
          Edit Project
          <Tooltip
            tooltipClasses="margin-left-xs"
            tooltipPosition="right"
            tooltipText="Project won't be saved permanently unless signed in."
            iconClass="fas fa-xs fa-exclamation-circle red-text"
            visible={!user}
          />
        </h4>
        <p>A bunch of text</p>

        <form id="edit-project-form" onSubmit={(e: any) => saveProject(e)}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="project-name"
                name="projectName"
                type="text"
                defaultValue={project && project.name}
                className="validate"
                required
              />
              <label htmlFor="project-name" className={project && "active"}>
                Name
              </label>
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
                defaultValue={project && project.description}
                className="materialize-textarea"
              ></textarea>
              <label
                htmlFor="project-description"
                className={project && "active"}
              >
                Description
              </label>
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
          form="edit-project-form"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    user: !!state.auth.user
  };
};

export default connect(
  mapStateToProps,
  {
    updateProject
  }
)(EditProject);
