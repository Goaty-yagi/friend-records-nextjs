import { ModalCloseContext } from "@/contexts";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

interface Props {
  title: string;
  content: React.ReactNode;
  open: React.ReactNode;
  isCentered?: boolean;
}

export default function CustomModal({
  title,
  content,
  open,
  isCentered = false,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalCloseContext.Provider value={onClose}>
        <Box onClick={onOpen}>{open}</Box>
        <Modal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{content}</ModalBody>
            {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
          </ModalContent>
        </Modal>
      </ModalCloseContext.Provider>
    </>
  );
}
