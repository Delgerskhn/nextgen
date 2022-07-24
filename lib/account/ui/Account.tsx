import { Avatar, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { Account } from "@prisma/client";

type PropsType = Pick<Account, "firstName" | "lastName" | "age" | "sex">;

export const AccountInfo = ({ firstName, lastName, age, sex }: PropsType) => {
  return (
    <SimpleGrid columns={5}>
      <Avatar></Avatar>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
      <Text>{age}</Text>
      <Text>{sex}</Text>
    </SimpleGrid>
  );
};
