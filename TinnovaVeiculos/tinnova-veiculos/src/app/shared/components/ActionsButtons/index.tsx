import { Flex, Text, useToast } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ButtonAction } from "./ButtonAction";
import { ModalPage } from "../ModalPage";
import { ModalContentBody } from "../ModalPage/ModalContentBody";
import { ModalContentFooter } from "../ModalPage/ModalContentFooter";
import { useEffect, useState } from "react";
import { VeiculoViewModel } from "../../models/VeiculoViewModel";
import {
  createEntity,
  deleteEntity,
  updateEntity,
} from "../../../services/api";

interface ActionsButtonProps {
  veiculoSelecionado?: VeiculoViewModel;
  reloadGrid: () => void;
}

export const ActionsButtons = ({
  veiculoSelecionado,
  reloadGrid,
}: ActionsButtonProps) => {
  const [veiculo, setVeiculo] = useState<VeiculoViewModel>(
    {} as VeiculoViewModel
  );

  useEffect(() => {
    if (veiculoSelecionado) {
      setVeiculo(veiculoSelecionado);
    }
  }, [veiculoSelecionado]);

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

  async function handleClickActions() {
    try {
      if (actionButton === "add") {
        await createEntity("Veiculo/Create", veiculo);
      }

      if (actionButton === "edit") {
        await updateEntity("Veiculo/Update", veiculo);
      }

      if (actionButton === "del") {
        const res = await deleteEntity("Veiculo/Delete", veiculo.id);
      }
    } catch (error) {
      console.log(error);
    }
    reloadGrid();
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
        onClick={() => {
          setVeiculo({} as VeiculoViewModel);
          reloadGrid();
          onOpenModal("add");
        }}
        children={<AddIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Editar"
        colorScheme={"orange"}
        onClick={() => {
          veiculoSelecionado
            ? onOpenModal("edit")
            : fnUseToast(
                "",
                "Necessário selecionar um registro para esta operação",
                "warning"
              );
        }}
        children={<EditIcon width={3} height={3} marginRight={2} />}
      />
      <ButtonAction
        variant="solid"
        label="Deletar"
        colorScheme={"red"}
        onClick={() => {
          veiculoSelecionado
            ? onOpenModal("del")
            : fnUseToast(
                "",
                "Necessário selecionar um registro para esta operação",
                "warning"
              );
        }}
        children={<DeleteIcon width={3} height={3} marginRight={2} />}
      />
      <ModalPage
        title="Adicionar veículo"
        isOpen={isOpenModalAdd}
        onClose={onCloseModal}
        contentBody={
          <ModalContentBody
            veiculo={veiculo}
            handleInputChange={setVeiculo}
            action={actionButton}
          />
        }
        contentFooter={
          <ModalContentFooter
            handleClickCancelar={onCloseModal}
            handleClickSalvar={handleClickActions}
          />
        }
      />
    </Flex>
  );
};
