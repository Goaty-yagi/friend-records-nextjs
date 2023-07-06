"use client";

import { CustomEditableInput } from "./inputFields";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { PopoverCloseContext } from "@/contexts";
import { AbstractForm } from "./index";
import useUsernameUpdate from "@/hooks/users/use-username-update";

interface Props {
  title?: string;
  iconToEdit?: JSX.Element;
  iconIsEditting?: JSX.Element;
  iconIsReady?: JSX.Element;
}

export default function UsernameUpdateForm({
  title,
  iconToEdit,
  iconIsEditting,
  iconIsReady,
}: Props) {
  const {  username, isLoading, onChange, onSubmit } = useUsernameUpdate();
  const onClose = useContext(PopoverCloseContext);

  return (
    <>
      <Box mt={"0.9rem"}>
          <CustomEditableInput
          size={'xs'}
            // title={title}
            // iconToEdit={iconToEdit}
            // iconIsEditting={iconIsEditting}
            // iconIsReady={iconIsReady}
            value={username}
            name={"username"}
            onChange={onChange}
            onSubmit={onSubmit}
          />
      </Box>
    </>
  );
}
