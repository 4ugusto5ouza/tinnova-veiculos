import { Flex, FormControl, Select, Text } from "@chakra-ui/react";
import { VeiculoFormFieldsProps } from "../../VeiculosGrid";

export interface InputComboBoxFieldProps {
  label: string;
  options: string[];
  handleSetFormField: React.Dispatch<
    React.SetStateAction<VeiculoFormFieldsProps>
  >;
}
export const InputComboBoxField = ({
  label,
  options,
  handleSetFormField,
}: InputComboBoxFieldProps) => {
  return (
    <Flex direction="row">
      <Text fontSize="16px" marginLeft="4" color={"low.light"} zIndex={1}>
        {label}
      </Text>
      <Select
        variant={"outline"}
        fontSize={"14px"}
        size={"sm"}
        textAlign={"initial"}
        placeholder={"Selecione"}
        onChange={(e) =>
          handleSetFormField((prevState) => ({
            ...prevState,
            Marca: e.target.value,
          }))
        }
      >
        {options.map((opt) => {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};
