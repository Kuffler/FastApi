import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      alert("Błędne dane logowania");
    }
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Nazwa użytkownika" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Hasło" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Zaloguj</button>
      </form>
      <p>Nie masz konta? <Link to="/register">Zarejestruj się</Link></p>
    </div>
  );
}

export default Login;
