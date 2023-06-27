"use client";

import { Box } from "@chakra-ui/react";
import { Background, PeopleImage, ItemImage } from "./index";

export default function Layout() {
  return (
    <>
      <Box width={"100%"} height={"100%"} position={"relative"}>
        <Background />
        <PeopleImage />
        <ItemImage />
      </Box>
    </>
  );
}
