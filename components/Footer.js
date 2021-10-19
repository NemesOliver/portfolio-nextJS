import Image from "next/image";
import Footer_image from "./Footer_image";
import { Footer as StyledFooter } from "./styles/Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="text-wrapper">
        <h2>FIND ME HERE</h2>
        <p>
          If you’d like to contact me you can do so by clicking the Email icon
          or alternatively you can find me on Github or LinkedIn.
        </p>
      </div>
      <div className="img-wrapper">
        <Image
          src="/assets/footer_image.svg"
          alt="illustration with social icons"
          layout="fill"
        />
        {/* <Footer_image /> */}
      </div>
    </StyledFooter>
  );
};

export default Footer;
