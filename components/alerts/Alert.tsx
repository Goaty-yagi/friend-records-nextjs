"use client";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  useDisclosure,
  CloseButton,
  IconButton,
} from "@chakra-ui/react";
import { MdOpenInFull } from "react-icons/md";

type Status = "error" | "info" | "warning" | "success" | "loading";

interface Props {
  status: Status;
  title?: string;
  descroption?: string;
  closeEvent?: any;
  children: React.ReactNode;
}

export default function Alerts({
  status,
  title,
  descroption,
  closeEvent,
  children,
}: Props) {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  function close() {
    if (closeEvent) {
      closeEvent();
    }
  }
  return (
    <>
      {isVisible ? (
        <Alert
          m={"0.3rem 0"}
          variant="left-accent"
          status={status ? status : "info"}
        >
          <AlertIcon />
          <Box>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>{children}</AlertDescription>
          </Box>
          <CloseButton
            alignSelf="flex-end"
            position="absolute"
            right={-0}
            top={-0}
            onClick={closeEvent ? close : onClose}
          />
        </Alert>
      ) : (
        <>
          {closeEvent ? (
            <></>
          ) : (
            <IconButton
              textAlign={"right"}
              aria-label="open alert"
              icon={<MdOpenInFull />}
              onClick={onOpen}
            />
          )}
        </>
      )}
    </>
  );
}
