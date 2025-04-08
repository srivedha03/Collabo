import Register_Form from "./registerForm";
import regIcon from "../../images/registerIcon.png";
import "../../App.css";
export default function Register() {
  return (
    <div className="container regMain">
      <div className="row">
        <div className="col-md-6 ">
          <img src={regIcon} className="regIcon" />
        </div>
        <div className="col-md-6">
          <Register_Form />
        </div>
      </div>
    </div>
  );
}
