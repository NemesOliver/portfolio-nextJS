import Image from "next/image";
import { Footer as StyledFooter } from "./styles/Footer.styles";
import Flex from "../components/styles/utils/Flex.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Flex direction="column">
        <Flex direction="column">
          <h2>FIND ME HERE</h2>
          <p>
            If you’d like to contact me you can do so by clicking the Email icon
            or alternatively you can find me on Github or LinkedIn.
          </p>
        </Flex>
        <div className="footer-img">
          <Image
            src="/assets/footer_image.svg"
            alt="illustration with social icons"
            layout="fill"
          />
        </div>
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
