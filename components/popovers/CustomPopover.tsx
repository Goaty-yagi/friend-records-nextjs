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


interface Style {
  color:string
  bg:string
  border:string
}
interface PopoverProps {
  trigger: JSX.Element;
  body: JSX.Element;
  header?:string
  style?: Style
}

export default function CustomPopover({ trigger, body,header, style}: PopoverProps) {
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
        <PopoverContent {...style}>
          {typeof style === 'undefined' && (
            <PopoverArrow />
          )}
          <PopoverCloseButton />
          {header && (
             <PopoverHeader>{header}</PopoverHeader>
          )}
          <PopoverBody>
            <OnCloseProvider>{body}</OnCloseProvider>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
