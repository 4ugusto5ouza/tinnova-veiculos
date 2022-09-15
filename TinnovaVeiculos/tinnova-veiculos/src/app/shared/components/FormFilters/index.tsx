import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { VeiculoFormFieldsProps } from "../VeiculosGrid";
import { InputComboBoxField } from "./InputComboBoxField";
import { InputDataFields } from "./InputDateField";
import { InputNumberField } from "./InputNumberField";

export interface FormFiltersProps {
  formTitle: string;
  handleSetFormFields: React.Dispatch<
    React.SetStateAction<VeiculoFormFieldsProps>
  >;
}

export const FormFilters = ({
  formTitle,
  handleSetFormFields,
}: FormFiltersProps) => {
  return (
    <Box
      width={"220px"}
      height={"700px"}
      shadow="base"
      padding={"0 2%"}
      backgroundColor={"#fff"}
    >
      <Flex direction={"column"}>
        <Text fontSize={"18px"} fontWeight={600}>
          {formTitle}
        </Text>
        <Divider marginBottom={"14px"} />
        <InputNumberField
          title="Ano Fabricação"
          labelMinimo="Ano mínimo: "
          labelMaximo="Ano máximo: "
          handleSetFormField={handleSetFormFields}
        />
        <InputDataFields
          title="Data registro"
          labelDataInicial="Data início: "
          labelDataFinal="Data fim: "
          handleSetFormField={handleSetFormFields}
        />
        <InputComboBoxField
          label="Marca: "
          options={["Ford", "Chevrolet", "Toyota"]}
          handleSetFormField={handleSetFormFields}
        />
      </Flex>
    </Box>
  );
};
