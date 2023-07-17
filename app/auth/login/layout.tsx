"use client";

import NextLink from "next/link";
import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Heading, Box, Text, Flex, Link } from "@chakra-ui/react";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Box w="600px">
            <Heading mt={"2rem"} textAlign={"center"}>
              Login
            </Heading>
            <LoginForm />
            <SocialButtons />
            <Text mt={"1rem"} textAlign={"center"}>
              Don&apos;t have an account?{" "}
              <Link as={NextLink} color={"#7e7eff"} href="/auth/register">
                Register here
              </Link>
            </Text>
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
