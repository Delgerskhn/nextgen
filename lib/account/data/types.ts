import { Account } from "@prisma/client";

export type AccountCreateInput = Pick<
  Account,
  "firstName" | "lastName" | "userId" | "age" | "sex" | "pictureKey"
>;
export type AccountUpdateInput = Pick<
  Account,
  "firstName" | "lastName" | "age" | "sex" | "id" | "pictureKey"
>;
