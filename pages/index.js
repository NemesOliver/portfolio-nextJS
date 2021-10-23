import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { StyledHome } from "../components/styles/Home.styles";

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
              posuere est, eleifend. <br /> Duis laoreet orci gravida sagittis
              lorem viverra malesuada faucibus aliquet. Vulputate faucibus
              aenean dignissim tempus semper felis. Suscipit sapien, quis amet
              vel pharetra. Arcu auctor ac metus, odio.
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
          <div className="card-container">
            <div className="card">
              <Image
                src="/assets/react_card.svg"
                alt="react card"
                width={250}
                height={180}
              />
              <h3>I LOVE REACT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                vitae eget id libero a.
              </p>
            </div>
            <div className="card">
              <Image
                src="/assets/responsive_design.svg"
                alt="responsive design"
                width={250}
                height={180}
              />
              <h3>RESPONSIVE DESIGN</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                vitae eget id libero a.
              </p>
            </div>
            <div className="card">
              <Image
                src="/assets/dreamer_image.svg"
                alt="dreamer"
                width={250}
                height={180}
              />
              <h3>DUNNO YET</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                vitae eget id libero a.
              </p>
              <Link href="/work">
                <a>&#8594; LEARN MORE</a>
              </Link>
            </div>
          </div>
        </section>
      </StyledHome>
    </>
  );
}
