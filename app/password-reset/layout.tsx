"use client";

import { PasswordResetForm } from "@/components/forms";
import { Heading, Flex, Box } from "@chakra-ui/react";

export default function Layout({ children }: { children?: React.ReactNode }) {
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
