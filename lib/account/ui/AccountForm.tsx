import { removeFromS3, uploadToS3 } from "@lib/file/data/uploadHooks";
import { Account } from "@prisma/client";
import { CitySelect, DistrictSelect } from "@ui/components/CitySelect";
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  toaster,
  VStack,
} from "@ui/index";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  useUpdateAccount,
  useCreateAccount,
  useAccount,
} from "../data/accountHook";
import { AccountInput } from "../data/types";

export const AccountForm = ({
  data,
  onSubmit,
}: {
  data?: AccountInput;
  onSubmit: (a: AccountInput) => void;
}) => {
  const onRemove = (key: string) => {
    removeFromS3(key)
      .then((key) => {})
      .catch((e) => toaster.error("Алдаа гарлаа."));
  };
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<AccountInput>({
    defaultValues: { ...data },
  });
  const city = watch("city");
  console.log(data);
  return (
    <form onSubmit={handleSubmit((input) => onSubmit(input))}>
      <SimpleGrid columnGap={24} rowGap={6} columns={2}>
        <FormControl isRequired isInvalid={!!errors.nationality}>
          <FormLabel>Иргэншил</FormLabel>
          <Input
            type="text"
            {...register("nationality", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.nationality && errors.nationality.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.familyName}>
          <FormLabel>Ургийн овог</FormLabel>
          <Input
            type="text"
            {...register("familyName", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.familyName && errors.familyName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.lastName}>
          <FormLabel>Эцэг / Эхийн нэр</FormLabel>
          <Input
            type="text"
            {...register("lastName", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.firstName}>
          <FormLabel>Өөрийн нэр</FormLabel>
          <Input
            type="text"
            {...register("firstName", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="sex" isRequired isInvalid={!!errors.sex}>
          <FormLabel>Хүйс</FormLabel>
          <Select
            type="text"
            {...register("sex", {
              required: "Заавал",
            })}
          >
            <option>Эрэгтэй</option>
            <option>Эмэгтэй</option>
          </Select>
          <FormErrorMessage>
            {errors.sex && errors.sex.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.birthDate}>
          <FormLabel>Төрсөн огноо</FormLabel>
          <Input
            type="date"
            {...register("birthDate", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.birthDate && errors.birthDate.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.registerNo}>
          <FormLabel>Регистрийн дугаар</FormLabel>
          <Input
            type="text"
            {...register("registerNo", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.registerNo && errors.registerNo.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>И-мэйл хаяг</FormLabel>
          <Input
            type="email"
            {...register("email", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.phoneNumber}>
          <FormLabel>Гар утас</FormLabel>
          <Input
            type="text"
            {...register("phoneNumber", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.phoneNumber && errors.phoneNumber.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columnGap={24} rowGap={6} columns={2}>
        <FormControl isRequired isInvalid={!!errors.emergencyPhoneNumber}>
          <FormLabel>Яаралтай үед холбоо барих дугаар</FormLabel>
          <Input
            type="text"
            {...register("emergencyPhoneNumber", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.emergencyPhoneNumber && errors.emergencyPhoneNumber.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.emergencyPhoneOwner}>
          <FormLabel>Таны хэн болох</FormLabel>
          <Input
            type="text"
            {...register("emergencyPhoneOwner", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.emergencyPhoneOwner && errors.emergencyPhoneOwner.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <Heading mt="6" size={"md"}>
        Оршин суугаа хаяг
      </Heading>
      <Divider my="4" />
      <SimpleGrid columnGap={24} rowGap={6} columns={2}>
        <FormControl id="city" isRequired isInvalid={!!errors.city}>
          <FormLabel>Хот / Аймаг</FormLabel>
          <CitySelect
            register={register("city", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="district" isRequired isInvalid={!!errors.district}>
          <FormLabel>Дүүрэг / Сум</FormLabel>
          <DistrictSelect
            city={city}
            register={register("district", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.district && errors.district.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <VStack gap="4" mt="4">
        <FormControl isRequired isInvalid={!!errors.street}>
          <FormLabel>Хаягийн дэлгэрэнгүй</FormLabel>
          <Input
            type="text"
            {...register("street", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.street && errors.street.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.education}>
          <FormLabel>Боловсрол</FormLabel>
          <Select
            type="text"
            {...register("education", {
              required: "Заавал",
            })}
          >
            <option>Бага боловсрол</option>
            <option>Бүрэн бус дунд</option>
            <option>Бүрэн дунд</option>
            <option>Дээд боловсрол</option>
          </Select>
          <FormErrorMessage>
            {errors.education && errors.education.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.profession}>
          <FormLabel>Эзэмшсэн мэргэжил</FormLabel>
          <Input
            type="text"
            {...register("profession", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.profession && errors.profession.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.occupation}>
          <FormLabel>Одоо эрхэлж буй ажил</FormLabel>
          <Input
            type="text"
            {...register("occupation", {
              required: "Заавал",
            })}
          />
          <FormErrorMessage>
            {errors.occupation && errors.occupation.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>

      <Button mt="4" color="white" type="submit">
        Хадгалах
      </Button>
    </form>
  );
};
