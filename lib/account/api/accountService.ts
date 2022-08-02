import { prisma } from "@api/prisma";
import { Account } from "@prisma/client";
import { AccountInput } from "../data/types";

export const createAccount = (data: Account) => {
  return prisma.account.create({
    data: {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate) : null,
    },
  });
};

export const updateAccount = (data: AccountInput) => {
  prisma.user.updateMany({
    where: {
      accounts: {
        some: {
          id: data.id,
        },
      },
    },
    data: {
      email: data.email,
    },
  });
  return prisma.account.update({
    where: {
      id: data.id,
    },
    data: {
      ...data,
      birthDate: data.birthDate ? new Date(data.birthDate) : null,
    },
  });
};

export const getAccountsByUserId = (userId: string) => {
  return prisma.account.findMany({
    where: {
      userId,
    },
  });
};

export const getMyAccount = (userId: string) => {
  return prisma.account.findFirst({ where: { userId } });
};
