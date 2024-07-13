import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";
import { ThemeSelector } from "./components/ThemeSelector";
import PortfolioPreview from "./components/PortfolioPreview";
import { PortfolioForm } from "./components/PortfolioForm";
import { PortfolioTable } from "./components/PortfolioTable";

function App() {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" p="4">
        <ThemeSelector />
        <PortfolioPreview />
        <PortfolioForm />
        <PortfolioTable />
      </Box>
    </Flex>
  );
}

export default App;
