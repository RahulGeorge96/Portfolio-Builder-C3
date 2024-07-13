import React from "react";
import { Box, VStack, Link } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Box width="200px" p="4" bg="gray.100" minHeight="100vh">
      <VStack spacing="4" align="start">
        <Link href="#">Home</Link>
        <Link href="#">Schedule</Link>
        <Link href="#">Recommendation</Link>
        <Link href="#">Analytics</Link>
        <Link href="#">Profile</Link>
        <Link href="#">Inbox</Link>
        <Link href="#">Themes</Link>
        <Link href="#">Settings</Link>
      </VStack>
    </Box>
  );
};

