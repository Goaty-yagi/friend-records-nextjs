"use client";

import { useAppDispatch } from "@/redux/hooks";
import { useDeleteEventMutation } from "@/redux/features/eventApiSlice";
import { deleteEvent as setDeleteEvent } from "@/redux/features/eventSlice";
import { toast } from "react-toastify";
import { Flex, Button } from "@chakra-ui/react";
import {ModalCloseContext} from "@/contexts";
import { updateFriendFromEventDelete } from "@/redux/features/friendSlice";
import { useContext, useState } from "react";
import { EventProps } from "@/redux/features/eventApiSlice";
interface Props {
  id: string;
  name: string;
  money: number;
  friendId:string
}

export default function DeleteEvent({ ...event }: EventProps) {
  const onClose = useContext(ModalCloseContext);
  const [deleteEvent] = useDeleteEventMutation();
  const dispatch = useAppDispatch();
  const [isConfirming, setIsConfirming] = useState(false);
  console.log("CHECK", event)
  const handleDeleteFriend = () => {
    deleteEvent(event.id)
      .unwrap()
      .then(() => {
        dispatch(setDeleteEvent(event.id));
        dispatch(updateFriendFromEventDelete({money:Number(event.money),id:event.friend}));
        onClose();
        toast.success(`Your Event ${event.name} Successfully deleted!`);
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
