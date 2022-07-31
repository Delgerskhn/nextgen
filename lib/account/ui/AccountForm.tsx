import { removeFromS3, uploadToS3 } from "@lib/file/data/uploadHooks";
import { Account } from "@prisma/client";
import { toaster } from "@ui/index";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useUpdateAccount,
  useCreateAccount,
  useAccount,
} from "../data/accountHook";

type AccountInput = Pick<
  Account,
  "firstName" | "lastName" | "age" | "sex" | "id" | "pictureKey" | "userId"
>;
export const AccountForm = () => {
  const { data } = useAccount();
  const onRemove = (key: string) => {
    removeFromS3(key)
      .then((key) => {})
      .catch((e) => toaster.error("Алдаа гарлаа."));
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountInput>({
    defaultValues: { ...data },
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const updateAccount = useUpdateAccount();
  const uploadImg = () => {
    const f: File | null | undefined =
      inputRef?.current?.files && inputRef?.current?.files[0];
    if (!f) return;
    return new Promise<string>((res, rej) => {
      uploadToS3(f)
        .then((key) => {
          res(key);
        })
        .catch((e) => {
          toaster.error("Зураг хадгалах үед алдаа гарлаа.");
          rej(e);
        });
    });
  };
  const onSubmit = handleSubmit(async (accInput) => {
    if (pictureKey) onRemove(pictureKey);
    const key = await uploadImg();
    if (key) accInput.pictureKey = key;
    updateAccount.mutate(
      { ...accInput },
      {
        onError: () => toaster.error("Алдаа гарлаа."),
        onSuccess: () => toaster.success(""),
      }
    );
  });
  return <form></form>;
};
