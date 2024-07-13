import React from "react";
import { useSelector } from "react-redux";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";

export const PortfolioTable = () => {
  const savedPortfolios = useSelector(
    (state) => state.portfolio.savedPortfolios
  );

  return (
    <Box p="4">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Designation</Th>
            <Th>Location</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {savedPortfolios.map((portfolio, index) => (
            <Tr key={index}>
              <Td>{portfolio.name}</Td>
              <Td>{portfolio.designation}</Td>
              <Td>{portfolio.location}</Td>
              <Td>
                <Button
                  onClick={() => {
                    /* Handle viewing the portfolio */
                  }}
                >
                  View
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

