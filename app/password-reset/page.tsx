"use client";

import { PasswordResetForm } from "@/components/forms";
import type { Metadata } from "next";
import { Heading, Center, Text, Flex, Link } from "@chakra-ui/react";
// export const metadata: Metadata = {
// 	title: 'Full Auth | Password Reset',
// 	description: 'Full Auth password reset page',
// };

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
