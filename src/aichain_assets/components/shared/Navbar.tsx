import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Flex, Heading, Spacer, Image } from "@chakra-ui/react";

type Params = {
  w?: string;
  h?: string;
};

function Navbar({ w, h }: Params) {
  return (
    <Box color="white" height="15vh">
      <Flex as="nav" px="80px" alignItems="center" gap="30px" bg="transparent">
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Navbar;
