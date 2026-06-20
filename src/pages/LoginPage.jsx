import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Form } from "../components/Form";
import "./css/LoginPage.css";
import { LoginInputs } from "../Cnstants";

const LoginPage = () => {
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
