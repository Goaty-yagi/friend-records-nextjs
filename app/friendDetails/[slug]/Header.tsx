import { Flex, Box } from "@chakra-ui/react";
import React, {
  useRef,
  useEffect,
  useState,
  useContext,
  forwardRef,
} from "react";
import { getAvaterObj } from "@/components/avatarsAndIcons";
import { FriendContext } from "@/contexts";
import Image from "next/legacy/image";
import { FriendAvatarUpdatePopover } from "@/components/popovers";
import { useAppSelector } from "@/redux/hooks";
interface Props {
  children: React.ReactNode;
  innerRef: any;
  outerRef: any;
}

const Header = forwardRef(({ children, innerRef, outerRef }: Props) => {
  // const { onOpen, onClose, isOpen } = useDisclosure();
  const [avatar, setAvatar] = useState("");
  const friend = useAppSelector((state) => state.friend).friendDetail;
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
    <Box w={"100%"} ref={outerRef}>
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
            overflow={'hidden'}
          >
            <Image src={getAvaterObj(friend.avatar)} layout="fill" />
            <Flex h={"100%"} justifyContent={"center"}>
              <FriendAvatarUpdatePopover />
            </Flex>
          </Box>
        </Box>
        <Box
          className={"NEXT_HEDAER"}
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
});

export default Header;
