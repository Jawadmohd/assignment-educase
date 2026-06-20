import React from "react";
import "./css/form.css";
import FormField from "./FormField";

export const Form = ({ inputs, formBtnTxt }) => {
  return (
    <form>
      {inputs?.map((input) => (
        <FormField
          key={input.label}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          isRequired={input.isRequired}
          radioOptions={input.options ? input.options : null}
        />
      ))}

      <button id="form-btn" type="submit">
        {formBtnTxt}
      </button>
    </form>
  );
};
