import { SignupFormInput } from "@lib/auth/data/types";
import { removeFromS3, uploadToS3 } from "@lib/file/data/uploadHooks";
import { Account } from "@prisma/client";
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  toaster,
  VStack,
} from "@ui/index";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { HiEyeOff, HiEye } from "react-icons/hi";
import {
  useUpdateAccount,
  useCreateAccount,
  useAccount,
} from "../data/accountHook";
import { AccountInput } from "../data/types";

export const SignupForm = ({
  data,
  onSubmit,
}: {
  data?: SignupFormInput;
  onSubmit: (a: SignupFormInput) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

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
  } = useForm<SignupFormInput>({
    defaultValues: { ...data },
  });
  const city = watch("city");

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
        <FormControl id="password" isRequired isInvalid={!!errors.password}>
          <FormLabel>Нууц үг</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              {...register("password", {
                required: "Заавал",
                minLength: {
                  value: 8,
                  message: "Хамгийн багадаа 8 үсэг тоо байна.",
                },
              })}
            />
            <InputRightElement>
              <IconButton
                bg="transparent !important"
                variant="ghost"
                aria-label={showPassword ? "Mask password" : "Reveal password"}
                icon={showPassword ? <HiEyeOff /> : <HiEye />}
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              />
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
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
          <Select
            type="text"
            {...register("city", {
              required: "Заавал",
            })}
          >
            {cities().map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl id="district" isRequired isInvalid={!!errors.district}>
          <FormLabel>Дүүрэг / Сум</FormLabel>
          <Select
            type="text"
            {...register("district", {
              required: "Заавал",
            })}
          >
            {getDistricts(city)?.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </Select>
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
        Бүртгүүлэх
      </Button>
    </form>
  );
};
const getDistricts = (city: string | null) => {
  console.log(city);
  if (!city) return [];
  return districts[city];
};
const cities = () => Object.keys(districts);

const districts: { [x: string]: string[] } = {
  "Архангай аймаг": [
    "(Цэцэрлэг)",
    "Батцэнгэл",
    "Булган",
    "Жаргалант",
    "Ихтамир",
    "Өгийнуур",
    "Өлзийт",
    "Өндөр-Улаан",
    "Тариат",
    "Төвшрүүлэх",
    "Хайрхан",
    "Хангай",
    "Хашаат",
    "Хотонт",
    "Цахир",
    "Цэнхэр",
    "Цэцэрлэг",
    "Чулуут",
    "Эрдэнэбулган ",
    "Эрдэнэмандал",
  ],

  "Баян-Өлгий аймаг": [
    "(Өлгий)",
    "Алтай ",
    "Алтанцөгц",
    "Баяннуур",
    "Бугат",
    "Булган",
    "Буянт",
    "Дэлүүн",
    "Ногооннуур ",
    "Сагсай",
    "Толбо",
    "Улаанхус",
    "Цагааннуур",
    "Цэнгэл",
  ],

  "Баянхонгор аймаг": [
    "(Баянхонгор)",
    "Баацагаан",
    "Баянбулаг",
    "Баянговь",
    "Баянлиг",
    "Баян-Овоо",
    "Баян-Өндөр",
    "Баянхонгор",
    "Баянцагаан",
    "Богд",
    "Бөмбөгөр",
    "Бууцагаан",
    "Галуут",
    "Гурванбулаг",
    "Жаргалант",
    "Жинст",
    "Заг",
    "Өлзийт",
    "Хүрээмарал",
    "Шинэжинст",
    "Эрдэнэцогт",
  ],

  "Булган аймаг": [
    "(Булган)",
    "Баян-Агт",
    "Баяннуур",
    "Бугат",
    "Бүрэгхангай",
    "Гурванбулаг",
    "Дашинчилэн",
    "Могод",
    "Орхон",
    "Рашаант",
    "Сайхан",
    "Сэлэнгэ",
    "Тэшиг",
    "Хангал",
    "Хишиг-Өндөр",
    "Хутаг-Өндөр",
  ],

  "Говь-Алтай": [
    "(Алтай)",
    "Алтай",
    "Баян-Уул",
    "Бигэр",
    "Бугат",
    "Дарви",
    "Дэлгэр",
    "Жаргалан",
    "Есөнбулаг",
    "Тайшир",
    "Тонхил",
    "Төгрөг",
    "Халиун",
    "Хөхморьт",
    "Цогт",
    "Цээл",
    "Чандмань",
    "Шарга",
    "Эрдэнэ",
  ],

  "Говьсүмбэр аймаг": ["(Чойр)", "Сүмбэр", "Баянтал", "Шивээговь"],

  "Дархан-Уул аймаг": ["(Дархан)", "Дархан", "Орхон", "Хонгор", "Шарын гол"],
  "Дорноговь аймаг": [
    "(Сайншанд)",
    "Айраг",
    "Алтанширээ",
    "Даланжаргалан",
    "Дэлгэрэх",
    "Замын-Үүд",
    "Иххэт",
    "Мандах",
    "Өргөн",
    "Сайхандулаан",
    "Улаанбадрах",
    "Хатанбулаг",
    "Хөвсгөл",
    "Эрдэнэ",
  ],
  "Дорнод аймаг": [
    "(Чойбалсан)",
    "Баяндун",
    "Баянтүмэн",
    "Баян-Уул",
    "Булган",
    "Гурванзагал",
    "Дашбалбар",
    "Матад",
    "Сэргэлэн",
    "Халхгол",
    "Хөлөнбуйр",
    "Хэрлэн ",
    "Цагаан-Овоо",
    "Чойбалсан",
    "Чулуунхороот",
  ],
  "Дундговь аймаг": [
    "(Мандалговь)",
    "Адаацаг",
    "Баянжаргалан",
    "Говь-Угтаал",
    "Гурвансайхан",
    "Дэлгэрхангай",
    "Дэлгэрцогт",
    "Дэрэн",
    "Луус",
    "Өлзийт",
    "Өндөршил",
    "Сайнцагаан",
    "Сайхан-Овоо",
    "Хулд",
    "Цагаандэлгэр",
    "Эрдэнэдалай",
  ],
  "Завхан аймаг": [
    "(Улиастай)",
    "Алдархаан ",
    "Асгат",
    "Баянтэс",
    "Баянхайрхан",
    "Дөрвөлжин",
    "Завханмандал",
    "Идэр",
    "Их-Уул",
    "Нөмрөг",
    "Отгон",
    "Сантмаргаз",
    "Сонгино",
    "Тосонцэнгэл",
    "Түдэвтэй ",
    "Тэлмэн ",
    "Тэс",
    "Ургамал",
    "Цагаанхайрхан",
    "Цагаанчулуут",
    "Цэцэн-Уул",
    "Шилүүстэй ",
    "Эрдэнэхайрхан",
    "Яруу",
  ],
  "Орхон аймаг": ["(Эрдэнэт)", "Баян-Өндөр", "Жаргалант"],
  "Өвөрхангай аймаг ": [
    "(Арвайхээр)",
    "Баруунбаян-Улаан",
    "Бат-Өлзий",
    "Баянгол",
    "Баян-Өндөр",
    "Богд",
    "Бүрд",
    "Гучин-Ус",
    "Есөнзүйл",
    "Зүүнбаян-Улаан",
    "Нарийнтээл",
    "Өлзийт ",
    "Сант",
    "Тарагт",
    "Төгрөг",
    "Уянга",
    "Хайрхандулаан",
    "Хархорин",
    "Хужирт",
  ],
  "Өмнөговь аймаг": [
    "(Даланзадгад)",
    "Баяндалай",
    "Баян-Овоо",
    "Булган",
    "Гурвантэс",
    "Мандал-Овоо",
    "Манлай",
    "Ноён",
    "Номгон",
    "Сэврэй",
    "Ханбогд",
    "Ханхонгор",
    "Хүрмэн",
    "Цогт-Овоо",
    "Цогтцэций",
  ],

  "Сүхбаатар аймаг": [
    "(Баруун-Урт)",
    "Асгат",
    "Баяндэлгэр",
    "Дарьганга",
    "Мөнххаан",
    "Наран",
    "Онгон",
    "Сүхбаатар",
    "Түвшинширээ",
    "Түмэнцогт",
    "Уулбаян",
    "Халзан",
    "Эрдэнэцагаан",
  ],

  "Сэлэнгэ аймаг": [
    "(Сүхбаатар)",
    "Алтанбулаг",
    "Баруунбүрэн",
    "Баянгол",
    "Ерөө",
    "Жавхлант",
    "Зүүнбүрэн",
    "Мандал",
    "Орхон",
    "Орхонтуул",
    "Сайхан",
    "Сант",
    "Түшиг",
    "Хушаат",
    "Хүдэр",
    "Цагааннуур",
    "Шаамар",
  ],

  "Төв аймаг": [
    "(Зуунмод)",
    "Алтанбулаг",
    "Аргалант",
    "Архуст",
    "Батсүмбэр",
    "Баян",
    "Баяндэлгэр",
    "Баянжаргалан",
    "Баян-Өнжүүл",
    "Баянхангай",
    "Баянцагаан",
    "Баянцогт",
    "Баянчандмань",
    "Борнуур",
    "Бүрэн",
    "Дэлгэрхаан",
    "Жаргалант",
    "Заамар",
    "Лүн",
    "Мөнгөнморьт",
    "Өндөрширээт",
    "Сүмбэр",
    "Сэргэлэн",
    "Угтаалцайдам",
    "Цээл",
    "Эрдэнэ",
    "Эрдэнэсант",
  ],

  "Увс аймаг": [
    "(Улаангом)",
    "Баруунтуруун",
    "Бөхмөрөн",
    "Давст",
    "Завхан",
    "Зүүнговь",
    "Зүүнхангай",
    "Малчин",
    "Наранбулаг",
    "Өлгий",
    "Өмнөговь",
    "Өндөрхангай",
    "Сагил",
    "Тариалан",
    "Түргэн",
    "Тэс",
    "Ховд",
    "Хяргас",
    "Цагаанхайрхан",
  ],

  "Ховд аймаг": [
    "(Ховд)",
    "Алтай",
    "Булган",
    "Буянт",
    "Дарви",
    "Дөргөн",
    "Дуут",
    "Жаргалант",
    "Зэрэг",
    "Манхан",
    "Мөнххайрхан",
    "Мөст",
    "Мянгад",
    "Үенч",
    "Ховд",
    "Цэцэг",
    "Чандмань",
    "Эрдэнэбүрэн",
  ],

  "Хөвсгөл аймаг": [
    "(Мөрөн)",
    "Алаг-Эрдэнэ",
    "Арбулаг",
    "Баянзүрх",
    "Бүрэнтогтох",
    "Галт",
    "Жаргалант",
    "Их-Уул",
    "Мөрөн",
    "Рашаант",
    "Рэнчинлхүмбэ",
    "Тариалан",
    "Тосонцэнгэл",
    "Төмөрбулаг",
    "Түнэл",
    "Улаан-Уул",
    "Ханх",
    "Хатгал",
    "Цагааннуур ",
    "Цагаан-Уул",
    "Цагаан-Үүр",
    "Цэцэрлэг",
    "Чандмань-Өндөр",
    "Шинэ-Идэр",
    "Эрдэнэбулган",
  ],

  "Хэнтий аймаг": [
    "(Чингис)",
    "Батноров ",
    "Батширээт",
    "Баян-Адарга",
    "Баянмөнх",
    "Баян-Овоо",
    "Баянхутаг",
    "Биндэр",
    "Бор-Өндөр",
    "Галшар",
    "Дадал	",
    "Дархан ",
    "Дэлгэрхаан",
    "Жаргалтхаан",
    "Мөрөн",
    "Норовлин",
    "Өмнөдэлгэр",
    "Хэрлэн",
    "Цэнхэрмандал",
  ],
};
