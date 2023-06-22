"use client";

import { PasswordResetConfirmForm } from "@/components/forms";
import { Heading, Flex } from "@chakra-ui/react";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function Page({ params: { uid, token } }: Props) {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading textAlign={"center"}>Password Reset</Heading>
        <PasswordResetConfirmForm uid={uid} token={token} />
      </Flex>
    </>
  );
}
