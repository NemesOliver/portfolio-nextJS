import Flex from "../components/styles/utils/Flex.styles";

const Custom404 = () => {
  return (
    <Flex flexHeight="90vh">
      <p style={{ fontSize: "2rem" }}>
        404 <span style={{ fontSize: "4rem", opacity: 0.5 }}>|</span> This page
        could not be found.
      </p>
    </Flex>
  );
};

export default Custom404;
