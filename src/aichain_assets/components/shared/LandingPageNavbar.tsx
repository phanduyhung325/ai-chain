import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { TypeAnimation } from "react-type-animation";
import "./landingPageNavbar.css";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spacer,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ButtonGroup,
} from "@chakra-ui/react";

function Navbar() {
  const { Auth, iiAuth, changeAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { actor, setLoggedIn } = useContext(AuthContext);

  const handleLogIn = () => {
    actor
      .logIn()
      .then((data: boolean) => {
        setLoggedIn(data);
        if (data === true) {
          changeAuthStatus();
          navigate("/dashboard");
          window.location.reload();
          navigate(0);
          return;
        }
        changeAuthStatus();
        navigate("/signup");
        window.location.reload();
        return;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (iiAuth) {
    handleLogIn();
  }

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box className="background" bg="#1e1b2e" color="white" mb="80px">
      <Flex
        as="nav"
        py="50px"
        px="80px"
        alignItems="center"
        gap="30px"
        bg="transparent"
      >
        <Spacer bg="transparent" />
        <List display={{ base: "none", md: "flex" }}>
          <ButtonGroup gap="2">
            <ListItem>
              <Button
                onClick={Auth}
                bg="white"
                color="#0f0a1f"
                border="1px white solid"
                _hover={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                Sign In
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={Auth}
                colorScheme="white"
                variant="outline"
                _hover={{
                  backgroundColor: "white",
                  color: "#0f0a1f",
                }}
              >
                Try AIChain
              </Button>
            </ListItem>
          </ButtonGroup>
        </List>
      </Flex>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={handleDrawerToggle}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="#0f0a1f">
          <DrawerHeader color="white" fontFamily="Poppins">
            AIChain
          </DrawerHeader>
          <DrawerBody>
            <List>
              <ListItem>
                <Button
                  onClick={Auth}
                  border="1px white solid"
                  color="white"
                  variant="outline"
                  _hover={{
                    backgroundColor: "white",
                    color: "#0f0a1f",
                  }}
                >
                  Try AIChain
                </Button>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Container centerContent my="300px" bg="transparent">
        <Heading
          as="h1"
          size="4xl"
          fontFamily="Poppins"
          bg="transparent"
        >
          AIChain
        </Heading>
        <Text
          fontFamily="Public Sans"
          textAlign="center"
          bg="transparent"
        >
          The first fully decentralized, autonomous, and AI-powered
          assistant built on blockchain for seamless integration and
          intelligence.
        </Text>
      </Container>
    </Box>
  );
}

export default Navbar;
