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
              posuere est, eleifend. Duis laoreet orci gravida sagittis lorem
              viverra malesuada faucibus aliquet. Vulputate faucibus aenean
              dignissim tempus semper felis. Suscipit sapien, quis amet vel
              pharetra. Arcu auctor ac metus, odio.
            </p>
            <Link href="/about" passHref>
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
        <section></section>
        <section></section>
      </StyledHome>
    </>
  );
}
