import { Center, Container, Flex, Spacer, Text } from "@chakra-ui/react";

import React from "react";

const Navbar = () => {
  //
  // States
  //
  const [sticky, setSticky] = React.useState(false);

  //
  // Effects
  //
  React.useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      setTimeout(() => {
        setSticky(currentPosition > 82 ? true : !(currentPosition === 0));
      }, 5);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="nav">
      <Container
        maxW="full"
        h="46px"
        bg={sticky ? "blackAlpha.900" : "blackAlpha.700"}
        color="white"
      >
        <Flex color="white">
          {" "}
          <Text fontSize='2xl' color="white">Logo</Text>
          <Spacer />
          <Center w="200px">
            <Text fontSize='2xl'>Contacto</Text>
          </Center>
          
          <Center w="200px">
            <Text fontSize='2xl'>Fotos</Text>
          </Center>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
