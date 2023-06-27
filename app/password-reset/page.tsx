"use client";

import { PasswordResetForm } from "@/components/forms";
import { Heading, Flex, Box } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Box>
          <Heading mb={'1rem'}>Password Reset</Heading>
          <PasswordResetForm />
        </Box>
      </Flex>
    </>
  );
}
