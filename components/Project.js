import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Section } from "../components/styles/Section.styles";
import Flex from "../components/styles/utils/Flex.styles";
import { StyledDropdown } from "../components/styles/utils/Dropdown.styles";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: "-25px",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: "-25px",
    transition: {
      duration: 0.5,
    },
  },
};

const Project = ({ project, index }) => {
  const {
    links: { source, live },
  } = project;
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  return (
    <Section fullPage="90vh" key={index}>
      <StyledProjectsPage>
        <Flex direction="column" switch="row" align="flex-start">
          <Flex direction="column" align="flex-start" lgAlign="flex-start">
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
          <Flex
            direction="column"
            align="flex-end"
            width="70%"
            lgAlign="flex-end"
          >
            <p>{project.description}</p>
            <br />
            <p>{project.extraContent}</p>
            <StyledDropdown>
              <div>
                <Flex>
                  <div
                    className="dropdown-button"
                    onClick={() => toggleDropdown()}
                  >
                    <h3>MORE</h3>
                    {open ? <span>&#9650;</span> : <span>&#9660;</span>}
                  </div>
                </Flex>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="options-wrapper"
                    >
                      {source && (
                        <a
                          href={source}
                          target="_blank"
                          rel="noreferrer"
                          onClick={closeDropdown}
                        >
                          VIEW SOURCE
                        </a>
                      )}
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          onClick={closeDropdown}
                        >
                          VIEW LIVE
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StyledDropdown>
          </Flex>
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

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ul {
      margin-left: 1rem;
    }
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    h1 {
      margin-top: -1rem;
    }
  }
`;

export default Project;
