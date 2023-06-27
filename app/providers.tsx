"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "480px",
  md: "600px",
  // lg: "750px",
  xl: "1025px",
  "2xl": "1550px",
  "3xl": "1800px",
};

const theme = extendTheme({
  breakpoints
});

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}><CSSReset/>{children}</ChakraProvider>
    </CacheProvider>
  );
}
