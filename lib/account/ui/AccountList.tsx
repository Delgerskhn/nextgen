import {
  Box,
  Divider,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "@lib/auth/ui";
import { NavContentLayout } from "@ui/components/NavContentLayout";
import { BiPlus } from "react-icons/bi";
import { useAccounts } from "../data/accountHook";
import { AccountInfo } from "./Account";
import { EditAccountInfo } from "./EditAccountInfo";

export const AccountList = () => {
  const { data: user } = useAuth();
  const { data: accounts, refetch } = useAccounts(user?.id);
  const { isOpen: isAdding, onOpen: onAdd, onClose } = useDisclosure();
  const onAccountAdd = () => {
    refetch({});
    onClose();
  };
  return (
    <>
      <Heading size="md">Багийн мэдээллээ оруулна уу.</Heading>
      <Divider my="4" />
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Зураг</Th>
              <Th>Нэр</Th>
              <Th>Овог</Th>
              <Th isNumeric>Нас</Th>
              <Th>Хүйс</Th>
              <Th>
                <IconButton
                  onClick={onAdd}
                  aria-label=""
                  icon={<Icon color="gray.900" as={BiPlus} />}
                />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {isAdding && (
              <EditAccountInfo userId={user?.id} onSave={onAccountAdd} />
            )}
            {accounts?.map((r) => (
              <AccountInfo key={r.id} {...r} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {/* <Box>
        <SimpleGrid columns={5}>
          <Text fontWeight={"bold"} size="md">
            Зураг
          </Text>
          <Text fontWeight={"bold"} size="md">
            Нэр
          </Text>
          <Text fontWeight={"bold"} size="md">
            Овог
          </Text>
          <Text fontWeight={"bold"} size="md">
            Нас
          </Text>
          <Text fontWeight={"bold"} size="md">
            Хүйс
          </Text>
        </SimpleGrid>
        {accounts?.map((r) => (
          <AccountInfo key={r.id} {...r} />
        ))}
      </Box> */}
    </>
  );
};
