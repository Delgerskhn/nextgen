import {
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};
export const TermsModal = ({ isOpen, onClose, onSubmit }: Props) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(false);
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Тавигдах шаардлагууд</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </Text>
          <Checkbox
            checked={checked}
            defaultChecked={false}
            as="a"
            mt="6"
            onChange={(e: any) => setChecked(e.target.checked)}
          >
            Дээрх нөхцлүүдийг зөвшөөр байна.
          </Checkbox>
        </ModalBody>

        <ModalFooter>
          <Button
            bg={"blue.400"}
            mr={3}
            disabled={!checked}
            onClick={() => {
              onSubmit();
              onClose();
            }}
          >
            Бүртгүүлэх
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
