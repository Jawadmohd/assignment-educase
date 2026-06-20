import React from "react";
import "./css/form.css";
import FormField from "./FormField";
import { useUser } from "../context/UserContext.jsx";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export const Form = ({ inputs, formBtnTxt, toastMessage }) => {
  const {} = useParams();
  const navigate = useNavigate();
  const { login } = useUser();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const isFormFilled = inputs.every((input) => !!watch(input.name));

  const onSubmit = (data) => {
    login(data);
    reset();
    navigate("/settings");
    toast.success(toastMessage);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs?.map((input) => (
        <FormField
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          isRequired={input.isRequired}
          radioOptions={input.options ? input.options : null}
          register={register}
          validations={input.validations}
          errors={errors}
        />
      ))}

      <button id="form-btn" type="submit" disabled={!isFormFilled}>
        {formBtnTxt}
      </button>
    </form>
  );
};
