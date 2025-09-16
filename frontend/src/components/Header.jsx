import style from "../style/Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
      <p>Found It</p>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </header>
  );
};
export default Header;
