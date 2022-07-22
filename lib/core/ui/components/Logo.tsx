import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export const Logo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string }
) => {
  const { iconColor = "currentColor", ...rest } = props;
  return (
    <chakra.svg viewBox="0 0 174 68" {...rest}>
     <text x="20" y="35" >elearn</text>
    </chakra.svg>
  );
};
