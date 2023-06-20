"use client";
import { Center, Box } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Center w={'100%'}>
      <Box w={"600px"}>{children}</Box>
    </Center>
  );
}
