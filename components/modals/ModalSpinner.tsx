import { ModalCloseContext } from "@/contexts";
import { Spinner } from "../common";
import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  open:boolean;
  close?: boolean;
}

export default function ModaleSpinner({
  open,
  close,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if(open&&!isOpen) {
        return onOpen()
    }
    if(close) {
        onClose()
    }
  },[close])
  return (
    <>
      <ModalCloseContext.Provider value={onClose}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <Spinner size={"lg"} isCentered={true} hasContainer={true} />
        </Modal>
      </ModalCloseContext.Provider>
    </>
  );
}
