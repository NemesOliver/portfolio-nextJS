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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Bibendum a, scelerisque et, volutpat lobortis aliquet. Aliquet
                  dignissim quis adipiscing nulla tempus, cursus. Hac arcu
                  tristique mauris erat. In nunc neque elit massa tellus iaculis
                  cras aliquam.
                  <br />
                  Et nisi, enim et fringilla platea. Pellentesque turpis risus
                  massa urna cras malesuada eu enim sed. Vestibulum est
                  malesuada tortor vel et est auctor odio. Quis aliquet feugiat
                  posuere est maecenas. Id tellus, pulvinar vitae, venenatis
                  scelerisque sagittis convallis amet, facilisis. Lacus arcu
                  phasellus lacus in nisi morbi. Dictum cursus risus, ut cursus
                  urna eu. Consequat vel aliquet pellentesque pretium consequat.
                  <br />
                  Orci nulla eu arcu, ante cursus. Fermentum elit est ut semper
                  sed ornare dictum fames. Ac augue pharetra eget nisl sapien
                  porta nunc ac et. Vitae odio convallis convallis sit
                  consectetur pellentesque ut. Fusce varius lacus, vel tempus,
                  in. <br />
                  Posuere vel ac porttitor enim aliquam ut gravida. Enim posuere
                  aliquet porttitor nunc. Lobortis proin diam sed ut cursus
                  interdum sit. Ut diam sit convallis ultricies volutpat ipsum
                  elit.
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
            <Flex direction="column-reverse" switch="row">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lobortis tincidunt sed in mi enim. Nisi in etiam ultricies sem
                elit urna. Ipsum orci in tristique nec convallis nulla placerat
                eu vel. Turpis neque vel ipsum commodo amet lectus diam. Lorem
                sed aliquam parturient a praesent fermentum urna, phasellus
                vitae. Risus, quam nec cursus ac. Gravida tincidunt lobortis
                consectetur blandit. Morbi congue tellus ac ipsum imperdiet dis.
                Sit sit nisl, et aliquet integer. Ut diam eros nunc id praesent
                vitae proin suspendisse porttitor. Dui luctus amet sit nunc
                ullamcorper integer purus in suspendisse. Dui luctus amet sit
                nunc ullamcorper .
              </p>
              <Flex direction="column" switch="row">
                <div className="picture"></div>

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
