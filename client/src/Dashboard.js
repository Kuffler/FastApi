import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h2>Witaj w panelu użytkownika!</h2>
      <button onClick={handleLogout}>Wyloguj</button>
    </div>
  );
}

export default Dashboard;
