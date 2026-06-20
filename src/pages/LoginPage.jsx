import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Form } from "../components/Form";
import "./css/LoginPage.css";

const LoginPage = () => {
  const LoginInputs = [
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

  const btnText = "Login";

  return (
    <AuthLayout heading={"Signin to your PopX account"}>
      <h4 className="login-subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum
      </h4>
      <Form
        inputs={LoginInputs}
        formBtnTxt={btnText}
        toastMessage={"Login successful"}
      />
    </AuthLayout>
  );
};

export default LoginPage;
