"use client";

import { Flex, Box } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if(typeof window !== 'undefined') {
      console.log("BG",bg)
      document.body.style.height = '100vh'
      document.body.style.zIndex = '-1'
      document.body.style.background = bg
      document.body.style.backgroundRepeat = 'no-repeat'
    }
  },[colorMode])
  const { data: user, isLoading } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const bg = useColorModeValue(
    "linear-gradient(to bottom, green, pink)",
    "linear-gradient(to bottom, #141e30, #243b55)"
  );
  return (
    <Box
      position={"absolute"}
      w={"100vw"}
      h={"100vh"}
      top={0}
      pt={{base:0, md:'80px'}}
      bg={isAuthenticated ? 'url("/images/background.png")' : ""}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      role="img"
      zIndex={-1}
    >
      {isLoading ? (
        <>
          <Flex alignItems={"center"} h={"100vh"}>
            <Spinner size={"lg"} />
          </Flex>
        </>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}
