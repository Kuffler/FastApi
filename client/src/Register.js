import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", {
        username,
        email,
        password,
      });
      alert(res.data.message);
      navigate("/");
    } catch (error) {
      alert("Rejestracja nie powiodła się");
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Nazwa użytkownika" onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
}

export default Register;
