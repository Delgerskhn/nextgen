import { Account } from "@prisma/client";

export type ProjectModel = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  teamIntroFile?: string | null;
  projectIntroFile?: string | null;
  projectDocFile?: string | null;
};

export type ProjectResponse = {
  projects: ProjectModel[];
  total: number;
  totalPage: number;
};
