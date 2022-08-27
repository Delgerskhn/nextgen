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
import { useUsers } from "../data/userHooks";

export const UsersTableActions = ({ page }: { page: number }) => {
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200);
  useEffect(() => {
    if (debounced.length > 3) refetch();
  }, [debounced]);
  const { refetch } = useUsers(page, value);
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
              placeholder="Нэр эсвэл и-мэйл хайх..."
            />
          </InputGroup>
        </FormControl>
        {/* <Select
          w={{ base: "300px", md: "unset" }}
          rounded="base"
          size="sm"
          placeholder="All roles"
        >
          <option>All roles</option>
          <option>Students</option>
          <option>Teachers</option>
          <option>Admins</option>
        </Select> */}
      </HStack>
      {/* <ButtonGroup size="sm" variant="outline">
        <Button iconSpacing="1" leftIcon={<RiAddFill fontSize="1.25em" />}>
          New member
        </Button>
        <Button
          iconSpacing="1"
          leftIcon={<RiArrowRightUpLine fontSize="1.25em" />}
        >
          Export CSV
        </Button>
      </ButtonGroup> */}
    </Stack>
  );
};
