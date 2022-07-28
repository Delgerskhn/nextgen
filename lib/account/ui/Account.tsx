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
import { EditAccountInfo } from "./EditAccountInfo";
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
