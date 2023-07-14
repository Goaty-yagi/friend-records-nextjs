"use client";

import { CustomEditableInput } from "../inputFields";
import { avatars } from "@/components/avatarsAndIcons/avatars";
import { Box } from "@chakra-ui/react";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
import useFriendNameUpdate from "@/hooks/friends/use-friend-name-update";

interface Props {
  title?: string;
  iconToEdit?: JSX.Element;
  iconIsEditting?: JSX.Element;
  iconIsReady?: JSX.Element;
}

export default function FriendNameUpdateForm({
  title,
  iconToEdit,
  iconIsEditting,
  iconIsReady,
}: Props) {
  const { friendName, isLoading, onChange, onSubmit } = useFriendNameUpdate();
  const onClose = useContext(PopoverCloseContext);

  return (
    <>
      <Box mt={"0.9rem"}>
          <CustomEditableInput
            title={title}
            iconToEdit={iconToEdit}
            iconIsEditting={iconIsEditting}
            iconIsReady={iconIsReady}
            value={friendName}
            name={"friendName"}
            onChange={onChange}
            onSubmit={onSubmit}
          />
      </Box>
    </>
  );
}
