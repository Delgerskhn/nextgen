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
  onSubmit: Function;
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
            ● Монгол Улсын иргэн байх <br />
            ● 15-34 настай байх
            <br />
            ● Олон нийтийн эрх ашигт нийцсэн байх
            <br />
            ● Тухайн орон нутаг болон харьяа газартаа хэрэгжих боломжтой байх
            <br />
            ● Төслийн үйл ажиллагаа ашиг сонирхлын зөрчилгүй байх
            <br />
            ● Төслийн хүрэх үр дүн тодорхой, бодитой байх
            <br />
            ● Төслийг цаашид үргэлжлүүлэх, өргөжүүлэн хэрэгжүүлэх боломжтой байх
            <br />
          </Text>
          <Checkbox
            checked={checked}
            defaultChecked={false}
            as="a"
            mt="6"
            onChange={(e: any) => setChecked(e.target.checked)}
          >
            Дээрх нөхцлүүдийг зөвшөөрч байна.
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
