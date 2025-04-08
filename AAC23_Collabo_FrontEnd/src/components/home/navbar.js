import collaboIcon from "../../images/collaboIcon.png";
import "../../App.css";
import { Link } from "react-router-dom";
export default function Home_NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand navBar-left" href="#">
          <img
            src={collaboIcon}
            width="65"
            height="65"
            className="d-inline-block align-text-top"
          />
          <span style={{ fontSize: "1.7rem", color: "#1B99D4" }}>
            <b>COLLABO</b>
          </span>
        </a>

        <Link to="/register" className="btn me-3 registerBtn">
          Register
        </Link>
        <Link to="/login" className="btn signInBtn">
          Log in
        </Link>
      </div>
    </nav>
  );
}
