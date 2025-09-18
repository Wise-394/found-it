import style from "../style/LoginSignup.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        login();
        navigate("/home");
      } else {
        console.log("Response from server:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className={style.form}>
      <h1>Log In</h1>
      <p>Login To Your Account!</p>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
