import {
  Tr,
  Td,
  Collapse,
  Text,
  Box,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useSignedUrl } from "@lib/file/data/uploadHooks";
import { ProjectModel } from "../data/types";

export const ProjectTableRow = ({ project }: { project: ProjectModel }) => {
  const { isOpen, onToggle } = useDisclosure();
  const teamIntroFile = useSignedUrl(project.teamIntroFile ?? undefined);
  const projectIntroFile = useSignedUrl(project.projectIntroFile ?? undefined);
  const projectDocFile = useSignedUrl(project.projectDocFile ?? undefined);
  return (
    <>
      <Tr cursor={"pointer"} onClick={onToggle}>
        <Td>{`${project?.lastName && project?.lastName[0]}. ${
          project.firstName
        }`}</Td>
        <Td>{project.email}</Td>
        <Td>{project.phoneNumber}</Td>
        <Td>{project.teamIntroFile ? "Илгээсэн" : "Илгээгээгүй"}</Td>
        <Td>{project.projectIntroFile ? "Илгээсэн" : "Илгээгээгүй"}</Td>
        <Td>{project.projectDocFile ? "Илгээсэн" : "Илгээгээгүй"}</Td>
      </Tr>
      <Tr>
        <Td p={0} colSpan={6}>
          <Collapse in={isOpen} animateOpacity>
            <HStack wrap={"wrap"} flexWrap="wrap" bg="gray.50" padding={"6"}>
              {project.teamIntroFile && teamIntroFile.isFetched && (
                <Box rounded={"sm"} boxShadow="lg" bg="white" p="4" m="3">
                  <Text>Багийн танилцуулга</Text>
                  <video width="320" height="240" controls>
                    <source src={teamIntroFile.data?.url} type="video/mp4" />
                    <source src={teamIntroFile.data?.url} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                  <Link
                    color={"blue.400"}
                    href={teamIntroFile.data?.url}
                    target="_blank"
                  >
                    Татаж авах
                  </Link>
                </Box>
              )}
              {project.projectIntroFile && projectIntroFile.isFetched && (
                <Box rounded={"sm"} boxShadow="lg" bg="white" p="4" m="3">
                  <Text>Төслийн танилцуулга</Text>
                  <video width="320" height="240" controls>
                    <source src={projectIntroFile.data?.url} type="video/mp4" />
                    <source src={projectIntroFile.data?.url} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                  <Link
                    color={"blue.400"}
                    href={projectIntroFile.data?.url}
                    target="_blank"
                  >
                    Татаж авах
                  </Link>
                </Box>
              )}
              {project.projectDocFile && (
                <Box rounded={"sm"} boxShadow="lg" bg="white" p="4" m="3">
                  <Text>Төслийн бичиг баримт</Text>
                  <Link
                    color={"blue.400"}
                    href={projectDocFile.data?.url}
                    target="_blank"
                  >
                    Татаж авах
                  </Link>
                </Box>
              )}
            </HStack>
          </Collapse>
        </Td>
      </Tr>
    </>
  );
};
