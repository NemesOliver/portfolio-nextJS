import { StyledSection } from "../components/styles/Project.styles";

const Project = ({ project, index }) => {
  return (
    <StyledSection key={index}>
      <div className="content-wrapper">
        <div className="info">
          <div>
            <h1>{`${index + 1}. ${project.name}`}</h1>
            <h3>{project.type}</h3>
          </div>
          <ul>
            {project.build.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
        <div className="description">
          <p>{project.description}</p>
          <br />
          <p>{project.extraContent}</p>
          <div className="dropdown-wrapper">
            <h3>MORE</h3>
            <span>&#9660;</span>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Project;
