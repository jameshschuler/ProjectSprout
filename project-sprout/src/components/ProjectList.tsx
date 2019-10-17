import React from "react";
import { connect } from "react-redux";
import { Project } from "../models/Project";
import { deleteProject } from "../store/actions/ProjectActions";
import { RootState } from "../store/reducers/RootReducer";

interface ProjectListProps {
  projects: Project[];
  deleteProject: (id: string) => any;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  deleteProject
}) => {
  const removeProject = (id: string) => {
    deleteProject(id);
  };

  const displayProjectInformation = (project: Project) => {
    console.log(project);
    // TODO: load popup or modal
  };

  return (
    <div id="project-list">
      <h4>Projects</h4>
      {projects &&
        (projects.length > 0 ? (
          <ul className="collection">
            {projects.map((project: Project, index: number) => {
              return (
                <li key={index} className="collection-item">
                  {project.name}
                  <div className="actions">
                    <i
                      className="fas fa-info-circle fa-fw more-info"
                      onClick={() => displayProjectInformation(project)}
                    ></i>
                    <i
                      className="fas fa-times fa-fw remove-item"
                      onClick={() => removeProject(project.id!)}
                    ></i>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>Get started by creating your first project!</div>
        ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    projects: state.project.projects as Project[]
  };
};

export default connect(
  mapStateToProps,
  { deleteProject }
)(ProjectList);
