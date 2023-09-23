"use client";

import { PasswordResetForm } from "@/components/forms";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import BackToHome from "@/components/common/BackToHome";
import type { Metadata } from "next";

// const appName = process.env.APP_NAME;
// export const metadata: Metadata = {
//   title: `${appName} | password reset`,
//   description: `${appName} password reset page`,
// }

export default function Page() {
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex flexDirection={"column"} w={"100%"} alignItems={"center"}>
          <Box>
            <Heading mt={"2rem"} mb={"1rem"}>
              Password Reset
            </Heading>
            <PasswordResetForm />
          </Box>
          <Box mt={'1rem'}>
            <BackToHome />
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
