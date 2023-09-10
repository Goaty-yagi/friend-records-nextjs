"use client";

import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";
export default function Background() {
  return (
    <Box
      position={"absolute"}
      right={"0"}
      bottom={"0"}
      w={{ base: 300, md: 400, xl: 800, "2xl": 1100 }}
      h={{ base: 300, md: 400, xl: 800, "2xl": 1100 }}
    >
      <Image
        priority={true}
        src={"/images/home/Asset12.png"}
        layout="fill"
        alt={"asset"}
      />
    </Box>
  );
}
