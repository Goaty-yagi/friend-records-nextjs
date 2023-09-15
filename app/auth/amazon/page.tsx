"use client";

import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";
import { useSocialAuth } from "@/hooks";
import { Spinner } from "@/components/common";
import { PrivateRouterWithAuth } from "@/components/common/PrivateRouter";
import { Flex } from "@chakra-ui/react";

export default function Page() {
  const [amazonAuthenticate] = useSocialAuthenticateMutation();
  useSocialAuth(amazonAuthenticate, "amazon");

  return (
    <PrivateRouterWithAuth>
      <Flex h={"80vh"} justifyContent={"center"} alignItems={"center"}>
        <Spinner size="lg" />
      </Flex>
    </PrivateRouterWithAuth>
  );
}
