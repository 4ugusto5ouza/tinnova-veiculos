import { Divider, Flex, Input, Text } from "@chakra-ui/react";
import { VeiculoFormFieldsProps } from "../../VeiculosGrid";

export interface InputNumberFieldsProps {
  title: string;
  labelMinimo: string;
  labelMaximo: string;
  handleSetFormField: React.Dispatch<
    React.SetStateAction<VeiculoFormFieldsProps>
  >;
}

export const InputNumberField = ({
  title,
  labelMinimo,
  labelMaximo,
  handleSetFormField,
}: InputNumberFieldsProps) => {
  return (
    <Flex direction={"column"}>
      <Text fontSize={"16px"} fontWeight={600}>
        {title}
      </Text>
      <Flex>
        <Text fontSize={"14px"}>{labelMinimo}</Text>
        <Input
          size={"sm"}
          type={"number"}
          onChange={(e) => {
            e.target.value.length === 4
              ? handleSetFormField((prevState) => ({
                  ...prevState,
                  AnoFabricacaoMinimo: Number(e.target.value),
                }))
              : handleSetFormField((prevState) => ({
                  ...prevState,
                  AnoFabricacaoMinimo: undefined,
                }));
          }}
        />
      </Flex>
      <Flex>
        <Text fontSize={"14px"}>{labelMaximo}</Text>
        <Input
          size={"sm"}
          type={"number"}
          onChange={(e) => {
            e.target.value.length === 4
              ? handleSetFormField((prevState) => ({
                  ...prevState,
                  AnoFabricacaoMaximo: Number(e.target.value),
                }))
              : handleSetFormField((prevState) => ({
                  ...prevState,
                  AnoFabricacaoMaximo: undefined,
                }));
          }}
        />
      </Flex>
      <Divider marginBottom={"14px"} />
    </Flex>
  );
};
