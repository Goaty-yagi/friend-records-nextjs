"use client";

import { Flex } from "@chakra-ui/react";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { Spinner } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: Props) {
  const { data: user, isLoading } = useRetrieveUserQuery();
  if (isLoading) {
    return (
      <Flex alignItems={'center'} h={'80vh'}>
        <Spinner size={"lg"} />
      </Flex>
    );
  }
  return <>{children}</>;
}
