"use client";

import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {Texts, MainImage} from "./index";

export default function Layout() {
  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      addEventListener("resize", () => setInnerWidth(window.innerWidth));
      return () =>
        window.removeEventListener("resize", () =>
          setInnerWidth(window.innerWidth)
        );
    }
  }, []);

  return (
    <>
      <Box position={{ base: "absolute", lg: "relative" }} w="100%">
        <Texts
          innerWidth={innerWidth}
        />
      </Box>
      <MainImage innerWidth={innerWidth} />
    </>
  );
}
