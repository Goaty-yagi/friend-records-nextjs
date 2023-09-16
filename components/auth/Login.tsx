"use client";

import NextLink from "next/link";
import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import { Heading, Text, Flex, Link, Box } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading textAlign={"center"}>Login</Heading>
        <LoginForm />
        <Box mt={"1rem"}>
          <SocialButtons noEmail={true}/>
        </Box>
        <Text mt={"1rem"} textAlign={"center"}>
          Don&apos;t have an account?{" "}
          <Link as={NextLink} color={"#7e7eff"} href="/auth/register">
            Register here
          </Link>
        </Text>
      </Flex>
    </>
  );
}
