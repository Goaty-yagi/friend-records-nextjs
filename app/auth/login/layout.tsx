"use client";

import NextLink from "next/link";
import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Heading, Box, Text, Flex, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Login } from "@/components/auth";
import { IoHomeOutline } from "react-icons/io5";

export default function Layout({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Box w={{base:'100%',md:'600px'}} p={'0.5rem'}>
            <Login/>
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
