import { Flex, IconButton, Icon, Input, Text, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { BiTrash } from "react-icons/bi";

type PropsType = {
  onUpload: (f: File) => void;
  onDelete: (key: string) => void;
  accept?: string;
  defaultFileKey?: string;
};

export const FileUploader = ({
  defaultFileKey,
  onUpload,
  accept,
  onDelete,
}: PropsType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function onSave() {
    if (inputRef?.current?.files && inputRef?.current?.files[0])
      onUpload(inputRef.current?.files[0]);
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
            accept={accept}
            disabled
            ref={(e: any) => {
              inputRef.current = e;
            }}
          />
          <Button color="white" onClick={onSave}>
            Хадгалах
          </Button>
        </Flex>
      )}
    </>
  );
};
