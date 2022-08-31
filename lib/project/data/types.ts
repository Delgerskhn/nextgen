import { Account, Project } from "@prisma/client";

export type ProjectModel = {
  type?: string | null;
  name?: string | null;
  teamName?: string | null;
  city?: string | null;
  district?: string | null;
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
