import {
  Avatar,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Icon,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { removeFromS3, uploadToS3 } from "@lib/file/data/uploadHooks";
import { FileUploader } from "@lib/file/ui/FileUploader";
import { Account } from "@prisma/client";
import { toaster } from "@ui/index";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { BiEdit, BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { useAccounts, useUpdateAccount } from "../data/accountHook";
import { S3Avatar } from "./S3Avatar";

type PropsType = Pick<
  Account,
  "firstName" | "lastName" | "age" | "sex" | "pictureKey" | "id" | "userId"
>;

export const AccountInfo = ({
  firstName,
  lastName,
  age,
  sex,
  pictureKey,
  userId,
  id,
}: PropsType) => {
  const {
    isOpen: isEditing,
    onOpen: onEdit,
    onClose: onSave,
  } = useDisclosure();

  if (isEditing)
    return (
      <EditAccountInfo
        onSave={onSave}
        {...{ firstName, lastName, age, sex, pictureKey, id, userId }}
      />
    );

  return (
    <Tr>
      <Td>
        <S3Avatar src={pictureKey || undefined} />
      </Td>
      <Td>{firstName}</Td>
      <Td>{lastName}</Td>
      <Td isNumeric>{age}</Td>
      <Td>{sex}</Td>
      <Td>
        <IconButton
          onClick={onEdit}
          aria-label=""
          icon={<Icon as={BiEdit} />}
        />
      </Td>
    </Tr>
  );
};

type AccountInput = Pick<
  Account,
  "firstName" | "lastName" | "age" | "sex" | "id" | "pictureKey"
>;

const EditAccountInfo = ({
  pictureKey,
  firstName,
  lastName,
  id,
  age,
  sex,
  userId,
  onSave,
}: PropsType & {
  onSave: () => void;
}) => {
  const { refetch } = useAccounts(userId);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AccountInput>({
    defaultValues: {
      firstName,
      id,
      lastName,
      age,
      sex,
      pictureKey,
    },
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
        onSuccess: () => refetch(),
      }
    );
    onSave();
  });
  const onRemove = (key: string) => {
    removeFromS3(key)
      .then((key) => {})
      .catch((e) => toaster.error("Алдаа гарлаа."));
  };
  return (
    <Tr>
      <Td>
        <Input
          type="file"
          multiple={false}
          accept="image/*"
          ref={(e: any) => {
            inputRef.current = e;
          }}
        />
      </Td>
      <Td>
        <FormControl id="firstName" isRequired isInvalid={!!errors.firstName}>
          <Input
            type="text"
            {...register("firstName", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td>
        <FormControl id="lastName" isInvalid={!!errors.lastName}>
          <Input
            type="text"
            {...register("lastName", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td isNumeric>
        <FormControl id="lastName" isInvalid={!!errors.lastName}>
          <Select
            type="number"
            {...register("age", {
              required: "This is required",
              valueAsNumber: true,
            })}
          >
            {new Array(100).fill(0).map((_, i) => (
              <option>{i + 1}</option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td>
        <FormControl id="lastName" isInvalid={!!errors.lastName}>
          <Select
            type="text"
            {...register("sex", {
              required: "This is required",
            })}
          >
            <option>Male</option>
            <option>Female</option>
          </Select>
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td>
        <IconButton
          onClick={onSubmit}
          mr="3"
          aria-label=""
          icon={<Icon as={BiSave} />}
        />
        <IconButton
          onClick={onSave}
          aria-label=""
          bg="red.500"
          icon={<Icon color="white" as={GiCancel} />}
        />
      </Td>
    </Tr>
  );
};
