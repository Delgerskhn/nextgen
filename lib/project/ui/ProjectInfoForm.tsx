import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import { useAuth } from "@lib/auth/ui";
import { Project } from "@prisma/client";
import { CitySelect, DistrictSelect } from "@ui/components/CitySelect";
import { toaster } from "@ui/index";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useProject, useUpdateProject } from "../data/projectHooks";

type Input = Pick<
  Project,
  "type" | "name" | "teamName" | "city" | "district" | "userId"
>;

export const ProjectInfoForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<Input>();

  const auth = useAuth();
  const project = useProject(auth.data?.id);

  useEffect(() => {
    if (project.data) {
      const { city, name, teamName, type, district } = project.data;
      setValue("city", city);
      setValue("district", district);
      setValue("name", name);
      setValue("teamName", teamName);
      setValue("type", type);
    }
  }, [project.isFetched]);

  useEffect(() => {
    setValue("userId", auth.data?.id || "");
  }, [auth.isFetched]);

  const update = useUpdateProject();
  const city = watch("city");

  const onSubmit = handleSubmit((input) => {
    update.mutate(input, {
      onSuccess: () => {
        toaster.success("Амжилттай.");
      },
      onError: () => {
        toaster.error("Алдаа гарлаа.");
      },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading size="md">Төслийн мэдээлэл</Heading>
      <Divider my="4" />
      <FormControl isInvalid={!!errors.name}>
        <FormLabel>Төслийн нэр</FormLabel>
        <Input
          type="text"
          {...register("name", {
            required: "Заавал",
          })}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.teamName}>
        <FormLabel>Багийн нэр</FormLabel>
        <Input
          type="text"
          {...register("teamName", {
            required: "Заавал",
          })}
        />
      </FormControl>
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
      <FormControl isRequired isInvalid={!!errors.type}>
        <FormLabel>Төслийн төрөл</FormLabel>
        <Select
          {...register("type", {
            required: "Заавал",
          })}
        >
          <option>Боомтын сэргэлт</option>
          <option>Эрчим хүчний сэргэлт</option>
          <option>Аж үйлдвэржилтийн сэргэлт</option>
          <option>Хот, хөдөөгийн сэргэлт</option>
          <option>Ногоон хөгжлийн сэргэлт</option>
          <option>Төрийн бүтээмжийн сэргэлт</option>
        </Select>
        <FormErrorMessage>
          {errors.type && errors.type.message}
        </FormErrorMessage>
      </FormControl>

      <Button type="submit" color="white" mt={3}>
        Хадгалах
      </Button>
    </form>
  );
};
