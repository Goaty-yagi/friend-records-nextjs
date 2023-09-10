"use client";

import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";

interface Props {
  innerWidth: number;
}

export default function MainImage({ innerWidth }: Props) {
  return (
    <Box
      position={"absolute"}
      bottom="0"
      w={{ md: 200, xl: 300, "2xl": 350 }}
      h={{ md: 200, xl: 300, "2xl": 350 }}
    >
      <Image
        priority={true}
        src={"/images/home/Asset3.png"}
        layout="fill"
        alt={"asset"}
      />
    </Box>
  );
}
