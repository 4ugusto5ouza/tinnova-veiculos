import { Button, Text } from "@chakra-ui/react";
import { MouseEventHandler, ReactNode } from "react";

export interface ButtonActionProps {
  label: string;
  variant: "link" | "outline" | "unstyled" | "ghost" | "solid" | undefined;
  colorScheme:
    | "blue"
    | "cyan"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "yellow"
    | "whiteAlpha"
    | "blackAlpha"
    | "linkedin"
    | "facebook"
    | "messenger"
    | "whatsapp"
    | "twitter"
    | "telegram"
    | undefined;
  onClick: () => void;
  children: ReactNode;
}
export const ButtonAction = ({
  label,
  variant,
  colorScheme,
  onClick,
  children,
}: ButtonActionProps) => {
  return (
    <Button
      size={"sm"}
      variant={variant}
      colorScheme={colorScheme}
      marginX={"5px"}
      padding={"2"}
      onClick={onClick}
    >
      {children}
      <Text fontSize={"12px"}>{label}</Text>
    </Button>
  );
};
