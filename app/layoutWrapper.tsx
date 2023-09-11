"use client";

import { Flex, Box } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import useThemeColors from "@/hooks/use-theme-colors";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const {theme} =  useThemeColors('bg')
  function setHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    if(typeof window !== 'undefined') {
      setHeight();
      window.addEventListener('resize', setHeight);
      return () => {
        window.removeEventListener('resize', setHeight);
    };
    }
  },[])
  const { data: user, isLoading } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Box
      position={"absolute"}
      w={"100vw"}
      h={"100%"}
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
          <Flex alignItems={"center"} h={"100%"}>
            <Spinner size={"lg"} />
          </Flex>
        </>
      ) : (
        <>{children}</>
      )}
    </Box>
  );
}
