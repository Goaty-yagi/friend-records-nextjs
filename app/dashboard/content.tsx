"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Box, Flex, Heading } from "@chakra-ui/react";
import AccountInfo from "./AccountInfo";
import FriendInfo from "./FriendInfo";
import { Spinner } from "@/components/common";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  useEditableControls,
} from "@chakra-ui/react";
export default function Content() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  if (isLoading || isFetching) {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  }
  return (
    <>
      <Card minW={"100%"} h={{ base: "100vh", md: "auto" }} overflow={"hidden"}>
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
