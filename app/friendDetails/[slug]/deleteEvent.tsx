"use client";

import { useAppDispatch } from "@/redux/hooks";
import { useDeleteEventMutation } from "@/redux/features/eventApiSlice";
import { deleteEvent as setDeleteEvent } from "@/redux/features/eventSlice";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hooks";
import { Flex, Text, Button } from "@chakra-ui/react";
import { EventProps } from "@/redux/features/eventApiSlice";
import { PopoverCloseContext } from "@/contexts";
import { updateFriendFromEventDelete } from "@/redux/features/friendSlice";
import { useContext } from "react";
// interface Props {
//   id: string;
//   name: string;
// }

export default function DeleteEvent({ ...event }: EventProps) {
  const onClose = useContext(PopoverCloseContext);
  const [deleteEvent] = useDeleteEventMutation();
  const dispatch = useAppDispatch();

  const handleDeleteFriend = () => {
    deleteEvent(event.id)
      .unwrap()
      .then(() => {
        dispatch(setDeleteEvent(event.id));
        console.log("event",event)
        dispatch(updateFriendFromEventDelete(event));
        onClose()
        toast.success(`Your Event ${event.name} Successfully deleteed!`);
      });
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Text>Delete {event.name}??</Text>
        <Button aria-label="delete friend" onClick={handleDeleteFriend}>
          Delete
        </Button>
      </Flex>
    </>
  );
}
