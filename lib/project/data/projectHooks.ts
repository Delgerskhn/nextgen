import { Project } from "@prisma/client";
import { fetcher } from "@util/query";
import { useMutation, useQuery } from "react-query";
import { ProjectResponse } from "./types";

export type ProjectUpdateInput = {
  id?: string;
  name?: string;
  userId?: string;
  teamIntroFile?: string;
  projectIntroFile?: string;
  projectDocFile?: string;
};
export const useUpdateProject = () => {
  return useMutation((data: ProjectUpdateInput) =>
    fetcher.put("project", data)
  );
};

export const useCreateProject = () => {
  return useMutation((data: ProjectUpdateInput) =>
    fetcher.post("project", data)
  );
};

export const useProject = (userId: string | undefined) => {
  return useQuery<Project | null>(["project", userId], () =>
    userId ? fetcher.get(`project/${userId}`) : null
  );
};

export const useProjects = (page?: number, q?: string) => {
  return useQuery<ProjectResponse>(["projects", { page }], () =>
    fetcher.get("/project", { page, q })
  );
};
