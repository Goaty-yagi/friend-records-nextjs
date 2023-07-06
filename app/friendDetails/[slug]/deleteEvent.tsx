"use client";

import { useAppDispatch } from "@/redux/hooks";
import { useDeleteEventMutation } from "@/redux/features/eventApiSlice";
import { deleteEvent as setDeleteEvent } from "@/redux/features/eventSlice";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hooks";
import { Flex, Text, Button } from "@chakra-ui/react";
import { EventProps } from "@/redux/features/eventApiSlice";
import { PopoverCloseContext } from "@/contexts";
import { useContext } from "react";

interface Props {
  id: string;
  name: string;
}

export default function DeleteEvent({ id, name }: Props) {
  const onClose = useContext(PopoverCloseContext);
  const [deleteEvent] = useDeleteEventMutation();
  const dispatch = useAppDispatch();

  const handleDeleteFriend = () => {
    deleteEvent(id)
      .unwrap()
      .then(() => {
        dispatch(setDeleteEvent(id));
        onClose()
        toast.success(`Your Event ${name} Successfully deleteed!`);
      });
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text>Delete {name}??</Text>
        <Button aria-label="delete friend" onClick={handleDeleteFriend}>
          Delete
        </Button>
      </Flex>
    </>
  );
}
