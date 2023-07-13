"use client";

import useFriendCreate from "@/hooks/friends/use-friend-create";
import { Form } from "@/components/forms";
import { SvgSlider } from "../avatarsAndIcons";
import { avatars } from "../avatarsAndIcons/avatars";
import { Box } from "@chakra-ui/react";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
// interface Props {
//   userId: string;
// }

export default function FriendCreateForm() {
  const { friendName, isLoading, avatar, setAvatar, onChange, onSubmit } =
    useFriendCreate();
  const onClose = useContext(PopoverCloseContext);

  function customOnsubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    onClose();
  }
  const config = [
    {
      labelText: "Friend Name",
      labelId: "friendName",
      placeholder: "Enter Friend name.",
      type: "text",
      value: friendName,
      required: true,
    },
  ];

  return (
    <>
      <Box mt={"0.9rem"}>
        <SvgSlider svgArray={avatars} setFun={setAvatar} />
        <Form
          config={config}
          isLoading={isLoading}
          btnText="Create"
          onChange={onChange}
          onSubmit={customOnsubmit}
        />
      </Box>
    </>
  );
}
