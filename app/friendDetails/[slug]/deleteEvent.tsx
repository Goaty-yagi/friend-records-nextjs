"use client";

import { useAppDispatch } from "@/redux/hooks";
import { useDeleteEventMutation } from "@/redux/features/eventApiSlice";
import { deleteEvent as setDeleteEvent } from "@/redux/features/eventSlice";
import { toast } from "react-toastify";
import { Flex, Button } from "@chakra-ui/react";
import {ModalCloseContext} from "@/contexts";
import { updateFriendFromEventDelete } from "@/redux/features/friendSlice";
import { useContext, useState } from "react";
interface Props {
  id: string;
  name: string;
  money: number;
}

export default function DeleteEvent({ ...event }: Props) {
  const onClose = useContext(ModalCloseContext);
  const [deleteEvent] = useDeleteEventMutation();
  const dispatch = useAppDispatch();
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDeleteFriend = () => {
    deleteEvent(event.id)
      .unwrap()
      .then(() => {
        dispatch(setDeleteEvent(event.id));
        console.log("event", event);
        dispatch(updateFriendFromEventDelete(event.money));
        onClose();
        toast.success(`Your Event ${event.name} Successfully deleteed!`);
      });
  };
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {isConfirming ? (
          <>
            <Button
              colorScheme="red"
              border={'solid red'}
              aria-label="delete friend"
              onClick={handleDeleteFriend}
            >
              Are you sure??
            </Button>
          </>
        ) : (
          <>
            <Button
              colorScheme="pink"
              aria-label="delete friend"
              onClick={() => setIsConfirming(true)}
            >
              Delete this event??
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}
