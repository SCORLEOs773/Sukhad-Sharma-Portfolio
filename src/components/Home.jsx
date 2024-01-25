import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import Sukhad from "../assets/sukhad.jpeg";

export default function Home() {
  const handleDownloadCV = () => {
    const cvFilePath = process.env.PUBLIC_URL + "/Resume 2024.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Sukhad_Sharma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const splineContainerStyle = {
    position: "absolute",
    right: 20,
    width: "50vw",
    height: "100%",
    zIndex: -1,
    marginTop: "-8%",
  };

  const backgroundImage =
    "url(https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)";

  const bg = {
    background: "linear-gradient(to bottom, transparent, #008080 80%)",
    position: "relative",
    height: "100vh",
    width: "100vw",
    zIndex: -2,
  };

  const cvBoxStyle = {
    backgroundImage,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    top: 50,
    marginLeft: "140px",
    marginTop: "20px",
  };

  return (
    <Box style={bg}>
      <Box style={splineContainerStyle}>
        <Spline scene="https://prod.spline.design/rZvuiaifv3MIgXZp/scene.splinecode" />
      </Box>
      <Box
        style={{ ...cvBoxStyle }}
        textAlign="center"
        p={6}
        borderRadius="md"
        boxShadow="md"
        maxW="600px"
        mx="auto"
      >
        <Flex align="center" justify="center" direction="column">
          <Box>
            <Image
              src={Sukhad}
              alt="Profile"
              boxSize="200px"
              borderRadius="full"
            />
          </Box>
          <Box mt={4} textAlign="center">
            <Text fontSize="xl" fontWeight="bold">
              Sukhad Sharma
            </Text>
            <Text mt={2}>
              Web Developer | Software Engineer | Android Developer
            </Text>
          </Box>
        </Flex>
        <Button mt={4} colorScheme="teal" size="lg" onClick={handleDownloadCV}>
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
