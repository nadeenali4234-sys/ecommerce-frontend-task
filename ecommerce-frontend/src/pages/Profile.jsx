import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h1>My Profile</h1>

      <p>Welcome to your profile.</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;