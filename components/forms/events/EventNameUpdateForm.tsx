"use client";

import { CustomEditableInput } from "../inputFields";
import { Box } from "@chakra-ui/react";
import { useContext, FormEvent } from "react";
import { PopoverCloseContext } from "@/contexts";
import useEventNameUpdate from "@/hooks/events/use-event-name-update";
import { useEffect } from "react";
interface Props {
  id: string;
  name: string
  title?: string;
  iconToEdit?: JSX.Element;
  iconIsEditting?: JSX.Element;
  iconIsReady?: JSX.Element;
}

export default function EventNameUpdateForm({
  id,
  title,
  name,
  iconToEdit,
  iconIsEditting,
  iconIsReady,
}: Props) {
  const { eventName, isLoading, setEventId, onChange, onSubmit } =
    useEventNameUpdate();
  const onClose = useContext(PopoverCloseContext);
  useEffect (() => {
    setEventId(id)
  },[])

  return (
    <>
      <Box mt={"0.9rem"}>
        <CustomEditableInput
          title={title}
          iconToEdit={iconToEdit}
          iconIsEditting={iconIsEditting}
          iconIsReady={iconIsReady}
          defaultValue={name}
          value={eventName}
          name={"eventName"}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Box>
    </>
  );
}
