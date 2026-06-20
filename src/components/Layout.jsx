import React from "react";
import "./css/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
