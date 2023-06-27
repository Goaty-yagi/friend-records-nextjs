"use client";

import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout as setLogout } from "@/redux/features/authSlice";
import { Button } from "@chakra-ui/react";

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
     <Button colorScheme='red' variant='outline' onClick={handleLogout}>Logout</Button>
    </>
  )
}
