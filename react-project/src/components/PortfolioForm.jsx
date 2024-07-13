import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { savePortfolio, saveToLocalStorage, updatePortfolio } from '../redux/actions/portfolioActions';
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";


export const PortfolioForm = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector((state) => state.portfolio.portfolio);
//   const imageURL = useSelector((state) => state.portfolio.imageURL); // Add this line
  const savedPortfolios = useSelector(
    (state) => state.portfolio.savedPortfolios
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updatePortfolio({ [name]: value }));
  };

  const handleSave = () => {
    dispatch(savePortfolio(portfolio));
    dispatch(saveToLocalStorage([...savedPortfolios, portfolio]));
  };

  return (
    <Box p="4">
      <FormControl id="name" mb="4">
        <FormLabel>Name</FormLabel>
        <Input name="name" value={portfolio.name} onChange={handleChange} />
      </FormControl>
      <FormControl id="designation" mb="4">
        <FormLabel>Designation</FormLabel>
        <Input
          name="designation"
          value={portfolio.designation}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="location" mb="4">
        <FormLabel>Location</FormLabel>
        <Input
          name="location"
          value={portfolio.location}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl id="bio" mb="4">
        <FormLabel>Bio</FormLabel>
        <Input name="bio" value={portfolio.bio} onChange={handleChange} />
      </FormControl>
      <FormControl id="imageURL" mb="4">
        {" "}
        {/* Add imageURL field */}
        <FormLabel>Image URL</FormLabel>
        <Input name="imageURL"  value={portfolio.imageURL} onChange={handleChange} />
      </FormControl>
      <Button onClick={handleSave}>Save</Button>
    </Box>
  );
};
