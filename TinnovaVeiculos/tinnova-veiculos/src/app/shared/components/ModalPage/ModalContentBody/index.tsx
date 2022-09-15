import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { VeiculoViewModel } from "../../../models/VeiculoViewModel";

export interface ModalContentBodyProps {
  handleInputChange: React.Dispatch<React.SetStateAction<VeiculoViewModel>>;
  action: "add" | "edit" | "del";
}
export const ModalContentBody = ({
  handleInputChange,
  action,
}: ModalContentBodyProps) => {
  return (
    <Box>
      <FormControl>
        <FormLabel fontSize="14px">Veículo</FormLabel>
        <Input
          type="text"
          onChange={(e) =>
            handleInputChange((prevState) => ({
              ...prevState,
              modelo: e.target.value,
            }))
          }
        />
        <Flex gap={"20px"}>
          <Box width={"50%"}>
            <FormLabel fontSize="14px">Marca</FormLabel>
            <Input
              type="text"
              onChange={(e) =>
                handleInputChange((prevState) => ({
                  ...prevState,
                  marca: e.target.value,
                }))
              }
            />
          </Box>
          <Spacer />
          <Box width={"50%"}>
            <FormLabel fontSize="14px">Ano</FormLabel>
            <Input
              type="number"
              onChange={(e) => {
                if (e.target.value.length === 4) {
                  handleInputChange((prevState) => ({
                    ...prevState,
                    anoFabricacao: Number(e.target.value),
                  }));
                }
              }}
            />
          </Box>
        </Flex>
        <FormLabel fontSize="14px">Descrição</FormLabel>
        <Textarea
          onChange={(e) =>
            handleInputChange((prevState) => ({
              ...prevState,
              descricao: e.target.value,
            }))
          }
          size="sm"
        />

        {action !== "add" && (
          <>
            <Checkbox
              onChange={(e) =>
                handleInputChange((prevState) => ({
                  ...prevState,
                  vendido: e.target.checked,
                }))
              }
            >
              <FormLabel fontSize="14px">Vendido</FormLabel>
            </Checkbox>
          </>
        )}
        {/* {action === "del" && <>Deletar</>} */}
      </FormControl>
    </Box>
  );
};
