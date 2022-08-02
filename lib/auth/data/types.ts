import { AccountInput } from "@lib/account/data/types";

export type SignupInput = {
  lastName: string;
  firstName: string;
  sex: "Male" | "Female";
  age: number;
  email: string;
  password: string;
  projectName: string;
  register: string;
  registerFirstLetter: string;
  registerSecondLetter: string;
  registerNumber: string;
  phone: string;
};

export type SignupFormInput = AccountInput & {
  password: string;
};
