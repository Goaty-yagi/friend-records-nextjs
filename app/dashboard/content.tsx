"use client";

import AccountInfo from "./accountInfo";
import FriendInfo from "./friendInfo";
import {
  Card,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { GlobalContext } from "@/contexts";
import { useContext } from "react";

export default function Content() {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  return (
    <>
      <Card
      className={"TEST"}
        w={"100%"}
        h={{ base: "100svh", 'md': "auto" }}
        overflowX={'hidden'}
        pb={H < defaH?'2rem':0}
      >
        <CardBody maxW={"100%"}>
          <Stack divider={<StackDivider />} spacing={{ base: "1", md: "4" }}>
            <FriendInfo />
            <AccountInfo />
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
