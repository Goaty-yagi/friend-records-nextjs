"use client";

import {
  Flex,
} from "@chakra-ui/react";

import { Layout as LeftLayout } from "./left";
import { Layout as RightLayout } from "./right";

export default function Layout() {
    return (
      <>
        <Flex
          width={"100vw"}
          height={{base:'100vh', }}
          position={"absolute"}
          top={0}
        >
          <LeftLayout />
          <RightLayout/>
        </Flex>
      </>
    );
  }