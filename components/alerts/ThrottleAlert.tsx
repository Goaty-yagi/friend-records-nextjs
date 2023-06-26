"use client";

import { Throttle } from "../utils";
import Alerts from "./Alert";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Box, Flex } from "@chakra-ui/react";
import { resetIsThrottled } from '@/redux/features/authSlice';

export default function ThrottleAlert() {
  const { isThrottled } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  function closeEvent() {
    dispatch(resetIsThrottled())
  }
  if (isThrottled) {
    return (
      <>
        <Flex justifyContent={"flex-end"}>
          <Alerts title={"too many accsess!"} status="error" closeEvent={closeEvent}>
            <Throttle />
          </Alerts>
        </Flex>
      </>
    );
  }
  return <></>;
}
