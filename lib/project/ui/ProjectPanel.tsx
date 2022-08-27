import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  useDisclosure,
  Box,
  Collapse,
} from "@chakra-ui/react";
import { ProjectTable } from "./ProjectTable";

export const ProjectPanel = () => {
  return (
    <>
      <ProjectTable />
    </>
  );
};
