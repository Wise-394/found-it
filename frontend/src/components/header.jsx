import style from "../style/Header.module.css";
const Header = () => {
  return (
    <header className = {style.header}>
      <p>Found It</p>
      <button>Login</button>
      <button>SignUp</button>
    </header>
  );
};
export default Header;
