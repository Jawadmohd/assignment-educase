import React from "react";
import "./css/FormField.css";

const FormField = ({
  name,
  label,
  type,
  placeholder,
  isRequired,
  radioOptions,
  register,
  validations,
  errors,
}) => {
  if (type === "text" || type === "password") {
    return (
      <div className="form-field">
        <label className="floating-label">
          {label} {isRequired && <span className="required">*</span>}
        </label>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          required
          {...register(name, validations)}
        />

        {errors[name] && <p style={{ color: "red" }}>{errors[name].message}</p>}
      </div>
    );
  } else if (type === "radio") {
    return (
      <div className="form-field">
        <label className="radio-label">
          {label}
          {isRequired && <span className="required">*</span>}
        </label>

        <div className="radio-field">
          {radioOptions?.map((option) => (
            <label className="radio-element" key={option}>
              <input
                className="radio"
                type="radio"
                name={label}
                value={option}
                {...register(name, validations)}
              />

              <span>{option}</span>
            </label>
          ))}
          {errors[name] && (
            <p style={{ color: "red" }}>{errors[name].message}</p>
          )}
        </div>
      </div>
    );
  }
};

export default FormField;
