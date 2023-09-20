"use client";

import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "@/contexts";

export default function ItemImage() {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH
  }
  return (
    <Box
      position={"absolute"}
      right={"1rem"}
      aspectRatio={'729/466'}
      bottom={{ md: !isMobileHorizontal()?"14rem":'12.5rem', xl: "27rem", "2xl": "30rem" }}
      w={{ md: !isMobileHorizontal()?400:250, xl: 600, "2xl": 900 }}
      h={{ md: !isMobileHorizontal()?240:150, xl: 360, "2xl": 540 }}
    >
      <Image
      position={"absolute"}
      right={"1rem"}
        src={"/images/home/Asset10.png"}
        maxH={'100%'}
        maxW={'100%'}
        alt={"asset"}
      />
    </Box>
  );
}
