"use client";

import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";

export default function ItemImage() {
  return (
    <Box
      position={"absolute"}
      right={"1rem"}
      bottom={{ md: "14rem", xl: "27rem", "2xl": "30rem" }}
      w={{ md: 400, xl: 600, "2xl": 900 }}
      h={{ md: 240, xl: 360, "2xl": 540 }}
    >
      <Image
        priority={true}
        src={"/images/home/Asset10.png"}
        layout="fill"
        alt={"asset"}
      />
    </Box>
  );
}
