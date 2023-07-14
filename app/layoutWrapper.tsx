"use client";

import { Flex, Box } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { useAppSelector } from "@/redux/hooks";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const { data: user, isLoading } = useRetrieveUserQuery();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <Box
      position={"absolute"}
      w={"100vw"}
      h={"100vh"}
      top={0}
      pt={{base:0, md:'80px'}}
      bg={isAuthenticated ? 'url("/images/background.png")' : ""}
      // layout={"fill"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      // justifyContent={"center"}
      role="img"
      zIndex={-1}
      // alt="background"
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
