type PhoneObject = {
  country: {
    name: string;
    iso2: string;
    dialCode: string;
  };
  countryCallingCode: string;
  nationalNumber: string;
  number: string;
  __countryCallingCodeSource: string;
  countryCode: string;
  valid: boolean;
  formatted: string;
};

export default PhoneObject;
