import "./navbar.styles.scss";
import { logo } from "../../../public/imgExports";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="logo-container">
          <img className="logo" src={logo} alt="img not found" />
        </a>

        <nav className="navbar__links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#appointment" className="btn btn--gold">
          Book An Appointment
        </a>
      </div>
    </div>
  );
}
