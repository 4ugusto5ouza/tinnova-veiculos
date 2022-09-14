import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

export const Header = () => {
  return (
    <Box
      width={"100%"}
      height={"52px"}
      shadow="base"
      padding={"0 2%"}
      marginBottom={{
        base: "0px",
        lg: "12px",
        xl: "14px",
        "2xl": "20px",
      }}
      backgroundColor={"#fff"}
    >
      <Flex height={"100%"} justifyItems={"center"} alignItems={"center"}>
        <Text fontSize={"20px"}fontWeight={"700"}>
            {"Tinnova Veículos"}
        </Text>

        <Spacer />
        <Flex
          justifyItems={"center"}
          alignItems={"center"}
          marginRight={"20px"}
        >
          <Text fontSize={"12px "}>{"Augusto Souza"}</Text>
          <Avatar marginLeft={"10px"} size={"sm"} name={"Augusto Souza"} src="" />
        </Flex>
      </Flex>
    </Box>
  );
};
