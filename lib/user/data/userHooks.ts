import { useQuery, useMutation } from "react-query";
import { fetcher } from "@util/query";

// We should subset this to only interface we need.
import { User as PrismaUser } from "@prisma/client";
export type User = Pick<PrismaUser, "id" | "email" | "role">;

// Get list of all users
export const useUsers = (page: number) => {
  return useQuery(["users", { page }], () => fetcher.get("users", { page }), {
    initialData: [],
  });
};

// Create a new user
export const useCreateUser = () => {
  return useMutation((data: Partial<User>) => fetcher.post("user", data));
};

// Update an existing user
export const useUpdateUser = () => {
  return useMutation((data: User) => fetcher.put(`user/${data.id}`, data));
};
