import { Button, ButtonGroup, Flex, Text, useColorModeValue } from "@ui/index";
import { fetcher } from "@util/query";
import { useState } from "react";
import { useQuery } from "react-query";

type Props = {
  dataName: string;
  data: any[];
  onChange: (p: number) => void;
  page: number;
};

export const TablePagination = ({ dataName, onChange, page }: Props) => {
  const { data } = useQuery<{ total: number }>("summary", () =>
    fetcher.get("/users/summary")
  );

  return (
    <Flex align="center" justify="space-between">
      <Text color={useColorModeValue("gray.600", "gray.400")} size="sm">
        {data?.total} {dataName}
      </Text>
      <ButtonGroup variant="outline" size="sm">
        <Button
          onClick={() => page > 0 && onChange(page - 1)}
          as="a"
          rel="prev"
        >
          Previous
        </Button>
        <Button onClick={() => onChange(page + 1)} as="a" rel="next">
          Next
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
