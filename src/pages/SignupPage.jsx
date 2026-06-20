import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Form } from "../components/Form";

const SignupPage = () => {
  const SignUpInputs = [
    {
      label: "Full Name",
      type: "text",
      placeholder: "Enter full name",
      isRequired: true,
    },
    {
      label: "Phone Number",
      type: "text",
      placeholder: "Enter phone number",
      isRequired: true,
    },
    {
      label: "Email Address",
      type: "text",
      placeholder: "Enter email address",
      isRequired: true,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      isRequired: true,
    },
    {
      label: "Company Name",
      type: "text",
      placeholder: "Enter company name",
      isRequired: false,
    },
    {
      type: "radio",
      label: "Are you an Agency?",
      isRequired: true,
      options: ["Yes", "No"],
    },
  ];

  const btnText = "Create Account";

  return (
    <AuthLayout heading={"Create your PopX account"}>
      <Form inputs={SignUpInputs} formBtnTxt={btnText} />
    </AuthLayout>
  );
};

export default SignupPage;
