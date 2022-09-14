import { Flex, FormControl, Select, Text } from "@chakra-ui/react";
import { SingleFormFieldProps } from "..";

export interface InputComboBoxFieldProps {
  label: string;
  options: string[];
  handleSetFormField: ({ label, value }: SingleFormFieldProps) => void;
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
      <FormControl
        display={"flex"}
        flexWrap={"nowrap"}
        alignContent={"flex-end"}
      >
        <Select
          variant={"outline"}
          fontSize={"14px"}
          size={"sm"}
          textAlign={"initial"}
          placeholder={"Selecione"}
          onChange={(e) =>
            handleSetFormField({
              label,
              value: e.target.value,
            })
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
      </FormControl>
    </Flex>
  );
};
