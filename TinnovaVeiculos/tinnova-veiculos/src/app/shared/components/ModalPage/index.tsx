import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
export interface ModalPageProps {
  title: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  contentBody: ReactNode;
  contentFooter: ReactNode;
}

export const ModalPage = ({
  title,
  isOpen,
  onOpen,
  onClose,
  contentBody,
  contentFooter,
}: ModalPageProps) => {
  return (
    <Box>
      <Modal
        isOpen={isOpen}
        onClose={() => onClose}
        motionPreset="slideInBottom"
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="18px" fontWeight={700} color="#444">
            {title}
            <Divider />
          </ModalHeader>
          <ModalBody>{contentBody}</ModalBody>
          <ModalFooter>{contentFooter}</ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
