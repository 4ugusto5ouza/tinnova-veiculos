import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { VeiculoFormFieldsProps } from "../VeiculosGrid";
import { InputComboBoxField } from "./InputComboBoxField";
import { InputDataFields } from "./InputDateField";

export interface FormFiltersProps {
  formTitle: string;
  handleSetFormFields: ({
    anoFabricacaoMinimo,
    anoFabricacaoMaximo,
    dataRegistroMinimo,
    dataRegistroMaximo,
    marca,
  }: VeiculoFormFieldsProps) => void;
}

export interface SingleFormFieldProps {
  label: string;
  value: string;
}

export const FormFilters = ({
  formTitle,
  handleSetFormFields,
}: FormFiltersProps) => {
  function ApplySetFormFields({ label, value }: SingleFormFieldProps) {
    let anoFabricacaoMinimo = "",
      anoFabricacaoMaximo = "",
      dataRegistroMinimo = "",
      dataRegistroMaximo = "",
      marca = "";

    if (label === "Data mínima: ") anoFabricacaoMinimo = value;
    if (label === "Data máxima: ") anoFabricacaoMaximo = value;
    if (label === "Data início: ") dataRegistroMinimo = value;
    if (label === "Data fim: ") dataRegistroMaximo = value;
    if (label === "Marca: ") marca = value;

    handleSetFormFields({
      anoFabricacaoMinimo,
      anoFabricacaoMaximo,
      dataRegistroMinimo,
      dataRegistroMaximo,
      marca,
    });
  }

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
        <InputDataFields
          title="Ano Fabricação"
          labelDataInicial="Data mínima: "
          labelDataFinal="Data máxima: "
          handleSetFormField={ApplySetFormFields}
        />
        <InputDataFields
          title="Data registro"
          labelDataInicial="Data início: "
          labelDataFinal="Data fim: "
          handleSetFormField={ApplySetFormFields}
        />
        <InputComboBoxField
          label="Marca: "
          options={["Ford", "Chevrolet", "Toyota"]}
          handleSetFormField={ApplySetFormFields}
        />
      </Flex>
    </Box>
  );
};
