import React from "react";
import AuthLayout from "../components/AuthLayout";
import { Form } from "../components/Form";
import { SignUpInputs } from "../Cnstants.js";

const SignupPage = () => {
  const btnText = "Create Account";

  return (
    <AuthLayout heading={"Create your PopX account"}>
      <Form
        inputs={SignUpInputs}
        formBtnTxt={btnText}
        toastMessage={"Signup successful"}
      />
    </AuthLayout>
  );
};

export default SignupPage;
