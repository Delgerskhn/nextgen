import { Box, TableContent, TablePagination } from "@ui/index";
import { User, useUsers } from "@lib/user/data/userHooks";
import { UsersTableActions } from "./UserTableActions";
import { UserDescription } from "./UserDescription";
import { useState } from "react";
import { UserModel } from "../data/types";
import { useDebouncedState } from "@mantine/hooks";

export const columns = [
  {
    Header: "Имэйл",
    accessor: "email",
  },
  {
    Header: "Ургийн овог",
    accessor: "familyName",
  },
  {
    Header: "Овог",
    accessor: "lastName",
  },
  {
    Header: "Нэр",
    accessor: "firstName",
  },
  {
    Header: "Төрсөн өдөр",
    Cell: (data: UserModel) => {
      return <>{data.birthDate?.toString().split("T")[0]}</>;
    },
  },
  {
    Header: "Аймаг/Хот",
    accessor: "city",
  },
  {
    Header: "Сум/Дүүрэг",
    accessor: "district",
  },
  {
    Header: "Боловсрол",
    accessor: "education",
  },
  {
    Header: "Мэргэжил",
    accessor: "profession",
  },
  {
    Header: "Утас",
    accessor: "phoneNumber",
  },
  {
    Header: "Яаралтай үед холбоо барих утас",
    accessor: "emergencyPhoneNumber",
  },
  {
    Header: "Хэн болох",
    accessor: "emergencyPhoneOwner",
  },
  {
    Header: "Улс",
    accessor: "nationality",
  },
  {
    Header: "Ажил",
    accessor: "occupation",
  },
  {
    Header: "Регистр",
    accessor: "registerNo",
  },
  {
    Header: "Хаяг",
    accessor: "street",
  },
  {
    Header: "Хүйс",
    accessor: "sex",
  },
];

export const UsersTable = () => {
  const [page, setPage] = useState<number>(0);
  const { data } = useUsers(page);
  return (
    <>
      <UsersTableActions page={page} />
      <Box w="100vw" overflow={"scroll"}>
        <TableContent columns={columns} data={data?.users || []} />
      </Box>
      <TablePagination page={page} onChange={setPage} dataName="үр дүн" />
    </>
  );
};
