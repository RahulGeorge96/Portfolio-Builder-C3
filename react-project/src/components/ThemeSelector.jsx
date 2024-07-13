import React from "react";
import { Box, VStack, Button, Grid, GridItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setTheme } from "../redux/actions/portfolioActions";


export const ThemeSelector = () => {
  const dispatch = useDispatch();
  const handleColorChange = (color) => {
    dispatch(setTheme({ background: color }));
  };

  return (
    <Box p="4">
      <VStack align="start">
        <Box>Apply a skin to your profile</Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          {/* Render color buttons here */}
          {["black", "gray", "red", "green", "blue"].map((color) => (
            <GridItem key={color}>
              <Button
                bg={color}
                onClick={() => handleColorChange(color)}
                width="100%"
                height="50px"
              />
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};


