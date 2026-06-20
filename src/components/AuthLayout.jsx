import React from "react";
import Layout from "./Layout";
import "./css/AuthLayout.css";

const AuthLayout = ({ heading, children }) => {
  return (
    <Layout>
      <div className="auth-container">
        <h1>{heading}</h1>
        {children}
      </div>
    </Layout>
  );
};

export default AuthLayout;
