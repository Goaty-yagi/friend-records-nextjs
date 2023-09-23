"use client";


import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Box, Flex } from "@chakra-ui/react";
import { Login } from "@/components/auth";
import BackToHome from "@/components/common/BackToHome";


export default function Layout() {
  return (
    <>
      <PrivateRouterWithAuth>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Box w={{base:'100%',md:'600px'}} p={'0.5rem'}>
            <Login/>
            <BackToHome/>
          </Box>
        </Flex>
      </PrivateRouterWithAuth>
    </>
  );
}
