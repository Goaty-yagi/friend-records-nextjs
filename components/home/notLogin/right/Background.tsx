"use client";

import { Box } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";
export default function Background() {
  return (
    <Box
      position={"absolute"}
      right={"0"}
      bottom={"0"}
      aspectRatio={"720/739"}
      w={{ base: 300, md: 400, xl: 800, "2xl": 1100 }}
      h={{ base: 300, md: 400, xl: 800, "2xl": 1100 }}
    >
      <ChakraImage
        position={"absolute"}
        right={"0"}
        bottom={"0"}
        maxH={"100%"}
        maxW={"100%"}
        src={"/images/home/Asset12.png"}
        alt={"asset"}
      />
    </Box>
  );
}
