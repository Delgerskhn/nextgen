import { TableContent, TablePagination } from "@ui/index";
import { User, useUsers } from "@lib/user/data/userHooks";
import { UsersTableActions } from "./UserTableActions";
import { UserDescription } from "./UserDescription";

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
  const { data } = useUsers();
  return (
    <>
      <UsersTableActions />
      <TableContent columns={columns} data={data} />
      <TablePagination dataName="users" data={data} />
    </>
  );
};
