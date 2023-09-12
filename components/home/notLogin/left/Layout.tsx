"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Texts, MainImage } from "./index";
import { GlobalContext } from "@/contexts";

export default function Layout() {
  const [innerWidth, setInnerWidth] = useState(0);
  const globalContext = useContext(GlobalContext);
  const { H, W, defaH } = globalContext;
  const isMobileHorizontal = () => {
    return H < defaH
  }
  return (
    <>
      <Flex position={{ base: !isMobileHorizontal()?"absolute":'relative', lg: "relative" }} w={'100%'}  >
        <Texts innerWidth={W} />
      </Flex>
      <MainImage innerWidth={W} />
    </>
  );
}
