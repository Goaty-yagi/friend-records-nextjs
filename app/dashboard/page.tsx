"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@/components/common";
import Layout from "./Layout";
export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  if (isLoading || isFetching) {
    return (
      <Flex>
        <Spinner />
      </Flex>
    );
  }
  console.log("USER", user);
  return (
    <>
      <Layout>
        <Heading>dashboard</Heading>
        <Box>{user ? user.username : ""}</Box>
      </Layout>
    </>
  );
}
