"use client";

import { Flex, Box } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useThemeColors from "@/hooks/use-theme-colors";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { theme } = useThemeColors("bg");
  // const [h, setH] = useState(0)
  // useEffect(() => {
  //   function setHeight() {
  //     const vh = window.innerHeight * 0.01
  //     setH(vh * 100 )
  //   }
    
  //   setHeight();
  //   window.addEventListener('resize', setHeight);
  //   return () => window.removeEventListener('resize', setHeight);
  // },[])
  const { data: user, isLoading } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Box
      position={"absolute"}
      w={"100vw"}
      // minH={h?h:"100vh"}
      minH={"100svh"}
      top={0}
      pt={{ base: 0, md: "80px" }}
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
