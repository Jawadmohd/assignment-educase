import { useState } from "react";
import React from "react";
import Layout from "./Layout";
import "./css/AuthLayout.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const AuthLayout = ({ heading, children }) => {
  const navigate = useNavigate();
  const [goToHome, setGoToHome] = useState(false);

  const onBackClick = () => {
    navigate("/");
  };

  return (
    <Layout>
      <div className="auth-container">
        <MdOutlineArrowBackIosNew
          onClick={onBackClick}
          style={{ cursor: "pointer" }}
          size={22}
        />
        <h1>{heading}</h1>
        {children}
      </div>
    </Layout>
  );
};

export default AuthLayout;
