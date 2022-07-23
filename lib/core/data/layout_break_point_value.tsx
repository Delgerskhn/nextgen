import { useBreakpointValue } from "@chakra-ui/react";
import React from "react";
export const useLayoutBreakPointValue = () => {
  let variant = useBreakpointValue({ base: 20, md: 30, lg: 40 });
  return { base: variant };
};
