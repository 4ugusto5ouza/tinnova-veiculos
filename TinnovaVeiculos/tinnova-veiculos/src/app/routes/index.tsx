import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
