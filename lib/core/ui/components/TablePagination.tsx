import { useUsers } from "@lib/user/data/userHooks";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Text,
  useColorModeValue,
} from "@ui/index";
import { fetcher } from "@util/query";
import { useState } from "react";
import { useQuery } from "react-query";

type Props = {
  dataName: string;
  onChange: (p: number) => void;
  page: number;
};

export const TablePagination = ({ dataName, onChange, page }: Props) => {
  const { data } = useUsers(page);

  return (
    <Flex align="center" justify="space-between">
      <HStack>
        <Text color={useColorModeValue("gray.600", "gray.400")} size="sm">
          {data?.total} {dataName}
        </Text>
        <Text>
          хуудас {page}/{data?.totalPage}
        </Text>
      </HStack>
      <ButtonGroup variant="outline" size="sm">
        <Button
          onClick={() => page > 0 && onChange(page - 1)}
          as="a"
          disabled={!(page > 0)}
          rel="prev"
        >
          Previous
        </Button>
        <Button
          disabled={!(data?.totalPage! > page)}
          onClick={() => data?.totalPage! > page && onChange(page + 1)}
          as="a"
          rel="next"
        >
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
