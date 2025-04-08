import collaboIcon from "../../images/collaboIcon.png";
import "../../App.css";
import { Link } from "react-router-dom";
export default function Register_NavBar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navBar-left" href="#">
          <img
            src={collaboIcon}
            width="65"
            height="65"
            className="d-inline-block align-text-top"
          />
          <span style={{ fontSize: "1.5rem", color: "#1B99D4" }}>
            <b>COLLABO</b>
          </span>
        </Link>
      </div>
    </nav>
  );
}
