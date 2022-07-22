import { prisma } from "@api/prisma";
import { Ability, subject } from "@casl/ability";
import { AppError, ERROR_MESSAGES } from "@util/errors";
import { Profile } from "@prisma/client";
import { changeEmail } from "@lib/user/api/service";

interface GetProfileInput {
  ability: Ability;
  userId: string;
}

export const getProfile = async ({ ability, userId }: GetProfileInput) => {
  if (!ability.can("read", subject("Profile", { userId }))) {
    throw new AppError(401, ERROR_MESSAGES.UNAUTHORIZED, "unauthorized");
  }

  return prisma.profile.findUnique({ where: { userId } });
};

interface UpdateProfileInput {
  ability: Ability;
  userId: string;
  firstName: string;
  lastName: string;
  firstNameEng: string;
  lastNameEng: string;
  birthDate: string;
  country: string;
  emailAddress: string;
  language: string;
  sex: string;
}

export const updateProfile = async ({
  ability,
  userId,
  firstName,
  lastName,
  firstNameEng,
  lastNameEng,
  birthDate,
  emailAddress,
  country,
  language,
  sex,
}: UpdateProfileInput) => {
  if (!ability.can("update", subject("Profile", { userId }))) {
    throw new AppError(401, ERROR_MESSAGES.UNAUTHORIZED, "unauthorized");
  }
  await changeEmail({ userId, email: emailAddress });

  return prisma.profile.upsert({
    where: { userId },
    update: {
      firstName,
      lastName,
      firstNameEng,
      lastNameEng,
      language,
      country,
      birthDate: new Date(birthDate),
      sex,
    },
    create: {
      userId,
      firstName,
      lastName,
      firstNameEng,
      lastNameEng,
      language,
      country,
      birthDate: new Date(birthDate),
      sex,
    },
  });
};

interface ToggleNotifyInput {
  ability: Ability;
  userId: string;
  toggleName: string;
}

export const toggleNotify = async ({
  ability,
  userId,
  toggleName,
}: ToggleNotifyInput) => {
  if (!ability.can("update", subject("Profile", { userId }))) {
    throw new AppError(401, ERROR_MESSAGES.UNAUTHORIZED, "unauthorized");
  }

  const profile = await prisma.profile.findUnique({ where: { userId } });
  const toggleValue = !!profile && !profile[toggleName as keyof Profile];

  return prisma.profile.upsert({
    where: { userId },
    update: { [toggleName]: toggleValue },
    create: { userId, [toggleName]: toggleValue },
  });
};
