export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(String(password).toLowerCase());
};

//Works on only Mongolian phone number
export const validatePhoneNumber = (
  phoneNumber: String,
  countryCode: String
) => {
  const returnModel = { isValid: false, fullPhoneNumber: "" };
  const countryCodes = [
    {
      countryCode: "mn",
      phonePrefix: "+976",
      regex: /^([0-9]{8})$/,
      length: 8,
      startingNumber: [
        "80",
        "83",
        "85",
        "86",
        "88",
        "89",
        "90",
        "91",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "92",
      ],
      startingLength: 2,
    },
    {
      countryCode: "us",
      phonePrefix: "+1",
      regex: /^([0-9]{10})$/,
      length: 10,
      startingNumber: [],
      startingLength: 0,
    },
  ];
  if (countryCodes.filter((r) => r.countryCode == countryCode).length == 0)
    return returnModel;

  //All SMS receivable phone numbers
  // +XXXXXXXXXXX = (/^\+?([0-9]{3})\)?[-. ]?([0-9]{8})$/) verifing this format - Phone format for Mongolian Phone number providers
  // will add different formats for different countries
  // XXXXXXXX (/^?([0-9]{8})\)$/)
  const country = countryCodes.filter((r) => r.countryCode == countryCode)[0];
  returnModel.fullPhoneNumber = country.phonePrefix + phoneNumber;

  if (
    country.length === phoneNumber.length &&
    country.regex.test(phoneNumber.toLowerCase()) &&
    (country.startingNumber.length === 0 ||
      (country.startingNumber.length > 0 &&
        country.startingNumber.filter(
          (r) => r == phoneNumber.substring(0, country.startingLength)
        ).length > 0))
  ) {
    returnModel.isValid = true;
    returnModel.fullPhoneNumber = country.phonePrefix + phoneNumber;
  }

  return returnModel;
};
