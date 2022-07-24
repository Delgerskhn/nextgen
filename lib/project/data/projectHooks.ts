import { Project } from "@prisma/client";
import { fetcher } from "@util/query";
import { useMutation } from "react-query";

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
    fetcher.post("project", data)
  );
};

export const useCreateProject = () => {
  return useMutation((data: ProjectUpdateInput) =>
    fetcher.post("project", data)
  );
};
