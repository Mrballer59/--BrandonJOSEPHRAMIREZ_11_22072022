import { Link } from "react-router-dom";
import logo from "../../assets/LOGO.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="Logo of Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
