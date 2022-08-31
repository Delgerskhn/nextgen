import { prisma } from "@api/prisma";
import { Prisma } from "@prisma/client";
import { Project } from "@prisma/client";
import { ProjectModel, ProjectResponse } from "../data/types";

export const createProject = (data: Project) => {
  return prisma.project.create({
    data: data,
  });
};

export const getProjects = async (
  page: number = 0,
  q?: string
): Promise<ProjectResponse> => {
  const condition: Prisma.UserWhereInput = {
    AND: [
      {
        OR: [
          {
            email: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            project: {
              name: {
                contains: q,
                mode: "insensitive",
              },
            },
          },
          {
            project: {
              teamName: {
                contains: q,
                mode: "insensitive",
              },
            },
          },
          {
            accounts: {
              some: {
                OR: [
                  {
                    firstName: {
                      contains: q,
                      mode: "insensitive",
                    },
                  },
                  {
                    lastName: {
                      contains: q,
                      mode: "insensitive",
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      {
        project: {
          OR: [
            {
              projectDocFile: {
                not: null,
              },
            },
            {
              projectIntroFile: {
                not: null,
              },
            },
            {
              teamIntroFile: {
                not: null,
              },
            },
          ],
        },
      },
    ],
  };
  const projects = await prisma.user.findMany({
    where: condition,
    include: {
      project: true,
      accounts: true,
    },
    skip: 10 * page,
    take: 10,
  });
  const total = await prisma.user.count({ where: condition });
  const totalPage = Math.floor(total / 10);
  const list: ProjectModel[] = [];
  projects.forEach((p) => {
    list.push({
      phoneNumber: p.accounts[0].phoneNumber,
      email: p.email,
      firstName: p.accounts[0].firstName,
      lastName: p.accounts[0].lastName,
      teamIntroFile: p.project?.teamIntroFile,
      projectDocFile: p.project?.projectDocFile,
      projectIntroFile: p.project?.projectIntroFile,
      name: p.project?.name,
      teamName: p.project?.teamName,
      city: p.project?.city,
      district: p.project?.district,
      type: p.project?.type,
    });
  });

  return {
    projects: list,
    total,
    totalPage,
  };
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
