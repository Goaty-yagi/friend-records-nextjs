"use client";

import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";

export default function PeopleImage() {
  return (
    <Box
      position={"absolute"}
      bottom={"0"}
      right={{ md: "7rem", xl: "10rem", "2xl": "20rem" }}
      w={{ base: 200, md: 300, xl: 550, "2xl": 750 }}
      h={{ base: 200, md: 300, xl: 550, "2xl": 750 }}
    >
      <Image
        priority={true}
        src={"/images/home/Asset2.png"}
        layout="fill"
        alt={"asset"}
      />
    </Box>
  );
}
