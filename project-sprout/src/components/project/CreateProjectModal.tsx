import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "validator";
import { createProject } from "../../store/actions/ProjectActions";
import { Project } from "../../types/Project";

interface CreateProjectModalProps {
  createProject: (project: Project) => any;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  createProject
}) => {
  const submit = (e: any) => {
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
      M.toast({ html: "Testing toast" });
    }
  };

  return (
    <div id="create-project-modal" className="modal">
      <div className="modal-content">
        <h4>Create Project</h4>
        <p>Enter a name and description (optional) for your project.</p>

        <form id="create-project-form" onSubmit={(e: any) => submit(e)}>
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
              <label htmlFor="project-description">Description</label>
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
          Create Project
        </button>
      </div>
    </div>
  );
};

export default connect(
  null,
  {
    createProject
  }
)(CreateProjectModal);
