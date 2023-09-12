"use client";

import { Box } from "@chakra-ui/react";
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
      <Box position={{ base: !isMobileHorizontal()?"absolute":'relative', lg: "relative" }}  >
        <Texts innerWidth={W} />
      </Box>
      <MainImage innerWidth={W} />
    </>
  );
}
