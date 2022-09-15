import { Flex, Text, useToast } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ButtonAction } from "./ButtonAction";
import { ModalPage } from "../ModalPage";
import { ModalContentBody } from "../ModalPage/ModalContentBody";
import { ModalContentFooter } from "../ModalPage/ModalContentFooter";
import { useState } from "react";
import { VeiculoViewModel } from "../../models/VeiculoViewModel";
import { createEntity, updateEntity } from "../../../services/api";

interface ActionsButtonProps {
  veiculoSelecionado?: VeiculoViewModel;
}

export const ActionsButtons = ({ veiculoSelecionado }: ActionsButtonProps) => {
  const [veiculo, setVeiculo] = useState<VeiculoViewModel>(() => {
    if (veiculoSelecionado) return veiculoSelecionado;
    return {} as VeiculoViewModel;
  });
  
  console.log(veiculo);

  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);

  const [actionButton, setActionButton] = useState<"add" | "edit" | "del">(
    "add"
  );
  const toast = useToast();

  const fnUseToast = (
    title: string,
    description: string,
    status: "info" | "warning" | "success" | "error" | "loading"
  ) => {
    toast({
      title: <Text size={"sm"}>{title}</Text>,
      description: <Text size={"sm"}>{description}</Text>,
      position: "top-right",
      status: `${status}`,
      duration: 1500,
      isClosable: true,
    });
  };

  function onOpenModal(action: "add" | "edit" | "del") {
    setActionButton(action);
    setIsOpenModalAdd(true);
  }

  function onCloseModal() {
    setIsOpenModalAdd(false);
  }

  function handleClickSave() {
    if (actionButton === "add") createEntity("Veiculo/Create", veiculo);

    // if (actionButton === "edit") updateEntity("Veiculo/Update", veiculo);

    onCloseModal();
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
        onClick={() => onOpenModal("add")}
        children={<AddIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Editar"
        colorScheme={"orange"}
        onClick={() => {
          onOpenModal("edit");
        }}
        children={<EditIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Deletar"
        colorScheme={"red"}
        onClick={() => onOpenModal("del")}
        children={<DeleteIcon width={3} height={3} marginRight={2} />}
      />
      <ModalPage
        title="Adicionar veículo"
        isOpen={isOpenModalAdd}
        onClose={onCloseModal}
        contentBody={
          <ModalContentBody
            handleInputChange={setVeiculo}
            action={actionButton}
          />
        }
        contentFooter={
          <ModalContentFooter
            handleClickCancelar={onCloseModal}
            handleClickSalvar={handleClickSave}
          />
        }
      />
    </Flex>
  );
};
