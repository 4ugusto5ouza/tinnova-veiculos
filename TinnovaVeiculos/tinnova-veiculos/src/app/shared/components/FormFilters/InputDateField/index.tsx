import { Divider, Flex, Input, Text } from "@chakra-ui/react";
import { SingleFormFieldProps } from "..";

export interface InputDataFieldsProps {
  title: string;
  labelDataInicial: string;
  labelDataFinal?: string;
  handleSetFormField: ({ label, value }: SingleFormFieldProps) => void;
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
      <Flex>
        <Text fontSize={"14px"}>{labelDataInicial}</Text>
        <Input
          size={"sm"}
          type={"Date"}
          onChange={(e) =>
            handleSetFormField({
              label: labelDataInicial,
              value: e.target.value,
            })
          }
        />
      </Flex>
      {labelDataFinal && (
        <Flex>
          <Text fontSize={"14px"}>{labelDataFinal}</Text>
          <Input
            size={"sm"}
            type={"Date"}
            onChange={(e) =>
              handleSetFormField({
                label: labelDataFinal,
                value: e.target.value,
              })
            }
          />
        </Flex>
      )}
      <Divider marginBottom={"14px"} />
    </Flex>
  );
};
