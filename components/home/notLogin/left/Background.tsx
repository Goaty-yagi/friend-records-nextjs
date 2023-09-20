"use client";

import Image from "next/legacy/image";
import { useContext } from "react";
import { GlobalContext } from "@/contexts";
import { Box } from "@chakra-ui/react";
import { Image as ChakraImage } from "@chakra-ui/react";

interface Props {
  innerWidth: number;
}

export default function Background({ innerWidth }: Props) {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH;
  };
  return (
    <Box
      position={"absolute"}
      aspectRatio={"17/14"}
      w={{
        base: innerWidth,
        md: !isMobileHorizontal() ? 600 : 300,
        xl: 800,
        "2xl": 900,
      }}
      h={{
        base: 500,
        md: !isMobileHorizontal() ? 600 : 300,
        xl: 800,
        "2xl": 900,
      }}
    >
      <ChakraImage
        src={"/images/home/BG_Deco.png"}
        srcSet={"/images/home/BG_Deco.png 1.5x"}
        maxH={"100%"}
        maxW={"100%"}
        alt={"asset"}
      />
    </Box>
  );
}
