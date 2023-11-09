"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#3898ec",
  secondary: "#fff",
  tertiary: "#8bc220",
  buttonHoverd: "#5AA8EC",
  textColor: "#555",
};

export const theme = extendTheme({ colors });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
