import React from "react";
import {Box,Text,Editable,EditableInput, EditablePreview} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { updatePortfolio } from "../redux/actions/portfolioActions";


const PortfolioPreview = () => {
  const portfolio = useSelector((state) => state.portfolio.portfolio);
  const imageURL = useSelector((state) => state.portfolio.portfolio.imageURL); // Add this line
  const theme = useSelector((state) => state.portfolio.theme);
  const dispatch = useDispatch();

  const handleEdit = (field, value) => {
    dispatch(updatePortfolio({ [field]: value }));
  };

  return (
    <Box p="4" bg={theme.background} color={theme.foreground}>
      <Editable
        defaultValue={portfolio.name}
        onSubmit={(value) => handleEdit("name", value)}
      >
        <EditablePreview />
        <EditableInput />
      </Editable>
      {imageURL && (
        <img
          src={imageURL}
          alt="User Image"
          style={{ maxWidth: "100%", maxHeight: "200px", marginTop: "10px" }}
        />
      )}
      <Text>{portfolio.name}</Text>
      <Text>{portfolio.designation}</Text>
      <Text>{portfolio.location}</Text>
      <Text>{portfolio.bio}</Text>
      {/* <Text>{portfolio.imageURL}</Text> Display imageURL here */}
    </Box>
  );
};

export default PortfolioPreview;