import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { PopoverCloseContext } from "@/contexts";

interface Props {
  trigger: JSX.Element;
  body: JSX.Element;
}

export default function CustomPopover({ trigger, body }: Props) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const OnCloseProvider = ({ children }: { children: React.ReactNode }) => {
    return (
      <PopoverCloseContext.Provider value={onClose}>
        {children}
      </PopoverCloseContext.Provider>
    );
  };
  return (
    <>
      <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <Box>{trigger}</Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody>
            <OnCloseProvider>{body}</OnCloseProvider>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
