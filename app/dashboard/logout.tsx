"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout as setLogout } from "@/redux/features/authSlice";
import { Button, Flex, Text } from "@chakra-ui/react";
import { setModalSpinner } from "@/redux/features/authSlice";
import { toast } from "react-toastify";


export default function Logout() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setModalSpinner(true))
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
        dispatch(setModalSpinner(false))
      })
      .catch((e) => {
        dispatch(setModalSpinner(false))
        const firstErrorMsg = Object.values(e.data)[0]
        toast.error('Failed to delete a friend' + '\n' + firstErrorMsg);
      })
  };
  return (
    <>
     <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Text>Do you want to logout??</Text>
        <Button aria-label="logout" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </>
  )
}
