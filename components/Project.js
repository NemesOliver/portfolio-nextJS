import { Section } from "../components/styles/Section.styles";
import Flex from "../components/styles/utils/Flex.styles";
import { StyledDropdown } from "../components/styles/utils/Dropdown.styles";
import styled from "styled-components";

const Project = ({ project, index }) => {
  return (
    <Section fullPage="100vh" key={index}>
      <StyledProjectsPage>
        <Flex direction="column">
          <Flex direction="column">
            <div>
              <h1 className="underline-10">{`${index + 1}. ${
                project.name
              }`}</h1>
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
      </StyledProjectsPage>
    </Section>
  );
};

const StyledProjectsPage = styled.div`
  h1,
  p {
    margin-bottom: 2rem;
  }

  ul {
    margin: 2rem 0;
  }
`;

export default Project;
