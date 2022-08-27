import { Account, User } from "@prisma/client";

export type UserModel = {
  id: string | null;
  email: string | null;
  firstName: string;
  lastName: string;
  sex: string | null;
  age: number | null;
  nationality: string | null;
  familyName: string | null;
  birthDate: Date | null;
  registerNo: string | null;
  phoneNumber: string | null;
  emergencyPhoneNumber: string | null;
  emergencyPhoneOwner: string | null;
  city: string | null;
  district: string | null;
  street: string | null;
  education: string | null;
  profession: string | null;
  occupation: string | null;
  userId: string;
  createdAt: Date;
};

export type UserListResponse = {
  users: UserModel[];
  total: number;
  totalPage: number;
};
