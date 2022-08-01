import { Account } from "@prisma/client";
import { fetcher } from "@util/query";
import { useMutation, useQuery } from "react-query";
import { AccountCreateInput, AccountInput, AccountUpdateInput } from "./types";

export const useCreateAccount = () => {
  return useMutation((data: AccountCreateInput) =>
    fetcher.post("account", data)
  );
};

export const useUpdateAccount = () => {
  return useMutation((data: AccountInput) => fetcher.put("account", data));
};

export const useAccounts = (userId: string | undefined) => {
  return useQuery<Account[]>(
    ["account", userId],
    () => fetcher.get(`account/${userId}`),
    { cacheTime: 0, staleTime: 0 }
  );
};

export const useAccount = () => {
  return useQuery<AccountInput>(["myAccount"], async () => {
    let resp = await fetcher.get(`account/me`);
    if (resp.birthDate) resp.birthDate = resp.birthDate.split("T")[0];
    return resp;
  });
};
