"use client";

import Alerts from "./Alert";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Box, Flex } from "@chakra-ui/react";
import SlideAnimatioWrapper from "../animations/slideAnimationWrapper";
import { resetIsThrottled } from "@/redux/features/authSlice";

export default function PwaAlert() {
  const dispatch = useAppDispatch();
  function closeEvent() {
    dispatch(resetIsThrottled());
  }
  return (
    <>
      <SlideAnimatioWrapper direction="left" id={"id"}>
        <Flex position={'relative'} zIndex={1} w={'100%'} justifyContent={"flex-end"}>
          <Box position={'absolute'} top={0}>
            <Alerts
              title={"Install on your device! "}
              status="info"
              closeEvent={closeEvent}
            >
            </Alerts>
          </Box>
        </Flex>
      </SlideAnimatioWrapper>
    </>
  );
}
