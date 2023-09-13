"use client";

import { ModalCloseContext } from "@/contexts";
import { Spinner } from "../common";
import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  Box
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
      bodyScrollStop()
        return onOpen()
    }
    if(close) {
        onClose()
        bodyScrollAuto()
    }
  },[close])
  function bodyScrollStop() {
    document.body.style.overflow = 'hidden'
  }
  function bodyScrollAuto() {
    document.body.style.overflow = 'auto'
  } 
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
