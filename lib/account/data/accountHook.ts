import { fetcher } from "@util/query";
import { useMutation } from "react-query";
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
