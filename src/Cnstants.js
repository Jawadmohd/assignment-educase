export const LoginInputs = [
  {
    name: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Enter email address",
    isRequired: true,
    validations: {
      required: "Email is required",

      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    isRequired: true,
    validations: {
      required: "Password is required",
    },
  },
];

export const SignUpInputs = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter full name",
    isRequired: true,
    validations: {
      required: "Full name is required",
    },
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    type: "text",
    placeholder: "Enter phone number",
    isRequired: true,
    validations: {
      required: "Phone number is required",
    },
  },
  {
    name: "email",
    label: "Email Address",
    type: "text",
    placeholder: "Enter email address",
    isRequired: true,
    validations: {
      required: "Email is required",

      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    isRequired: true,
    validations: {
      required: "Password is required",
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
        message:
          "Must contain uppercase, lowercase, number and special character",
      },
    },
  },
  {
    name: "companyName",
    label: "Company Name",
    type: "text",
    placeholder: "Enter company name",
    isRequired: false,
    validations: {},
  },
  {
    name: "isAgency",
    type: "radio",
    label: "Are you an Agency?",
    isRequired: true,
    validations: {
      required: "Are you an Agency is required",
    },
    options: ["Yes", "No"],
  },
];
