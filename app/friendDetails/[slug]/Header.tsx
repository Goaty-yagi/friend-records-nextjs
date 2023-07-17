import { Flex, Box } from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { getAvaterObj } from "@/components/avatarsAndIcons";
import Image from "next/legacy/image";
import { FriendAvatarUpdatePopover } from "@/components/popovers";
import { useAppSelector } from "@/redux/hooks";
interface Props {
  children: React.ReactNode;
  innerRef: any;
  outerRef: any;
}

export default function Header({ children, innerRef, outerRef }: Props) {
  const friend = useAppSelector((state) => state.friend).friendDetail;
  return (
    <Box w={"100%"} ref={outerRef} overflow={'hidden'}>
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
            <Image src={getAvaterObj(friend.avatar)} alt={'avatar'} layout="fill" />
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
};

