"use client";

import { Flex } from "@chakra-ui/react";

import { Layout as LeftLayout } from "./left";
import { Layout as RightLayout } from "./right";

export default function Layout() {
  return (
    <>
      <Flex
        width={"100vw"}
        height={{ base: "100svh" }}
        position={"absolute"}
        top={0}
        overflow={'hidden'}
      >
        <LeftLayout />
        <RightLayout />
      </Flex>
    </>
  );
}
