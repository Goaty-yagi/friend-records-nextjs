"use client";
import { Heading, Flex, Box } from "@chakra-ui/react";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { RegisterForm } from "@/components/forms";

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex w={"100%"} justifyContent={"center"}>
          <Box w={"600px"}>
            <Heading mt={"2rem"} textAlign={"center"}>
              Register
            </Heading>
            {<RegisterForm />}
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
