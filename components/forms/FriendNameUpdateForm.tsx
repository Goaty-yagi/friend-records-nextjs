"use client";

import { CustomEditableInput } from "./inputFields";
import { avatars } from "../avatarsAndIcons/avatars";
import { Box } from "@chakra-ui/react";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
import useFriendNameUpdate from "@/hooks/friends/use-friend-name-update";
import { AbstractForm } from "./index";

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
        <AbstractForm onSubmit={onSubmit}>
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
        </AbstractForm>
      </Box>
    </>
  );
}
