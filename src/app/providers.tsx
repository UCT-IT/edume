"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: "#3898ec",
  secondary: "#fff",
  tertiary: "#8bc220",
  buttonHoverd: "#5AA8EC",
  textColor: "#555",
  footerLinksColor: "#ffffffad",
};
const breakpoints = {
  base: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

export const theme = extendTheme({ colors, breakpoints });

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
