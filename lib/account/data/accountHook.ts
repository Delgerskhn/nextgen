import { Account } from "@prisma/client";
import { fetcher } from "@util/query";
import { useMutation, useQuery } from "react-query";
import { AccountCreateInput, AccountUpdateInput } from "./types";

export const useCreateAccount = () => {
  return useMutation((data: AccountCreateInput) =>
    fetcher.post("account", data)
  );
};

export const useUpdateAccount = () => {
  return useMutation((data: AccountUpdateInput) =>
    fetcher.put("account", data)
  );
};

export const useAccounts = (userId: string | undefined) => {
  return useQuery<Account[]>(["account", userId], () =>
    userId ? fetcher.get(`account/${userId}`) : []
  );
};
