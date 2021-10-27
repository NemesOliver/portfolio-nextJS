import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import { CardContainer } from "../components/styles/CardContainer.styles";
import { StyledHome } from "../components/styles/Home.styles";
import homeCards from "../utils/homeCards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oliver Nemes - Home</title>
      </Head>
      <StyledHome>
        <section className="landing-page">
          <div className="text-wrapper">
            <h1>FRONTEND DEVELOPER</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              duis enim ac quis curabitur mauris id viverra. Mi volutpat duis in
              posuere est, eleifend.
            </p>
            <Link href="/work" passHref>
              <button type="button">MY WORK</button>
            </Link>
          </div>
          <div className="img-wrapper">
            <Image
              src="/assets/landing_image.svg"
              alt="hackers mind"
              layout="fill"
            />
          </div>
        </section>
        <section className="about-intro">
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
          <div className="about-wrapper">
            <div className="img-wrapper-pc">
              <Image
                src="/assets/person_pc.svg"
                alt="person on computer"
                layout="fill"
              />
            </div>
            <div className="about-text">
              <h3>Hi my name is Oliver</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                orci ipsum gravida lorem molestie. Accumsan, vitae feugiat
                ultrices dolor bibendum hac. Et odio lacinia duis duis sed. Nunc
                integer accumsan, aliquam odio vitae quis diam porta metus.
                Viverra tellus neque vitae ut at pellentesque...
              </p>
              <Link href="/about">
                <a>&#8594; LEARN MORE</a>
              </Link>
            </div>
          </div>
        </section>
        <div className="hr"></div>
        <section className="my-work-intro">
          <CardContainer>
            {homeCards.map(({ title, description, image }, index) => (
              <Card
                key={index}
                title={title}
                description={description}
                image={image}
              />
            ))}
            <Link href="/work">
              <a>&#8594; LEARN MORE</a>
            </Link>
          </CardContainer>
        </section>
      </StyledHome>
    </>
  );
}
