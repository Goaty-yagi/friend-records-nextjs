"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@/components/common";
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
        <Heading>dashboard</Heading>
        <Box>{user ? user.username : ""}</Box>
    </>
  );
}