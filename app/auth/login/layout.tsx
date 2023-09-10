"use client";

import NextLink from "next/link";
import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Heading, Box, Text, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
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
            <Box display={"inline-block"}>
              <Flex
                alignItems={"center"}
                p={"0.5rem"}
                transition={"300ms"}
                borderRadius={"5px"}
                cursor={"pointer"}
                _hover={{ bg: "gray" }}
              >
                <IoHomeOutline />
                <Text ml={"0.3rem"} onClick={() => router.push("/")}>
                  Back to home
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
