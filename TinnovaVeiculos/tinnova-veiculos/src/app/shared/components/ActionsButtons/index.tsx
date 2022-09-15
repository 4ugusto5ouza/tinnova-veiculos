import { Flex } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { ButtonAction } from "./ButtonAction";

export const ActionsButtons = () => {
  const navigate = useNavigate();
  return (
    <Flex
      width={"100%"}
      height={"100%"}
      maxHeight={"52px"}
      backgroundColor={"#fff"}
      alignItems={"end"}
      justifyContent={"end"}
      paddingX={"100px"}
      marginBottom={"20px"}
    >
      <ButtonAction
        variant="solid"
        label="Adicionar"
        colorScheme={"green"}
        navigateTo="/Add"
        action={navigate}
        children={<AddIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Editar"
        colorScheme={"orange"}
        navigateTo="/Editar/{id}"
        action={navigate}
        children={<EditIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Deletar"
        colorScheme={"red"}
        navigateTo="/Deletar/{id}"
        action={navigate}
        children={<DeleteIcon width={3} height={3} marginRight={2} />}
      />
    </Flex>
  );
};
