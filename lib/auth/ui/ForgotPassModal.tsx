import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { validateEmail } from "@lib/user/data/validators";
import { useForm } from "react-hook-form";
import { useResetPass } from "../data/authHooks";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const ForgotPassModal = ({ isOpen, onOpen, onClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();
  const resetPass = useResetPass();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit((d) => resetPass.mutate(d))}>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel>И-мэйл хаяг</FormLabel>
                <Input
                  {...register("email", {
                    required: "Заавал",
                    validate: (e) => {
                      if (!validateEmail(e)) return "И-мэйл хаяг буруу.";
                      return true;
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                isLoading={resetPass.isLoading}
                my="5"
                type="submit"
                color="white"
              >
                Нууц үг сэргээх
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
