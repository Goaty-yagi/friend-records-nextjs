"use client";

import Image from "next/legacy/image";
import {
  Box,
} from "@chakra-ui/react";



interface Props {
  innerWidth:number
}

export default function Background({innerWidth}:Props) {
  return (
    <Box
      position={"absolute"}
      w={{ base: innerWidth, md: 600, xl: 800, "2xl": 900 }}
      h={{ base: 500, md: 600, xl: 800, "2xl": 900 }}
    >
      <Image
        priority={true}
        src={"/images/home/BG_Deco.png"}
        layout="fill"
        alt={"asset"}
      />
    </Box>
  );
}







