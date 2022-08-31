import { useDebouncedState, useDebouncedValue } from "@mantine/hooks";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Stack,
} from "@ui/index";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RiAddFill, RiArrowRightUpLine } from "react-icons/ri";
import { useProjects } from "../data/projectHooks";

export const ProjectTableActions = ({ page }: { page: number }) => {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 300);
  useEffect(() => {
    if (debounced.length > 3) refetch();
  }, [debounced]);
  const { refetch } = useProjects(page, value);
  return (
    <Stack
      spacing="4"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
    >
      <HStack>
        <FormControl minW={{ md: "320px" }} id="search">
          <InputGroup size="sm">
            <InputRightElement mr="3" pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputRightElement>
            <Input
              value={value}
              onChange={(e) => setValue(e.currentTarget.value)}
              rounded="base"
              type="search"
              placeholder="Нэр, и-мэйл, төсөл хайх..."
            />
          </InputGroup>
        </FormControl>
      </HStack>
    </Stack>
  );
};
