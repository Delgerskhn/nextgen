import { Account } from "@prisma/client";

export type AccountCreateInput = Pick<
  Account,
  | "firstName"
  | "lastName"
  | "age"
  | "sex"
  | "userId"
  | "birthDate"
  | "city"
  | "district"
  | "education"
  | "emergencyPhoneNumber"
  | "emergencyPhoneOwner"
  | "familyName"
  | "nationality"
  | "occupation"
  | "phoneNumber"
  | "profession"
  | "registerNo"
  | "street"
>;
export type AccountUpdateInput = Pick<
  Account,
  "firstName" | "lastName" | "age" | "sex" | "id" | "pictureKey"
>;

export type AccountInput = Pick<
  Account,
  | "firstName"
  | "lastName"
  | "age"
  | "sex"
  | "id"
  | "pictureKey"
  | "userId"
  | "birthDate"
  | "city"
  | "district"
  | "education"
  | "emergencyPhoneNumber"
  | "emergencyPhoneOwner"
  | "familyName"
  | "nationality"
  | "occupation"
  | "phoneNumber"
  | "profession"
  | "registerNo"
  | "street"
> & {
  email: string | null;
};
