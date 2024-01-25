import React from "react";
import { Box, Flex, Image, Heading, Text, Link } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";

const projects = [
  {
    name: "Project 1",
    image: "url-to-project-image-1.jpg",
    projectLink: "https://project1.example.com",
    githubLink: "https://github.com/username/project1",
  },
  {
    name: "Project 2",
    image: "url-to-project-image-2.jpg",
    projectLink: "https://project2.example.com",
    githubLink: "https://github.com/username/project2",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <Flex direction="column" align="center" bg="teal.800">
      <Spline scene="https://prod.spline.design/3BIwSWuI3FfNmdch/scene.splinecode" />
      <Box mt="8">
        {projects.map((project, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            p="4"
            mb="4"
            bg="teal.200"
            borderRadius="md"
            boxShadow="md"
          >
            <Image
              src={project.image}
              alt={project.name}
              boxSize="200px"
              borderRadius="md"
            />
            <Heading mt="4" fontSize="xl">
              {project.name}
            </Heading>
            <Text mt="2">
              <strong>Project Link:</strong>{" "}
              <Link href={project.projectLink} isExternal>
                {project.projectLink}
              </Link>
            </Text>
            <Text>
              <strong>GitHub Link:</strong>{" "}
              <Link href={project.githubLink} isExternal>
                {project.githubLink}
              </Link>
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
