import collaboIcon from "../../images/collaboIcon.png";
export default function Footer() {
  return (
    <div>
      <div className="container-fluid home_footer">
        <div>
          <a className="navbar-brand navBar-left" href="#">
            <img
              src={collaboIcon}
              width="25"
              className="d-inline-block align-text-top"
            />
            <span style={{ fontSize: "0.6rem", color: "#1B99D4" }}>
              <b>COLLABO</b>
            </span>
          </a>
        </div>
        <div>
          <span
            className="fw-light text-secondary-subtle"
            style={{ fontSize: "0.7rem" }}
          >
            Collabo 2024 © All Rights Reserved
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
}
