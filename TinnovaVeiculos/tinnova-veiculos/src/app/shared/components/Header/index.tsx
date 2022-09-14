import { Avatar, Box, Flex, Spacer, Text } from "@chakra-ui/react";

export interface HeaderProps {
  enterpriseName: string;
  userName: string;
}

export const Header = ({ enterpriseName, userName }: HeaderProps) => {
  return (
    <Box
      width={"100%"}
      height={"52px"}
      shadow="base"
      padding={"0 2%"}
      marginBottom={"14px"}
      backgroundColor={"#fff"}
    >
      <Flex height={"100%"} justifyItems={"center"} alignItems={"center"}>
        <Text fontSize={"20px"} fontWeight={"700"}>
          {enterpriseName}
        </Text>

        <Spacer />
        <Flex
          justifyItems={"center"}
          alignItems={"center"}
          marginRight={"20px"}
        >
          <Text fontSize={"12px "}>{userName}</Text>
          <Avatar marginLeft={"10px"} size={"sm"} name={userName} src="" />
        </Flex>
      </Flex>
    </Box>
  );
};
