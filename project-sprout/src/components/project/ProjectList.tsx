import React from "react";
import { connect } from "react-redux";
import { Project } from "../../models/Project";
import { deleteProject } from "../../store/actions/ProjectActions";
import { RootState } from "../../store/reducers/RootReducer";
import ProjectComponent from "./Project";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      <div id="project-list">
        <h4>Projects</h4>
        {projects &&
          (projects.length > 0 ? (
            <ul className="collection">
              {projects.map((project: Project, index: number) => {
                return <ProjectComponent key={index} project={project} />;
              })}
            </ul>
          ) : (
            <div>Get started by creating your first project!</div>
          ))}
      </div>
    </>
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
