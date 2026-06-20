import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Form } from "../components/Form";
import "./css/LoginPage.css";

const LoginPage = () => {
  const LoginInputs = [
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
  ];

  const btnText = "Login";

  return (
    <AuthLayout heading={"Signin to your PopX account"}>
      <h4 className="login-subheading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cum
      </h4>
      <Form inputs={LoginInputs} formBtnTxt={btnText} />
    </AuthLayout>
  );
};

export default LoginPage;
