"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  // styles: {
  //   global: () => ({
  //     body: {
  //       bg: "",
  //     },
  //   }),
  // },
  // config: {
  //   initialColorMode: 'dark',
  //   useSystemColorMode: false,
  // }
});

export function ChakraProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}><CSSReset/>{children}</ChakraProvider>
    </CacheProvider>
  );
}
