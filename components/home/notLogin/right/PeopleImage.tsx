"use client";

import Image from "next/legacy/image";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "@/contexts";

export default function PeopleImage() {
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH
  }
  return (
    <Box
      position={"absolute"}
      bottom={"0"}
      right={{ md: !isMobileHorizontal()?'7rem':'3.5rem', xl: "10rem", "2xl": "20rem" }}
      w={{ base: 200, md: !isMobileHorizontal()?300:250, xl: 550, "2xl": 750 }}
      h={{ base: 200, md: !isMobileHorizontal()?300:250, xl: 550, "2xl": 750 }}
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
