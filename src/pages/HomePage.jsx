import React from "react";
import Layout from "../components/Layout";
import "./css/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="home-container">
        <section className="home-content">
          <h1>Welcome to PopX</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          </h4>
          <button onClick={() => navigate("/signup")} id="signup-btn">
            Create Account
          </button>
          <button onClick={() => navigate("/login")} id="login-btn">
            Already Registered? Login
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
