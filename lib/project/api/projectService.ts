import { prisma } from "@api/prisma";
import { Project } from "@prisma/client";

export const createProject = (data: Project) => {
  return prisma.project.create({
    data: data,
  });
};

export const updateProject = (data: Project) => {
  return prisma.project.update({
    where: {
      userId: data.userId,
    },
    data: data,
  });
};

export const getProjectByUserId = (userId: string) => {
  return prisma.project.findUnique({
    where: {
      userId,
    },
  });
};
