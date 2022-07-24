import { prisma } from "@api/prisma";
import { Project } from "@prisma/client";

export const createProject = (data: Project) => {
  return prisma.project.create({
    data: data,
  });
};
