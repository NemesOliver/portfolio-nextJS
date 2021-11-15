import Head from "next/head";
import Image from "next/image";
import { StyledAbout } from "../components/styles/About.styles";
import { Section } from "../components/styles/Section.styles";
import { CardContainer } from "../components/styles/CardContainer.styles";
import Flex from "../components/styles/utils/Flex.styles";
import Card from "../components/Card";
import aboutCards from "../utils/aboutCards";

const about = () => {
  return (
    <>
      <Head>
        <title>Oliver Nemes - About</title>
      </Head>
      <StyledAbout>
        <Section fullPage="90vh">
          <Flex direction="column" switch="row">
            <Flex direction="column" width="70%" align="flex-start">
              <h2>A LITTLE BIT ABOUT MYSELF...</h2>
              <div className="img-about-thinker">
                <Image
                  src="/assets/about_thinker.svg"
                  alt="thinker"
                  layout="fill"
                />
              </div>
            </Flex>
            <Flex direction="column" width="50%">
              <div className="box">
                <p>
                  IT became a passion of mine when I was 13. <br /> My first
                  computer I owned was gifted to me as a Christmas present.
                  Within the first two weeks I disassembled it out of curiosity
                  and during the process of re-building it, it then became
                  faulty... Oops. <br />
                  <br />
                  Within one week, I fixed it! It was inevitable that I’d find
                  interest infgvvvvvvvvvvvvvvvvvvvv
                  
                   software. <br /> Eventually I decided to build a
                  game without even knowing where to start, I know... great
                  idea! This resulted into a simple game. Control the ball and
                  collect ten items. <br /> Regardless of my lack of knowledge,
                  I achieved exactly what I’ve set out to do. Kind of... <br />
                  <br />
                  Life then got in the way and I found I had a lot less time to
                  focus on my passion.
                </p>
              </div>
            </Flex>
          </Flex>
        </Section>
        <div className="hr"></div>
        <Flex>
          <h2>
            SO WHAT DO <br /> I LOOK LIKE ?
          </h2>
        </Flex>
        <Section>
          <Flex direction="column">
            <Flex direction="column-reverse">
              <div className="box-2">
                <p className="picture-text">
                  Code began to haunt me once again. This time it was different.
                  I was dedicated, determined and had a clear “Plan of Attack”.
                  Whilst working a full-time job, I invested all my spare time
                  into learning. <br /> Quick thinking, Adaptable and Reliable
                  leader in my work time. Passionate, hungry to learn Geek in my
                  spare time. I was living two lives.... Just like Batman.{" "}
                  <br />
                  During my double life, I picked up many skills and decided to
                  put all my attention towards coding. From simple static
                  websites to later discovering React and web apps, suddenly
                  everything was possible. <br /> I am now in a stage where I
                  can utilize my skills, work with a team who share my passion
                  and motivation whilst continuing to work on my development.
                </p>
              </div>
              <Flex direction="column" switch="row" justify="space-evenly">
                <div className="picture">
                  <Image
                    alt="picture of author"
                    layout="fill"
                    src="/assets/picture_profile.webp"
                  />
                </div>

                <div className="text">
                  <h2>
                    YUP! <br /> THAT’S <br /> ME...
                  </h2>
                  <h2>ALRIGHT...</h2>
                </div>
              </Flex>
            </Flex>
          </Flex>
        </Section>
        <div className="hr"></div>
        <h2 className="underline-5">SO WHAT DO I KNOW?</h2>
        <Section fullPage="60vh">
          <Flex direction="column" switch="row">
            <div className="img-basic">
              <Image
                src="/assets/about_basics.svg"
                alt="basics"
                layout="fill"
              />
            </div>
            <Flex direction="column" align="flex-start" width="70%">
              <h2>
                LET’S START WITH <br /> BASICS...
              </h2>
              <ul>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript / ES6</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
            </Flex>
          </Flex>
        </Section>
        <div className="hr"></div>
        <Section fullPage="90vh">
          <Flex direction="column" switch="row-reverse">
            <div className="img-advanced">
              <Image
                src="/assets/about_advanced.svg"
                alt="advanced"
                layout="fill"
              />
            </div>
            <Flex direction="column" align="flex-start">
              <h2>
                AND NOW ON TO THE <br /> GOOD STUFF!
              </h2>
              <ul>
                <li>Npm & Yarn</li>
                <li>Git</li>
                <li>CSS modules, SASS, Styled-components</li>
                <li>Material UI, Bootstrap, Semantic UI</li>
                <li>Framer Motion</li>
                <li>Fetch API, Axios</li>
                <li>Test API with Postman</li>
                <li>Routing</li>
                <li>NextJS, SSG, SSR</li>
                <li>Heroku and Vercel deployment</li>
                <li>Figma</li>
                <li>A bit of Node, Express, Mongoose, and MongoDB</li>
              </ul>
            </Flex>
          </Flex>
        </Section>

        <div className="hr"></div>
        <h2 style={{ textAlign: "center" }}>
          THINGS I WANT TO <br /> LEARN NEXT...
        </h2>
        <Section fullPage="60vh">
          <CardContainer>
            {aboutCards.map(({ mainText, title, description }, index) => (
              <Card
                key={index}
                mainText={mainText}
                title={title}
                description={description}
              />
            ))}
          </CardContainer>
        </Section>
      </StyledAbout>
    </>
  );
};

export default about;
