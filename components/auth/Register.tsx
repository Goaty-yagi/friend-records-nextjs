"use client";

import NextLink from "next/link";
import { RegisterForm } from "../forms";
import { SocialButtons } from "@/components/common";
import { Heading, Text, Flex, Link, Box } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [emailOpen, setEmailOpen] = useState(false);
  return (
    <>
      <Flex flexDirection={"column"}>
        <Heading textAlign={"center"}>Register</Heading>
        {!emailOpen ? (
          <>
            <Box mt={"1rem"}>
              <SocialButtons setEmailOpen={setEmailOpen}/>
            </Box>
          </>
        ) : (
          <>
            <RegisterForm />
          </>
        )}

        <Text mt={"1rem"} textAlign={"center"}>
          Already have an account?{" "}
          <Link as={NextLink} color={"#7e7eff"} href="/auth/login">
            Login here
          </Link>
        </Text>
      </Flex>
    </>
  );
}
