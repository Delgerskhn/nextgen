import { prisma } from "@api/prisma";
import { Account } from "@prisma/client";

export const createAccount = (data: Account) => {
  return prisma.account.create({
    data: {
      ...data,
      type: "string",
      provider: "string",
      providerAccountId: "string",
    },
  });
};

export const updateAccount = (data: Account) => {
  return prisma.account.update({
    where: {
      id: data.id,
    },
    data: data,
  });
};
