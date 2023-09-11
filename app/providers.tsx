"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { store } from "@/redux/store";
import { extendTheme } from "@chakra-ui/react";


const breakpoints = {
  sm: "480px",
  md: "600px",
  // lg: "750px",
  xl: "1025px",
  "2xl": "1550px",
  "3xl": "1800px",
};
const styles = {
  global: {
    body: {
      fontFamily: 'Futura',
    },
  }
}

const theme = extendTheme({
  breakpoints,
  styles
});

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
