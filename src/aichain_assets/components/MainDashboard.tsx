import React, { useEffect, useState } from "react";
import {
  Link as ReactRouterLink,
  useNavigate,
} from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useMediaQuery,
  Icon,
  Link as Chakralink,
  ModalOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { BiLogOut } from "react-icons/bi";
import { ChatIcon } from "@chakra-ui/icons";
import { AiOutlineBook } from "react-icons/ai";
import { useUpdateProfile } from "../functions";
import Banner from "./Banner";

const MainDashboard = () => {
  const [isLargerThan991] = useMediaQuery("(max-width: 991px)");
  const navigate = useNavigate();

  const OverlayOne = () => (
    <ModalOverlay
      bg="#1e1b2e.300"
      backdropFilter="blur(1px) hue-rotate(0deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const { updateProfile } = useUpdateProfile();

  const onCloseSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  const onOpenSecondModal = () => {
    setIsSecondModalOpen(true);
  };

  useEffect(() => {
    updateProfile();
  }, []);
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };
  return (
    <Flex>
      <Box bg="#1e1b2e" w={`100%`} minH={`100vh`}>
        {isLargerThan991 ? (
          <>
            <Banner />
            <Heading>Home</Heading>

            <Flex alignItems="center" py="10px">
              <Box fontSize="14px">
                Get access to your bot analytics and information here
              </Box>
              <Spacer />
              <Box display="flex" flexDirection="column" gap={4}>
              </Box>
            </Flex>
            <Box>
              <LineChart />
              <BarChart />
            </Box>
          </>
        ) : (
          <>
            <Banner />
            <Heading>Home</Heading>

            <Flex alignItems="center" py="10px">
              <Box>
                Get access to your bot analytics and information here
              </Box>
              <Spacer />
              <Box display="flex" flexDirection="row" gap={4}>
                <Chakralink as={ReactRouterLink} to="/train-bot">
                  <Button
                    colorScheme="white"
                    variant="outline"
                    _hover={{
                      backgroundColor: "white",
                      color: "#1e1b2e",
                    }}
                    leftIcon={<ChatIcon />}
                  >
                    Train Bot
                  </Button>
                </Chakralink>
                <Button
                  bg="white"
                  color={`#1e1b2e`}
                  border={`1px white solid`}
                  _hover={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                  rightIcon={<Icon as={AiOutlineBook} boxSize={4} />}
                >
                  Test Bot
                </Button>
                <IconButton
                  onClick={logOut}
                  aria-label="logout"
                  icon={<BiLogOut />}
                  color="#b44e4e"
                  border={`#b44e4e`}
                  fontSize="20px"
                  fontWeight="bold"
                  variant="outline"
                  _hover={{
                    backgroundColor: "#b44e4e",
                    color: "#1e1b2e",
                  }}
                />
              </Box>
            </Flex>
            <Box>
              <LineChart />
              <BarChart />
            </Box>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default MainDashboard;
