import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../style/Header.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("api/auth/check", { credentials: "include" })
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(true);
          navigate("/home"); 
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, [navigate]);
  // Logout function
  const handleLogout = async () => {
    await fetch("api/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className={style.header}>
      <p>Found It</p>

      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
