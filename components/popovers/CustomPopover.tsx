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
  Box
} from "@chakra-ui/react";

interface Props{
    trigger: JSX.Element
    body: JSX.Element
}

export default function CustomPopover({trigger, body}:Props) {
  return (
    <>
      <Popover>
        <PopoverTrigger>
            <Box>
            {trigger}
            </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody>
            {body}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
