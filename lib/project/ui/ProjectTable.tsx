import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProjects } from "../data/projectHooks";
import { ProjectTableActions } from "./ProjectTableActions";
import { ProjectTableRow } from "./ProjectTableRow";

export const ProjectTable = () => {
  const [page, setPage] = useState<number>(0);
  const { data } = useProjects(page);

  return (
    <>
      <ProjectTableActions page={page} />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Төслийн нэр</Th>
              <Th>Төслийн төрөл</Th>
              <Th>Аймаг</Th>
              <Th>Сум</Th>
              <Th>Багийн нэр</Th>
              <Th>Төсөл оруулсан</Th>
              <Th>Имэйл</Th>
              <Th>Холбогдох дугаар</Th>
              <Th>Багийн танилцуулга</Th>
              <Th>Төслийн танилцуулга</Th>
              <Th>Төслийн бичиг баримт</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.projects.map((p) => (
              <ProjectTableRow project={p} />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>{data?.total} үр дүн</Th>
              <Th>
                {page}/{data?.totalPage} хуудас
              </Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th>
                <ButtonGroup variant="outline" size="sm">
                  <Button
                    onClick={() => page > 0 && setPage(page - 1)}
                    as="a"
                    disabled={!(page > 0)}
                    rel="prev"
                  >
                    Өмнөх
                  </Button>
                  <Button
                    disabled={!(data?.totalPage! > page)}
                    onClick={() => data?.totalPage! > page && setPage(page + 1)}
                    as="a"
                    rel="next"
                  >
                    Дараагийн
                  </Button>
                </ButtonGroup>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
