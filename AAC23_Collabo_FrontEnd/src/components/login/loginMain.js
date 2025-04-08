import Login_Form from "./loginForm";
import loginIcon from "../../images/loginIcon.png";
import "../../App.css";
export default function Login() {
  return (
    <div className="container logMain">
      <div className="row">
        <div className="col-md-6">
          <img src={loginIcon} className="loginIcon" />
        </div>
        <div className="col-md-6">
          <Login_Form />
        </div>
      </div>
    </div>
  );
}
