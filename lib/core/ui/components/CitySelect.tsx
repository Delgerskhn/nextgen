import { Select, SelectProps } from "@chakra-ui/react";
import { districts } from "@lib/core/data/districts";
import { UseFormRegisterReturn } from "react-hook-form";

type Register = { register: UseFormRegisterReturn };

export const CitySelect = ({ register, ...rest }: Register & SelectProps) => {
  return (
    <Select
      type="text"
      {...register}
      {...rest}
      // defaultValue={data?.city as string}
    >
      {cities().map((c) => (
        <option key={c}>{c}</option>
      ))}
    </Select>
  );
};

export const DistrictSelect = ({
  register,
  city,
  ...rest
}: Register &
  SelectProps & {
    city: string | null;
  }) => {
  return (
    <Select type="text" {...register} {...rest}>
      {getDistricts(city)?.map((c) => (
        <option key={c}>{c}</option>
      ))}
    </Select>
  );
};

const getDistricts = (city: string | null) => {
  console.log(city);
  if (!city) return [];
  return districts[city];
};
const cities = () => Object.keys(districts);
