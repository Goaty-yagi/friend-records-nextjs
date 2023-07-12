"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout as setLogout } from "@/redux/features/authSlice";
import { Button, Flex, Text } from "@chakra-ui/react";

export default function Logout() {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
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
