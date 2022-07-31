import { SystemStyleObject } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  borderRadius: "3px",
};

const sizes: Record<string, SystemStyleObject> = {
  md: {
    px: "24px",
  },
};

const variants = {
  solid: {
    bg: "green.500",
    _hover: {
      bg: "green.300",
    },
  },
  outline: {
    color: "primeBlue",
    bg: "transparent",
    _hover: {
      bg: "primeBlue",
      color: "white",
    },
    size: "md",
    borderColor: "primeBlue",
  },
  outlinelight: {
    color: "white",
    bg: "transparent",
    _hover: {
      bg: "green.900",
    },
    size: "sm",
    borderColor: "green.500",
    fontWeight: "100",
    borderWidth: "1px",
  },
  control: {
    bg: "green.500",
    _hover: {
      bg: "green.300",
    },
    size: "md",
    borderColor: "green.500",
    color: "white",
  },
  info: {
    size: "md",
    borderRadius: "20px",
    bg: "gray.850",
    _hover: {
      bg: "gray.850",
    },
    color: "gray.400",
    fontWeight: "400",
    px: 3,
  },
};

const defaultProps = {
  size: "md",
  variant: "solid",
  casing: "capitalize",
};

const Button = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
};

export default Button;
