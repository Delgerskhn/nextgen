import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@ui/index";
import { ReactNode } from "react";

type Column = {
  Cell?: (data: any) => JSX.Element;
  Header?: ReactNode;
  accessor?: string;
};

type Props = {
  columns: Column[];
  data: any[];
};

export const TableContent = ({ data, columns }: Props) => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={useColorModeValue("gray.50", "gray.900")}>
        <Tr>
          {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            {columns.map((column, index) => {
              const cell = column.accessor
                ? row[column.accessor as keyof typeof row]
                : row;
              const element = column.Cell?.(cell) ?? cell;

              return (
                <Td whiteSpace="nowrap" key={index}>
                  {element}
                </Td>
              );
            })}
            <Td textAlign="right">
              <Button variant="link" colorScheme="blue">
                Edit
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
