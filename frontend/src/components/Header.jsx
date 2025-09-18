import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import style from "../style/Header.module.css";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); 
    navigate("/");  
  };

  return (
    <header className={style.header}>
      <p>Found It</p>

      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>SignUp</button></Link>
        </>
      )}
    </header>
  );
};

export default Header;
