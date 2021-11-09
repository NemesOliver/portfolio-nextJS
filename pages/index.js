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
          <Flex direction="column" switch="row-reverse" align="flex-start">
            <div className="img-hackers-mind">
              <Image
                src="/assets/landing_image.svg"
                alt="hackers mind"
                layout="fill"
              />
            </div>
            <Flex direction="column" align="flex-start">
              <h1>FRONTEND DEVELOPER</h1>
              <p>
                Based in Warwickshire, UK. <br />I specialize in building fast,
                smooth and responsive websites and single page applications with a help of
                React and NextJS.
              </p>
              <Button content="MY WORK" to="/work" />
            </Flex>
          </Flex>
        </Section>
        <Section>
          <div className="box-wrapper">
            <div className="box">
              <h2>
                <span className="function">function</span>
                <span className="blue"> sayHello</span>(
                <span className="argument"> name</span> ) &#123;
                <br />
                &#160; &#160; return `Hi my name is $&#123;
                <span className="argument"> name</span> &#125;`
                <br /> &#125;
                <br />
                <br /> <span className="blue">sayHello</span>(
                <span className="blue"> “</span>
                <span className="yellow">Oliver</span>
                <span className="blue">”</span> );
              </h2>
            </div>
          </div>
        </Section>
        <Section fullPage="90vh">
          <Flex
            direction="column"
            switch="row"
            justify="space-between"
            align="flex-start"
          >
            <div className="img-person-pc">
              <Image
                src="/assets/person_pc.svg"
                alt="person on computer"
                layout="fill"
              />
            </div>
            <Flex direction="column" width="50%" align="flex-start">
              <h3>Hi my name is Oliver</h3>
              <p>
                I&#39;m a web developer with experience in HTML5, CSS3,
                JavaScript and React. I love building great user experiences and
                work on projects that excite me. I live in a world where
                everything is a challenge and the best way to overcome them is
                by learning...
              </p>
            </Flex>
            <Link href="/about" passHref>
              <StyledLink bottom="-80px">&#8594; LEARN MORE</StyledLink>
            </Link>
          </Flex>
        </Section>
        <div className="hr"></div>
        <Section fullPage="90vh">
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
