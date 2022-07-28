import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
export const useLayoutBreakPointValue = () => {
  let variant = useBreakpointValue({
    base: 10,
    sm: 20,
    md: 30,
    lg: "5%",
    xl: "10%",
  });
  return { base: variant };
};
