import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
} from "@chakra-ui/react";
import { PasswordField } from "@lib/auth/ui";
import { useChangeUserPassword } from "@lib/profile/data/profileHooks";
import { validatePassword } from "@lib/user/data/validators";
import { useForm } from "react-hook-form";
import { toaster } from "..";

type formValues = {
  password: string;
  confirmPassword: string;
};

export function ChangePassModal({ userId }: { userId: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<formValues>();
  const { mutate } = useChangeUserPassword();
  const onSubmit = handleSubmit((input) => {
    mutate(
      { ...input, id: userId },
      {
        onSuccess: () => toaster.success("Амжилттай."),
        onError: () => toaster.error("Алдаа гарлаа."),
      }
    );
  });
  return (
    <>
      <Button onClick={onOpen}>Нууц үг</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Хэрэглэгчийн нууц үг солих</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!errors.password}>
              <PasswordField
                id="password-current"
                label={"Шинэ нууц үг"}
                forgotPasswordLabel=""
                error={errors.password}
                {...register("password", {
                  required: "Заавал",
                  validate: (v) => {
                    if (!validatePassword(v))
                      return "Латинаар нэг том үсэг нэг тоо оруулна уу.";
                    return true;
                  },
                  minLength: {
                    value: 8,
                    message: "Дор хаяж 8 үсэг, тоо",
                  },
                })}
              />
            </FormControl>
            <FormControl isInvalid={!!errors.confirmPassword}>
              <PasswordField
                id="password-confirmation"
                label={"Нууц үг дахин оруулах"}
                forgotPasswordLabel=""
                error={errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Заавал",
                  validate: (v) => {
                    const pass = getValues("password");
                    if (v != pass) return "Нууц үгээ зөв давтаж оруулна уу.";
                    return true;
                  },
                  minLength: {
                    value: 8,
                    message: "Дор хаяж 8 үсэг, тоо",
                  },
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Цуцлах
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onSubmit}>
              Солих
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
