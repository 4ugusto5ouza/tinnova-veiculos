import { Flex } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ButtonAction } from "./ButtonAction";
import { ModalPage } from "../ModalPage";
import { ModalContentBody } from "../ModalPage/ModalContentBody";
import { ModalContentFooter } from "../ModalPage/ModalContentFooter";
import { useState } from "react";
import { VeiculoViewModel } from "../../models/VeiculoViewModel";
import { createEntity } from "../../../services/api";

export const ActionsButtons = () => {
  const [veiculo, setVeiculo] = useState({} as VeiculoViewModel);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);

  function onOpenModalAdd() {
    setIsOpenModalAdd(true);
  }

  function onCloseModalAdd() {
    setIsOpenModalAdd(false);
  }

  function handleClickSave() {
    createEntity("Veiculo/Create", veiculo);
    onCloseModalAdd();
  }

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
        onClick={onOpenModalAdd}
        children={<AddIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Editar"
        colorScheme={"orange"}
        onClick={onOpenModalAdd}
        children={<EditIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Deletar"
        colorScheme={"red"}
        onClick={onOpenModalAdd}
        children={<DeleteIcon width={3} height={3} marginRight={2} />}
      />
      <ModalPage
        title="Adicionar veículo"
        isOpen={isOpenModalAdd}
        onOpen={onOpenModalAdd}
        onClose={onCloseModalAdd}
        contentBody={<ModalContentBody handleInputChange={setVeiculo} />}
        contentFooter={
          <ModalContentFooter
            handleClickCancelar={onCloseModalAdd}
            handleClickSalvar={handleClickSave}
          />
        }
      />
    </Flex>
  );
};
