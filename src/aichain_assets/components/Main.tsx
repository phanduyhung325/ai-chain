import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Main.css";
import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
  Icon,
} from "@chakra-ui/react";
function Main() {
  return (
    <Container
      as="section"
      className="steps"
      maxW="100vw"
      color="white"
      bg="gray.900"
      py={20}
    >
      <Heading
        fontFamily="Poppins"
        textAlign="center"
        mb={16}
        fontSize="4xl"
      >
        How AIChain Works
      </Heading>

      <VStack
        spacing={20}
        position="relative"
        maxW="1200px"
        mx="auto"
      >
        {/* Step 1 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          gap={8}
        >
          <Box
            position="relative"
            flex={1}
            display={{ base: "none", md: "block" }}
          ></Box>
          <Box flex={1} order={{ base: 2, md: 1 }} />
          <Box
            flex={1}
            order={{ base: 1, md: 2 }}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            position="relative"
          >
            <Flex mb={4} alignItems="center" gap={4}>
              <Box
                bg="teal.500"
                w={10}
                h={10}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                1
              </Box>
              <Heading fontSize="2xl">Describe Your AI Needs</Heading>
            </Flex>
            <Text color="gray.300">
              Provide AIChain with details about your requirements for
              tailored AI solutions.
            </Text>
          </Box>
        </Flex>

        {/* Step 2 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          gap={8}
        >
          <Box
            flex={1}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
          >
            <Flex mb={4} alignItems="center" gap={4}>
              <Box
                bg="teal.500"
                w={10}
                h={10}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                2
              </Box>
              <Heading fontSize="2xl">Customize AI Behavior</Heading>
            </Flex>
            <Text color="gray.300">
              Configure AIChain's parameters and decision-making
              patterns to match your goals.
            </Text>
          </Box>
          <Box
            position="relative"
            flex={1}
            display={{ base: "none", md: "block" }}
          ></Box>
        </Flex>

        {/* Step 3 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          gap={8}
        >
          <Box
            position="relative"
            flex={1}
            display={{ base: "none", md: "block" }}
          ></Box>
          <Box flex={1} order={{ base: 2, md: 1 }} />
          <Box
            flex={1}
            order={{ base: 1, md: 2 }}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
          >
            <Flex mb={4} alignItems="center" gap={4}>
              <Box
                bg="teal.500"
                w={10}
                h={10}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                3
              </Box>
              <Heading fontSize="2xl">AI Deployment</Heading>
            </Flex>
            <Text color="gray.300">
              Let AIChain autonomously configure and optimize your AI
              ecosystem.
            </Text>
          </Box>
        </Flex>

        {/* Step 4 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          gap={8}
        >
          <Box
            flex={1}
            bg="gray.800"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
          >
            <Flex mb={4} alignItems="center" gap={4}>
              <Box
                bg="teal.500"
                w={10}
                h={10}
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                4
              </Box>
              <Heading fontSize="2xl">Seamless Integration</Heading>
            </Flex>
            <Text color="gray.300">
              Implement AIChain's API endpoints with comprehensive
              documentation.
            </Text>
          </Box>
          <Box
            position="relative"
            flex={1}
            display={{ base: "none", md: "block" }}
          ></Box>
        </Flex>

        {/* Step 5 */}
        <Box
          w="full"
          textAlign="center"
          bg="gray.800"
          p={8}
          borderRadius="xl"
          boxShadow="xl"
          mx="auto"
          maxW="800px"
        >
          <Flex
            mb={4}
            alignItems="center"
            gap={4}
            justifyContent="center"
          >
            <Box
              bg="teal.500"
              w={10}
              h={10}
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              5
            </Box>
            <Heading fontSize="2xl">Autonomous Operation</Heading>
          </Flex>
          <Text color="gray.300">
            AIChain continuously evolves and adapts to user
            interactions and feedback.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

export default Main;
