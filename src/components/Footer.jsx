import React from "react";
import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      backgroundColor="#008080"
      color="white"
      py={8}
      mt={8}
      textAlign="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        Connect with me
      </Text>
      <Flex justify="center" mt={4}>
        <Link href="https://github.com/SCORLEOs773" isExternal mx={4}>
          <Icon as={FaGithub} boxSize={6} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sukhadsharma/"
          isExternal
          mx={4}
        >
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="mailto:mykeyman777@gmail.com" isExternal mx={4}>
          <Icon as={FaEnvelope} boxSize={6} />
        </Link>
      </Flex>
      <Text mt={4} fontSize="sm">
        © 2024 Sukhad Sharma. All rights reserved.
      </Text>
    </Box>
  );
}
