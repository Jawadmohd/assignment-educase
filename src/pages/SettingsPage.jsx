import React from "react";
import Layout from "../components/Layout";
import "./css/SettingsPage.css";
import UserPhoto from "../../public/user.png";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext.jsx";
import toast from "react-hot-toast";

const SettingsPage = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const userDetails = {
    photo: UserPhoto,
    name: user?.fullName || "Jhon Doe",
    email: user?.email || "jhondoe@gmail.com",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quaerat tenetur vitae non repellendus commodi  impedit iste culpa.",
  };

  const onLogout = () => {
    logout();
    navigate("/login");
    toast.success("Logout successful");
  };

  return (
    <Layout>
      <div className="settings-container">
        <MdOutlineLogout
          onClick={onLogout}
          size={25}
          color="red"
          cursor={"pointer"}
        />
        <section className="heading-section">
          <h1>Account Settings</h1>
        </section>
        <section className="sp-body-section">
          <div className="user-details">
            <div className="user-photo">
              <img id="user-img" src={userDetails.photo} alt="user-photo" />
              <MdOutlineCameraAlt id="cam-icon" size={20} />
            </div>
            <span>
              <h3>{userDetails.name}</h3>
              <h4>{userDetails.email}</h4>
            </span>
          </div>
          <div>
            <p>{userDetails.description}</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SettingsPage;
