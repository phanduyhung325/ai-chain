import React from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Hide,
  Show,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import { AiOutlineCopy } from "react-icons/ai";
import { useAppSelector } from "../redux-toolkit/hooks";

const int = [];

function Integration() {
  const profile = useAppSelector((state) => state.profile);
  return (
    <Box>
      <Heading>Integration</Heading>
      <Flex>
        {/* middle content */}
        <Box w={{ base: "full", md: "60%" }}>
          <Text py={8}>
            To get started on AIChain, you should have trained your
            assistant to your preference and tested it on your
            dashboard. Once this stage is done, then you are ready to
            integrate it to your dApp.
          </Text>

          <Box my={4}>
            {int.map((step) => (
              <Box mb={8} key={step.id}>
                <Heading pb={2}>Step {step.id}</Heading>
                <Text pb={2}>{step.desc}</Text>

                <Box
                  display="flex"
                  flexDirection="column"
                  // gap={3}
                  bg="#ffb86b"
                  // py={4}
                  borderRadius="5px"
                  px={6}
                  // pb={2}
                >
                  <Flex alignSelf="flex-end">
                    <Icon
                      as={AiOutlineCopy}
                      boxSize={6}
                      alignSelf={`center`}
                      mr={`15px`}
                    />
                  </Flex>
                  {step.code.map((code: any) => (
                    <Text key={code.id}>{code.val}</Text>
                  ))}
                </Box>
              </Box>
            ))}
            <Show below="md">
              {/*  <AspectRatio maxW="560px" ratio={1}>
                <iframe
                  title="Introverts for you"
                  src="https://www.youtube.com/embed/uDDeves6Crs?si=Rf4vgBydAH9P9g_w"
                  allowFullScreen
                />
              </AspectRatio> */}
              <Box dir="column">
                <Text>Company Id: {profile?.vdbId}</Text>
                <Text>Company Name: {profile?.name}</Text>
                <Text>
                  Company Description: {profile?.description}
                </Text>
                <Text>Company Email: {profile?.email}</Text>
              </Box>
            </Show>
          </Box>
        </Box>
        {/*  Demacator */}
        <Hide below="md">
          <Box mx={8} w="1px" bgColor="#929191B2" h="inherit" />
        </Hide>
        {/* Video */}
        <Hide below="md">
          <Box px={8} w="30%">
            <Text fontSize="20px" fontWeight="700">
              Watch Video
            </Text>
            <Box dir="column">
              <Text>Company Id: {profile?.vdbId}</Text>
              <Text>Company Name: {profile?.name}</Text>
              <Text>Company Description: {profile?.description}</Text>
              <Text>Company Email: {profile?.email}</Text>
            </Box>
            {/*    <AspectRatio maxW="560px" ratio={1}>
              <iframe
                title="Introverts for you"
                src="https://www.youtube.com/embed/uDDeves6Crs?si=Rf4vgBydAH9P9g_w"
                allowFullScreen
              />
            </AspectRatio> */}
          </Box>
        </Hide>
      </Flex>
    </Box>
  );
}

export default Integration;
