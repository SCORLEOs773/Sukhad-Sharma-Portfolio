import React, { useRef } from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

export default function Home() {
  const cvLinkRef = useRef();

  const handleDownloadCV = () => {
    // You can replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const cvFilePath =
      "C:/Users/HP/Desktop/SUKHAD/RESUME's and CV's/Resume 2024.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "your_cv.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <Box
      textAlign="center"
      mt={8}
      p={6}
      bg="teal.200"
      borderRadius="md"
      boxShadow="md"
    >
      <Flex align="center" justify="center">
        <Box>
          <Image
            src="../assets/sukhad.jpeg"
            alt="Profile"
            boxSize="150px"
            borderRadius="full"
          />
        </Box>
        <Box ml={8} textAlign="left">
          <Text fontSize="xl" fontWeight="bold" color="teal.800">
            Your Name
          </Text>
          <Text mt={2} color="teal.600">
            Web Developer | Software Engineer
          </Text>
        </Box>
      </Flex>
      <Button mt={4} colorScheme="teal" size="lg" onClick={handleDownloadCV}>
        Download CV
      </Button>
    </Box>
  );
}
