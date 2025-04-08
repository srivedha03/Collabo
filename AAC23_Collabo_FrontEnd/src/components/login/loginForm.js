import LoginLogo from "../../images/loginLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Login_Form() {
  const [logData, setLogData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setLogData((logData) => {
      return { ...logData, [e.target.name]: e.target.value };
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with data: ", logData);
    fetch("http://localhost:3002/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(logData),
    })
      .then((response) => {
        //response is the http response from backend
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // data - includes message, success or not
        console.log(data);
        if ("success" === data.message) {
          console.log("suc");
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId);
          //localStorage.setItem("userEmail",data.email);
          navigate("/MainContribute");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle any errors
      });
  };
  return (
    <div
      className="card"
      style={{
        border: "none",
        maxWidth: "78%",
        backgroundColor: "rgba(256, 256, 256, 0.2)",
      }}
    >
      <div className="loginform">
        <div className="card-body">
          <div className="container">
            <div className="tittle">Log In</div>
            <img src={LoginLogo} alt="logo" className="login-logo" />
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="username"
                  placeholder="Username"
                  className="form-control"
                  name="email"
                  value={logData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={logData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <span className="psw">
                  <a href="/register">Forgot Password?</a>
                </span>
              </div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
            <hr></hr>
            <div>
              <span className="psw">
                Don't have an account?<Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
