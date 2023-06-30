import { Flex, Box } from "@chakra-ui/react";
import React, { useRef, useEffect, useState, useContext, forwardRef } from "react";
import { getAvaterObj } from "@/components/avatarsAndIcons";
import { FriendContext } from "@/contexts";
import Image from "next/legacy/image";


interface Props {
    children:React.ReactNode
    innerRef:any
    outerRef:any
}

const Header = forwardRef(({children, innerRef,outerRef}:Props) => {
  // const { onOpen, onClose, isOpen } = useDisclosure();
  const [avatar, setAvatar] = useState("");
  const friend = useContext(FriendContext).friend;
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    //   if (avatar) {
    //     if (friend.avatar !== avatar.name) {
    //       setIsDisabled(false);
    //     } else {
    //       setIsDisabled(true);
    //     }
    //   }
  }, [avatar]);
  return (
    <Box
      w={"100%"}
        ref={outerRef}
    >
      <Flex position={"relative"} justifyContent={"center"} w={"100%"}>
        <Box zIndex={1}>
          <Box
            position={"relative"}
            w={"70px"}
            h={"70px"}
            mr={"1rem"}
            border={"solid gray"}
            borderRadius={"50vh"}
            bg={"#cfcfcf"}
          >
            <Image src={getAvaterObj(friend.avatar)} layout="fill" />
            {/* <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
                <PopoverTrigger>
                  <Box
                    position={"absolute"}
                    right={-6}
                    bottom={0}
                    border={"solid gray"}
                    borderRadius={"4px"}
                    p={"0 0.2rem"}
                    fontSize={"0.5rem"}
                    transition={".3s"}
                    _hover={{ bg: "#dadada", color: "gray" }}
                  >
                    Edit
                  </Box>
                </PopoverTrigger>
                <PopoverContent p={5}>
                  <PopoverCloseButton />
                  <SlideIcons
                    iconArray={avatars}
                    setIcon={setAvatar}
                    defaultIcon={getAvaterObj(friend.avatar)}
                  />
                  <ButtonGroup display="flex" justifyContent="flex-end">
                    <Button variant="outline" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      isDisabled={isDisabled}
                      onClick={() => friendUpdate({ avatar: avatar.name })}
                      colorScheme="teal"
                    >
                      Save
                    </Button>
                  </ButtonGroup>
                </PopoverContent>
              </Popover> */}
          </Box>
        </Box>
        <Box
          w={"100%"}
          position={"absolute"}
          top={"50%"}
            ref={innerRef}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
})

export default Header