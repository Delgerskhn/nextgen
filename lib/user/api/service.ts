import { compare, hash } from "bcryptjs";
import { prisma } from "@api/prisma";
import { String } from "aws-sdk/clients/cloudtrail";
import { getCurrentDate } from "@api/currentDate";
import { SignupInput } from "@lib/auth/data/types";
import { AppError, ERROR_MESSAGES } from "@util/errors";

const saltRounds = 10;

const defaultSelect = {
  id: true,
  email: true,
  emailVerified: true,
  role: true,
  updatedAt: true,
  createdAt: true,
  passwordDigest: false,
  profile: true,
};

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const getUser = async (email: string) => {
  return prisma.user.findUnique({
    where: { email: email },
    select: defaultSelect,
  });
};
export const manageExternalUser = async (
  email: string,
  provider: string,
  providerAccountId: string,
  id: string,
  accessToken: string,
  refreshToken: string
) => {
  const account = await prisma.account.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  if (account) {
    return account.user;
  } else {
    const user = await prisma.user.create({
      data: {
        email: email ? email : "",
      },
      select: defaultSelect,
    });

    await prisma.account.create({
      data: {
        userId: user.id,
        lastName: "",
        firstName: "",
      },
    });
    return user;
  }
};
export const getUserPasswordDigest = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  const passwordDigest = user?.passwordDigest;
  // @ts-expect-error
  if (user) delete user.passwordDigest;
  return { user, passwordDigest };
};
export const getUserPasswordDigestById = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user?.passwordDigest;
};
export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: defaultSelect,
  });
};
export const createUser = async ({ email, password }: SignupInput) => {
  console.log("Password here:", password);
  if (
    (await prisma.user.count({
      where: {
        email,
      },
    })) > 0
  )
    throw new AppError(400, ERROR_MESSAGES.BAD_REQUEST, "already-have-account");
  const passwordDigest = await hash(password, saltRounds);
  return prisma.user.create({
    data: {
      email,
      passwordDigest,
    },
    select: defaultSelect,
  });
};
export const createExternalUser = async (email: string) => {
  return prisma.user.create({
    data: { email, passwordDigest: "" },
    select: defaultSelect,
  });
};
export const compareUserPassword = async (userId: string, password: string) => {
  const userPassword = (await getUserPasswordDigestById(userId)) || "";
  return compare(password, userPassword);
};
export const checkEmailNotExists = async (email: string) => {
  return (await prisma.user.count({ where: { email } })) === 0;
};
export const changeEmail = async ({
  userId,
  email,
}: {
  userId: string;
  email: string;
}) => {
  await prisma.user.update({
    where: { id: userId },
    data: { email },
  });
  return {};
};
export const changePassword = async ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) => {
  const passwordDigest = await hash(password, saltRounds);
  console.log("changingPassword", userId, password);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordDigest },
  });
  return {};
};
