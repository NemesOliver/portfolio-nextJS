import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Card from "../components/Card";
import { CardContainer } from "../components/styles/CardContainer.styles";
import { StyledHome } from "../components/styles/Home.styles";
import { Section } from "../components/styles/Section.styles";
import Flex from "../components/styles/utils/Flex.styles";
import { StyledLink } from "../components/styles/utils/StyledLink.styles";
import homeCards from "../utils/homeCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oliver Nemes - Home</title>
      </Head>
      <StyledHome>
        <Section fullPage="90vh">
          <Flex direction="column" switch="row-reverse">
            <div className="img-hackers-mind">
              <Image
                src="/assets/landing_image.svg"
                alt="hackers mind"
                layout="fill"
              />
            </div>
            <Flex direction="column">
              <h1>FRONTEND DEVELOPER</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                duis enim ac quis curabitur mauris id viverra. Mi volutpat duis
                in posuere est, eleifend.
              </p>
              <Button content="MY WORK" to="/work" />
            </Flex>
          </Flex>
        </Section>
        <Section fullPage="90vh">
          <div className="box">
            <h2>
              <span className="function">function</span>
              <span className="blue">sayHello</span>(
              <span className="argument">name</span> ) &#123;
              <br />
              &#160; &#160; return `Hi my name is $&#123;
              <span className="argument">name</span> &#125;`
              <br /> &#125;
              <br />
              <br /> <span className="blue">sayHello</span>(
              <span className="blue">“</span>
              <span className="yellow">Oliver</span>
              <span className="blue">”</span> );
            </h2>
          </div>
          <Flex direction="column">
            <div className="img-person-pc">
              <Image
                src="/assets/person_pc.svg"
                alt="person on computer"
                layout="fill"
              />
            </div>
            <Flex direction="column">
              <h3>Hi my name is Oliver</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                orci ipsum gravida lorem molestie. Accumsan, vitae feugiat
                ultrices dolor bibendum hac. Et odio lacinia duis duis sed. Nunc
                integer accumsan, aliquam odio vitae quis diam porta metus.
                Viverra tellus neque vitae ut at pellentesque...
              </p>
            </Flex>
            <Link href="/about" passHref>
              <StyledLink bottom="-80px">&#8594; LEARN MORE</StyledLink>
            </Link>
          </Flex>
        </Section>
        <div className="hr"></div>
        <Section>
          <CardContainer>
            {homeCards.map(({ title, description, image }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                image={image}
              />
            ))}
            <Link href="/work" passHref>
              <StyledLink>&#8594; LEARN MORE</StyledLink>
            </Link>
          </CardContainer>
        </Section>
      </StyledHome>
    </>
  );
}
