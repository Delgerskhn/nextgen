import { useQuery, useMutation } from "react-query";
import { fetcher } from "@util/query";

// We should subset this to only interface we need.
import { User as PrismaUser } from "@prisma/client";
import { UserListResponse, UserModel } from "./types";
export type User = Pick<PrismaUser, "id" | "email" | "role">;

// Get list of all users
export const useUsers = (page: number, q?: string) => {
  return useQuery<UserListResponse>(["users", { page }], () =>
    fetcher.get("users", { page, q })
  );
};

// Create a new user
export const useCreateUser = () => {
  return useMutation((data: Partial<User>) => fetcher.post("user", data));
};

// Update an existing user
export const useUpdateUser = () => {
  return useMutation((data: User) => fetcher.put(`user/${data.id}`, data));
};
