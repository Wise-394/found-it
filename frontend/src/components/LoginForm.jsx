import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

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
        login(); // ✅ update AuthContext so ProtectedRoute sees you as logged in
        navigate("/home"); // now /home will render instead of redirecting
      } else {
        console.log("Response from server:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
