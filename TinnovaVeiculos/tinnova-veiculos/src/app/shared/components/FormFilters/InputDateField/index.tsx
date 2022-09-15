import { Divider, Flex, Input, Text } from "@chakra-ui/react";
import { VeiculoFormFieldsProps } from "../../VeiculosGrid";

export interface InputDataFieldsProps {
  title: string;
  labelDataInicial: string;
  labelDataFinal?: string;
  handleSetFormField: React.Dispatch<
    React.SetStateAction<VeiculoFormFieldsProps>
  >;
}
export const InputDataFields = ({
  title,
  labelDataInicial,
  labelDataFinal,
  handleSetFormField,
}: InputDataFieldsProps) => {
  return (
    <Flex direction={"column"}>
      <Text fontSize={"16px"} fontWeight={600}>
        {title}
      </Text>
      <Flex marginBottom={"10px"}>
        <Text fontSize={"14px"}>{labelDataInicial}</Text>
        <Input
          size={"sm"}
          type={"Date"}
          onChange={(e) =>
            handleSetFormField((prevState) => ({
              ...prevState,
              DataRegistroMinimo: e.target.value,
            }))
          }
        />
      </Flex>
      {labelDataFinal && (
        <Flex marginBottom={"10px"}>
          <Text fontSize={"14px"}>{labelDataFinal}</Text>
          <Input
            size={"sm"}
            type={"Date"}
            onChange={(e) =>
              handleSetFormField((prevState) => ({
                ...prevState,
                DataRegistroMaximo: e.target.value,
              }))
            }
          />
        </Flex>
      )}
      <Divider marginBottom={"14px"} />
    </Flex>
  );
};
