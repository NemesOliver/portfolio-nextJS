import Head from "next/head";
import Image from "next/image";
import { StyledAbout } from "../components/styles/About.styles";
import { CardContainer } from "../components/styles/CardContainer.styles";
import Card from "../components/Card";
import aboutCards from "../utils/aboutCards";

const about = () => {
  return (
    <>
      <Head>
        <title>Oliver Nemes - About</title>
      </Head>
      <StyledAbout>
        <div className="about-landing">
          <div className="welcome-text">
            <h2>A LITTLE BIT ABOUT MYSELF...</h2>
            <div className="img-wrapper">
              <Image
                src="/assets/about_thinker.svg"
                alt="thinker"
                layout="fill"
              />
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              a, scelerisque et, volutpat lobortis aliquet. Aliquet dignissim
              quis adipiscing nulla tempus, cursus. Hac arcu tristique mauris
              erat. In nunc neque elit massa tellus iaculis cras aliquam.
              <br />
              Et nisi, enim et fringilla platea. Pellentesque turpis risus massa
              urna cras malesuada eu enim sed. Vestibulum est malesuada tortor
              vel et est auctor odio. Quis aliquet feugiat posuere est maecenas.
              Id tellus, pulvinar vitae, venenatis scelerisque sagittis
              convallis amet, facilisis. Lacus arcu phasellus lacus in nisi
              morbi. Dictum cursus risus, ut cursus urna eu. Consequat vel
              aliquet pellentesque pretium consequat. <br />
              Orci nulla eu arcu, ante cursus. Fermentum elit est ut semper sed
              ornare dictum fames. Ac augue pharetra eget nisl sapien porta nunc
              ac et. Vitae odio convallis convallis sit consectetur pellentesque
              ut. Fusce varius lacus, vel tempus, in. <br />
              Posuere vel ac porttitor enim aliquam ut gravida. Enim posuere
              aliquet porttitor nunc. Lobortis proin diam sed ut cursus interdum
              sit. Ut diam sit convallis ultricies volutpat ipsum elit. Aliquet
              sed non tellus massa massa orci. Sem donec urna, urna bibendum.
              Porttitor volutpat mauris sagittis semper nec sit dictum.
            </p>
          </div>
        </div>
        <div className="hr"></div>
        <div className="h2-wrapper">
          <h2>
            SO WHAT DO <br /> I LOOK LIKE ?
          </h2>
        </div>
        <div className="grid-items">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
            tincidunt sed in mi enim. Nisi in etiam ultricies sem elit urna.
            Ipsum orci in tristique nec convallis nulla placerat eu vel. Turpis
            neque vel ipsum commodo amet lectus diam. Lorem sed aliquam
            parturient a praesent fermentum urna, phasellus vitae. Risus, quam
            nec cursus ac. Gravida tincidunt lobortis consectetur blandit. Morbi
            congue tellus ac ipsum imperdiet dis. Sit sit nisl, et aliquet
            integer. Ut diam eros nunc id praesent vitae proin suspendisse
            porttitor. Dui luctus amet sit nunc ullamcorper integer purus in
            suspendisse. Dui luctus amet sit nunc ullamcorper .
          </p>
          <div className="picture"></div>
          <div className="text">
            <h2>
              YUP! <br /> THAT’S <br /> ME...
            </h2>
            <h2>ALRIGHT...</h2>
          </div>
        </div>
        <div className="hr"></div>
        <h2>SO WHAT DO I KNOW?</h2>
        <div className="skills-basic">
          <div className="img-basic">
            <Image src="/assets/about_basics.svg" alt="basics" layout="fill" />
          </div>
          <div>
            <h2>
              LET’S START WITH <br /> BASICS...
            </h2>
            <ul>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
            </ul>
          </div>
        </div>
        <div className="skills-advanced">
          <div className="img-advanced">
            <Image
              src="/assets/about_advanced.svg"
              alt="advanced"
              layout="fill"
            />
          </div>
          <div>
            <h2>
              AND NOW ON TO THE <br /> GOOD STUFF!
            </h2>
            <ul>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
              <li>HTML 5</li>
            </ul>
          </div>
        </div>
        <div className="hr"></div>
        <div className="learn-next">
          <h2>
            THINGS I WANT TO <br /> LEARN NEXT...
          </h2>
          <CardContainer>
            {aboutCards.map((card, index) => (
              <Card
                key={index}
                mainText={card.mainText}
                title={card.title}
                description={card.description}
              />
            ))}
          </CardContainer>
        </div>
      </StyledAbout>
    </>
  );
};

export default about;
