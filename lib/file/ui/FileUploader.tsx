import { Flex, IconButton, Icon, Input, Text, Button } from "@chakra-ui/react";
import { toaster } from "@ui/index";
import { useEffect, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { useValidateResourceSize } from "../data/validation";

type PropsType = {
  onUpload: (f: File) => void;
  onDelete: (key: string) => void;
  accept?: string;
  maxSize: number;
  disabled: boolean;
  defaultFileKey?: string;
};

export const FileUploader = ({
  defaultFileKey,
  onUpload,
  disabled,
  maxSize,
  accept,
  onDelete,
}: PropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const validate = useValidateResourceSize(maxSize);
  useEffect(() => {
    if (defaultFileKey) setIsLoading(false);
  }, [defaultFileKey]);
  function onSave() {
    return alert("Төсөл хүлээн авах хугацаа дууссан байна.");
    // if (inputRef?.current?.files && inputRef?.current?.files[0]) {
    //   if (validate(inputRef.current?.files[0]) == false)
    //     return toaster.error(
    //       `Файлын хэмжээ ${Math.floor(maxSize / 1000000)} mb байх ёстой.`
    //     );
    //   setIsLoading(true);
    //   onUpload(inputRef.current?.files[0]);
    // }
  }
  return (
    <>
      {defaultFileKey ? (
        <Flex
          border="1px"
          py="1"
          justify={"space-between"}
          px="3"
          borderColor={"gray.300"}
          rounded="md"
        >
          <Text color="gray.500">{defaultFileKey}</Text>
          <IconButton
            onClick={() => onDelete(defaultFileKey)}
            size="sm"
            colorScheme={"red"}
            bg="red.500"
            aria-label=""
            icon={<Icon as={BiTrash} />}
          ></IconButton>
        </Flex>
      ) : (
        <Flex>
          <Input
            type="file"
            multiple={false}
            disabled={disabled}
            accept={accept}
            ref={(e: any) => {
              inputRef.current = e;
            }}
          />
          <Button color="white" isLoading={isLoading} onClick={onSave}>
            Хадгалах
          </Button>
        </Flex>
      )}
    </>
  );
};
