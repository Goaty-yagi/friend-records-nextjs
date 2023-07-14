"use client";

import { PasswordResetForm } from "@/components/forms";
import { Heading, Flex, Box } from "@chakra-ui/react";

import type { Metadata } from "next";

// const appName = process.env.APP_NAME;
// export const metadata: Metadata = {
//   title: `${appName} | password reset`,
//   description: `${appName} password reset page`,
// }


export default function Page() {
  console.log('PasswordResetForm')
  return (
    <>
     <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
        <Box>
          <Heading  mt={'2rem'} mb={'1rem'}>Password Reset</Heading>
          <PasswordResetForm />
        </Box>
      </Flex>
    </>
  );

}
