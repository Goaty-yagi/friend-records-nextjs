"use client";

import { Flex, Box } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useThemeColors from "@/hooks/use-theme-colors";
import { GlobalContext } from "@/contexts";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}


export default function LayoutWrapper({ children }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { theme } = useThemeColors("bg");
  const bg = useColorModeValue(
    "linear-gradient(to bottom, #f8edff, #c8e6df)",
    "linear-gradient(to bottom, #232323 80%, #6cd8e8)"
  );
  const [h, setH] = useState(0)
  const [w, setW] = useState(0)
  const defaltLimiteHeight = 550
  useEffect(() => {
    function setHW() {
      setH(window.innerHeight )
      setW(window.innerWidth )
    }

    setHW();
    window.addEventListener('resize', setHW);
    return () => window.removeEventListener('resize', setHW);
  },[])
  const { data: user, isLoading } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Box
      className={'safe-area'}
      position={"absolute"}
      w={"100%"}
      minH={"100svh"}
      top={0}
      pt={{ base: 0, md: "80px" }}
      bg={isAuthenticated?bg:''}
      // bg={isAuthenticated ? 'url("/images/background.png")' : ""}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      role="img"
      zIndex={-1}
    >
      {isLoading ? (
        <>
          <Flex alignItems={"center"} minH={"100svh"}>
            <Spinner size={"lg"} />
          </Flex>
        </>
      ) : (
        <GlobalContext.Provider value={{H:h,W:w,defaH:defaltLimiteHeight}}>{children}</GlobalContext.Provider>
      )}
    </Box>
  );
}
