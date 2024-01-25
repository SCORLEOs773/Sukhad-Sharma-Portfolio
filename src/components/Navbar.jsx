import React from "react";
import { Flex, Tabs, TabList, Tab, Text, TabIndicator } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="linear-gradient(to bottom, teal, transparent)" // Updated background style
      p={4}
      color="white"
      backgroundSize="cover"
    >
      <Text ml={20} fontFamily="Bebas Neue" fontWeight="bold" fontSize="6xl">
        Sukhad Sharma
      </Text>
      <Tabs
        position="relative"
        variant="unstyled"
        colorScheme="teal"
        fontFamily="serif"
        fontWeight="bold"
        mx="auto"
      >
        <TabList>
          <Tab ml={20} p={2} fontSize="lg" color="teal.700" fontWeight="bold">
            <Link to="/">Home</Link>
          </Tab>
          <Tab ml={20} p={2} fontSize="lg" color="teal.700" fontWeight="bold">
            <Link to="/projects">Projects</Link>
          </Tab>
          <Tab ml={20} p={2} fontSize="lg" color="teal.700" fontWeight="bold">
            <Link to="/about">About</Link>
          </Tab>
          <Tab
            ml={20}
            mr={20}
            p={2}
            fontSize="lg"
            color="teal.700"
            fontWeight="bold"
          >
            <Link to="/contact">Contact</Link>
          </Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="green.500"
          borderRadius="1px"
        />
      </Tabs>
    </Flex>
  );
}
