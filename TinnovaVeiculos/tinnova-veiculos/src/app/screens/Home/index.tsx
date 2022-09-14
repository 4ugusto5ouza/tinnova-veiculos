import { Box } from "@chakra-ui/react";
import { Header } from "../../shared/components/Header";
import { VeiculosGrid } from "../../shared/components/VeiculosGrid";

export const Home = () => {
  return (
    <Box width={"1240px"}>
      <Header />
      <VeiculosGrid />
    </Box>
  );
};
