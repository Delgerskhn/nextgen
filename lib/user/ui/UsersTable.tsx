import { TableContent, TablePagination } from "@ui/index";
import { User, useUsers } from "@lib/user/data/userHooks";
import { UsersTableActions } from "./UserTableActions";
import { UserDescription } from "./UserDescription";
import { useState } from "react";

export const columns = [
  {
    Header: "Member",
    Cell(data: User) {
      return <UserDescription {...data} />;
    },
  },
  {
    Header: "Role",
    accessor: "role",
  },
];

export const UsersTable = () => {
  const [page, setPage] = useState<number>(0);
  const { data } = useUsers(page);
  return (
    <>
      <UsersTableActions />
      <TableContent columns={columns} data={data} />
      <TablePagination
        page={page}
        onChange={setPage}
        dataName="users"
        data={data}
      />
    </>
  );
};
