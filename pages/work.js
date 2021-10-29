import Head from "next/head";
import Project from "../components/Project";
import { projects } from "../utils/projects";

const work = () => {
  return (
    <>
      <Head>
        <title>Oliver Nemes - My Work</title>
      </Head>
      <div>
        {projects.map((project, index) => (
          <>
            <Project key={index} project={project} index={index} />
            <div className="hr"></div>
          </>
        ))}
      </div>
    </>
  );
};

export default work;
