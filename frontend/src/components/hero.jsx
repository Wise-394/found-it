import style from "../style/Hero.module.css";
import bg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className={style.hero}>
      <div className={style["hero-card"]}>
        <h1>Found It!</h1>
        <p>
          We are a platform to find what you've lost or report what you've
          found. Join our community and help make a difference.
        </p>
        <div className={style["hero-buttons"]}>
          <Link to="/signup">
            <button>I found Something</button>
          </Link>
          <Link to="/signup">
            <button>I lost Something</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
