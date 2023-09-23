"use client";
import { Flex, Box } from "@chakra-ui/react";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Register } from "@/components/auth";
import BackToHome from "@/components/common/BackToHome";

export default function Layout() {
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex w={"100%"} justifyContent={"center"}>
          <Box w={{base:'100%',md:'600px'}} p={'0.5rem'}>
            <Register />
            <BackToHome/>
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
