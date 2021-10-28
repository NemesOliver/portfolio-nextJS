import { Section } from "../components/styles/Section.styles";
import Flex from "../components/styles/utils/Flex.styles";
import { StyledDropdown } from "../components/styles/utils/Dropdown.styles";

const Project = ({ project, index }) => {
  return (
    <Section key={index}>
      <Flex direction="column">
        <Flex direction="column">
          <div>
            <h1 className="underline">{`${index + 1}. ${project.name}`}</h1>
            <h3 className="opacity-50">{project.type}</h3>
          </div>
          <ul>
            {project.build.map((li, index) => (
              <li key={index}>{li}</li>
            ))}
          </ul>
        </Flex>
        <div>
          <p>{project.description}</p>
          <br />
          <p>{project.extraContent}</p>
          <StyledDropdown>
            <h3>MORE</h3>
            <span>&#9660;</span>
          </StyledDropdown>
        </div>
      </Flex>
    </Section>
  );
};

export default Project;
