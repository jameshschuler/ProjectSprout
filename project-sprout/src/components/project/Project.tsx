import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Project } from "../../models/Project";
import { deleteProject } from "../../store/actions/ProjectActions";
import Tooltip from "../helpers/Tooltip";
import EditProject from "./EditProject";

interface ProjectProps {
  project: Project;
  deleteProject: (id: string) => any;
}

const ProjectComponent: React.FC<ProjectProps> = ({
  project,
  deleteProject
}) => {
  const [projectId, setProjectId] = useState<string | undefined>(undefined);

  const removeProject = (id: string) => {
    deleteProject(id);
  };

  useEffect(() => {
    M.Modal.init(document.getElementById("edit-project-modal")!);
  }, []);

  const showModal = () => {
    setProjectId("test");
    M.Modal.getInstance(document.getElementById("edit-project-modal")!).open();
  };

  return (
    <>
      <li className="collection-item">
        <div className="project-content">
          <div className="project-title">
            {project.isLocalOnly && (
              <Tooltip
                iconClass="fas fa-fw fa-exclamation-circle"
                tooltipText="Project is only saved locally"
                tooltipClasses="title"
              />
            )}
            {project.name}
          </div>
          <div className="project-actions">
            <i
              className="fas fa-pencil-alt fa-fw edit-item action"
              onClick={() => showModal()}
            ></i>
            <i
              className="fas fa-trash-alt fa-fw remove-item action"
              onClick={() => removeProject(project.id!)}
            ></i>
          </div>
        </div>
        <EditProject projectId={projectId} />
      </li>
    </>
  );
};

export default connect(
  null,
  {
    deleteProject
  }
)(ProjectComponent);
