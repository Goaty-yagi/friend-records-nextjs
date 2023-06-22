"use client";

import { PasswordResetForm } from "@/components/forms";
import { Heading, Flex } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading textAlign={"center"}>Password Reset</Heading>
        <PasswordResetForm />
      </Flex>
    </>
  );
}
