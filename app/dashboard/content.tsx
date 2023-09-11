"use client";

import AccountInfo from "./accountInfo";
import FriendInfo from "./friendInfo";
import { themeColor as theme } from "@/styles/colors";
import useThemeColors from "@/hooks/use-theme-colors";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
export default function Content() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { theme } = useThemeColors("bg");
  // const defo = useThemeColors().theme;
  return (
    <>
      <Card
        minW={"100%"}
        h={{ base: "100svh", md: "auto" }}
        overflow={"hidden"}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing={{ base: "1", md: "4" }}>
            <FriendInfo />
            <AccountInfo />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
