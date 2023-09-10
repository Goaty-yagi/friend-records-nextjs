"use client";

import { useAppDispatch } from "@/redux/hooks";
import { Button } from "@chakra-ui/react";
import { useDeleteFriendMutation } from "@/redux/features/friendApiSlice";
import { deleteFriend as setDeleteFriend } from "@/redux/features/friendSlice";
import { setIsLoadingTrue,setIsLoadingFalse } from "@/redux/features/friendSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hooks";
import { Flex, Text } from "@chakra-ui/react";
import { Spinner } from "@/components/common";

export default function DeleteFriend() {
  const router = useRouter();
  const friend = useAppSelector((state) => state.friend).friendDetail;
  const { isLoading } = useAppSelector((state) => state.friend);
  const [deleteFriend] = useDeleteFriendMutation();
  const dispatch = useAppDispatch();

  const handleDeleteFriend = () => {
    dispatch(setIsLoadingTrue())
    deleteFriend(friend.id)
      .unwrap()
      .then(() => {
        dispatch(setDeleteFriend(friend.id));
        router.push("/");
        toast.success(`Your Friend ${friend.name} SuccessFully deleteed!`);
        dispatch(setIsLoadingFalse())
      });
  };
  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text>Delete {friend.name}??</Text>
        <Button aria-label="delete friend" isDisabled={isLoading} onClick={handleDeleteFriend}>
          {isLoading?<><Spinner/></>:<>Delete</>}
        </Button>
      </Flex>
    </>
  );
}
