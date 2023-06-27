"use client";

import { PasswordResetConfirmForm } from "@/components/forms";
import { Heading, Flex, Box } from "@chakra-ui/react";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function Page({ params: { uid, token } }: Props) {
  return (
    <>
      <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Box>
          <Heading mb={'1rem'}>Password Reset</Heading>
          <PasswordResetConfirmForm uid={uid} token={token} />
        </Box>
      </Flex>
    </>
  );
}
