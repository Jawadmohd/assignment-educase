import React from "react";
import "./css/FormField.css";

const FormField = ({ label, type, placeholder, isRequired, radioOptions }) => {
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
        />
      </div>
    );
  } else if (type === "radio") {
    return (
      <div className="form-field">
        <label className="radio-label">
          {label} {isRequired && <span className="required">*</span>}
        </label>
        <div className="radio-field">
          {radioOptions?.map((option) => (
            <span className="radio-element">
              <input type="radio" />
              <label>{option}</label>
            </span>
          ))}
        </div>
      </div>
    );
  }
};

export default FormField;
