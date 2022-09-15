import { Button, Flex } from "@chakra-ui/react";

export interface ModalContentFooterProps {
  handleClickCancelar: () => void;
  handleClickSalvar: () => void;
}

export const ModalContentFooter = ({
  handleClickCancelar,
  handleClickSalvar,
}: ModalContentFooterProps) => {
  return (
    <Flex>
      <Button
        colorScheme="gray"
        marginRight={"3px"}
        onClick={handleClickCancelar}
      >
        Cancelar
      </Button>
      <Button colorScheme="blue" onClick={handleClickSalvar}>
        Salvar
      </Button>
    </Flex>
  );
};
