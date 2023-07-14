"use client";

import { Box, Flex, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { PopoverCloseContext } from "@/contexts";
import useFriendAvatarUpdate from "@/hooks/friends/use-friend-avatar-update";
import { SvgSlider } from "@/components/avatarsAndIcons";
import { avatars } from "@/components/avatarsAndIcons/avatars";
import { useAppSelector } from "@/redux/hooks";
import getAvaterObj from "@/components/avatarsAndIcons/avatars";

export function EditButton() {
  return (
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
  );
}

export default function FriendAvatarUpdateForm() {
  const { icon, onChange, onSubmit } = useFriendAvatarUpdate();
  const onClose = useContext(PopoverCloseContext);
  const {friendDetail} = useAppSelector((state) => state.friend)
  const defaultAvatar = getAvaterObj(friendDetail.avatar)
  const CustomOnSubmit = () => {
    onSubmit()
    onClose()
  }
  return (
    <>
        <Box pt={"1rem"}>
          <SvgSlider defaultSvg={defaultAvatar} svgArray={avatars} setFun={onChange} />
          <Flex mt={"0.5rem"} justifyContent={"flex-end"}>
            <Button isDisabled={icon===defaultAvatar} onClick={CustomOnSubmit}>Update</Button>
          </Flex>
        </Box>
    </>
  );
}
