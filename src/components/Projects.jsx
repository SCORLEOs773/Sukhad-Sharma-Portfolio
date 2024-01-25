import React, { useEffect } from "react";
import { Box, Flex, Image, Heading, Text, Link } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import { Step, Scrollama } from "react-scrollama";
import { FaGithub, FaGlobe } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    name: "Quantum Krypto",
    image:
      "https://github.com/SCORLEOs773/quantum_krypto/blob/main/Assets/Vid%20A.gif?raw=true",
    projectLink: "https://project1.example.com",
    githubLink: "https://github.com/username/project1",
    ani: "fade-right",
  },
  {
    name: "Roll and Die",
    image:
      "https://github.com/SCORLEOs773/Quantum-Krypto/blob/main/Assets/Vid%20B.gif?raw=true",
    projectLink: "https://project2.example.com",
    githubLink: "https://github.com/username/project2",
    ani: "fade-left",
  },
  {
    name: "Update Express",
    image:
      "https://github.com/SCORLEOs773/Quantum-Krypto/blob/main/Assets/Vid%20C.gif?raw=true",
    projectLink: "https://project1.example.com",
    githubLink: "https://github.com/username/project1",
    ani: "fade-right",
  },
  {
    name: "The Daily CheckList",
    image:
      "https://github.com/SCORLEOs773/quantum_krypto/blob/main/Assets/a1.png?raw=true",
    projectLink: "https://project2.example.com",
    githubLink: "https://github.com/username/project2",
    ani: "fade-left",
  },
  {
    name: "Blogging Bee",
    image:
      "https://github.com/SCORLEOs773/quantum_krypto/blob/main/Assets/a1.png?raw=true",
    projectLink: "https://project1.example.com",
    githubLink: "https://github.com/username/project1",
    ani: "fade-right",
  },
  {
    name: "TextEdit",
    image:
      "https://github.com/SCORLEOs773/quantum_krypto/blob/main/Assets/a1.png?raw=true",
    projectLink: "https://project2.example.com",
    githubLink: "https://github.com/username/project2",
    ani: "fade-left",
  },
  // Add more projects as needed
];

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const handleStepEnter = (event) => {
    if (event.data) {
      const direction = event.data.direction;
      const index = event.data.index;

      const card = document.getElementById(`projectCard-${index}`);

      if (direction === "up" || direction === "down") {
        card.style.marginLeft = index % 2 === 0 ? "0" : "50rem";
        card.style.marginRight = index % 2 === 0 ? "50rem" : "0";
      }

      AOS.refresh();
    }
  };

  return (
    <Flex
      direction="column"
      align="center"
      bgGradient="linear(to-r, #E0F7FA, teal.500, #E0F7FA)"
      position="relative" // Set position to relative
    >
      <Spline scene="https://prod.spline.design/3BIwSWuI3FfNmdch/scene.splinecode" />
      <Box mt="8" position="relative">
        <Flex
          justify="center"
          // zIndex="-2"
          marginTop="-8%"
          position="absolute"
          width="100%"
        >
          <Spline scene="https://prod.spline.design/bos6Ntqh1pWp7IqW/scene.splinecode" />
        </Flex>
        <Scrollama onStepEnter={handleStepEnter}>
          {projects.map((project, index) => (
            <Step key={index} data={{ index, direction: "up" }}>
              <Flex
                id={`projectCard-${index}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                direction="column"
                align="center"
                p="4"
                mb="4"
                bg="teal.200"
                borderRadius="md"
                boxShadow="md"
                border="2px solid darkGreen" // Thin black border
                position="relative" // Set position to relative
                zIndex="1" // Set zIndex to 1
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  boxSize="200px" // Increased image width
                  width="350px"
                  borderRadius="md"
                />
                <Heading mt="4" fontSize="xl">
                  {project.name}
                </Heading>
                <Flex mt="2">
                  <Link href={project.githubLink} isExternal>
                    <FaGithub size={20} color="#333" />
                  </Link>
                  <Link href={project.projectLink} isExternal ml="2">
                    <FaGlobe size={20} color="#333" />
                  </Link>
                </Flex>
                <Text mt="2" color="gray.600">
                  {/* Project description */}
                  This is a brief description of the project. Add your text
                  here.
                </Text>
              </Flex>
            </Step>
          ))}
        </Scrollama>
      </Box>
    </Flex>
  );
}
