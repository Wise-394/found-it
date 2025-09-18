import style from "../style/LoginSignup.module.css";
import bg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

const Signup = () => {
  return (
    <div className={style.container}>
      <div className="left-container">
        <header className={style.header}>
          <p>FoundIt</p>
          <Link to="/">
            <button>Go back</button>
          </Link>
        </header>
        <main className={style.main}>
          <SignUpForm />
        </main>
      </div>
      <div
        className={style["img-container"]}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>
  );
};

export default Signup;
