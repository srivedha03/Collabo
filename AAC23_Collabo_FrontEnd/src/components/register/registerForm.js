import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Register_Form() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleRegisterChange = (e) => {
    const feild = e.target.name;
    const newValue = e.target.value;
    const errors = {};
    setRegisterData((registerData) => {
      return { ...registerData, [feild]: newValue };
    });

    if (feild === "firstName") {
      if (!registerData.firstName.trim()) {
        errors.firstName = "First Name is required";
      } else if (registerData.firstName.length <= 3) {
        errors.firstName = "First Name must be atleast 3 characters long";
      } else if (registerData.firstName.length >= 20) {
        errors.firstName = "First Name must be atmost 20 characters long";
      }
    }
    if (feild === "lastName") {
      if (!registerData.lastName.trim()) {
        errors.lastName = "Last Name is required";
      } else if (registerData.lastName.length <= 3) {
        errors.lastName = "Last Name must be atleast 3 characters long";
      } else if (registerData.lastName.length >= 20) {
        errors.lastName = "Last Name must be atmost 20 characters long";
      }
    }
    if (feild === "email") {
      if (!registerData.email) {
        errors.email = "Email is required";
      } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(registerData.email)) {
        errors.email = "Email is invalid";
      }
    }
    if (feild === "password") {
      if (!registerData.password) {
        errors.password = "Password is required";
      } else if (registerData.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }
    }
    if (feild === "confirmPassword") {
      if (!registerData.confirmPassword.trim()) {
        errors.confirmPassword = "Password is required";
      } else if (registerData.password !== registerData.confirmPassword) {
        errors.confirmPassword = "Password do not match";
      }
    }
    setErrors(errors);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateRegisterForm(registerData);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully");
      fetch("http://localhost:3002/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData), //registerData is sent to the backend router
      })
        .then((response) => {
          console.log(response);
          // cant retrive the data from the first (.then).
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if ("success" === data.message) {
            navigate("/login");
          } else {
            // if already user exits this block is executed
            // as message in res(data) is not 'success'
            alert(data.message);
          }
        })
        .catch((error) => {
          // Handle any errors
        });
    } else {
      console.log("Form submission failed due to validation errors.");
    }
    setErrors(newErrors);
    console.log(registerData);
  };

  const validateRegisterForm = (registerData) => {
    const errors = {};
    if (!registerData.firstName.trim()) {
      errors.firstName = "First Name is required";
    } else if (registerData.firstName.length <= 3) {
      errors.firstName = "First Name must be atleast 3 characters long";
    } else if (registerData.firstName.length >= 20) {
      errors.firstName = "First Name must be atmost 20 characters long";
    }
    if (!registerData.lastName.trim()) {
      errors.lastName = "Last Name is required";
    } else if (registerData.lastName.length <= 3) {
      errors.lastName = "Last Name must be atleast 3 characters long";
    } else if (registerData.lastName.length >= 20) {
      errors.lastName = "Last Name must be atmost 20 characters long";
    }
    if (!registerData.email) {
      errors.email = "Email is required";
    } else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(registerData.email)) {
      errors.email = "Email is invalid";
    }
    if (!registerData.password) {
      errors.password = "Password is required";
    } else if (registerData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (!registerData.confirmPassword.trim()) {
      errors.confirmPassword = "Password is required";
    } else if (registerData.password !== registerData.confirmPassword) {
      errors.confirmPassword = "Password do not match";
    }
    return errors;
  };

  return (
    <div
      className="card"
      style={{
        width: "79%",
        border: "none",
        backgroundColor: "rgba(256, 256, 256, 0.2)",
      }}
    >
      <div className="card-body">
        <div className="container">
          <div className="mb-4">
            <h5 className="card-title" style={{ color: "#1B99D4" }}>
              Set up your accout
            </h5>
          </div>
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <input
                placeholder="First Name"
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={registerData.firstName}
                onChange={handleRegisterChange}
                onKeyUp={handleRegisterChange}
              />
              {errors.firstName && (
                <span className="validation-errors">{errors.firstName}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Last Name"
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={registerData.lastName}
                onChange={handleRegisterChange}
                onKeyUp={handleRegisterChange}
              />
              {errors.lastName && (
                <span className="validation-errors">{errors.lastName}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Email"
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                onKeyUp={handleRegisterChange}
              />
              {errors.email && (
                <span className="validation-errors">{errors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Password"
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                onKeyUp={handleRegisterChange}
              />
              {errors.password && (
                <span className="validation-errors">{errors.password}</span>
              )}
            </div>
            <div className="mb-4">
              <input
                placeholder="Confirm Password"
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                onKeyUp={handleRegisterChange}
              />
              {errors.confirmPassword && (
                <span className="validation-errors">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
            {/* <div className="mb-4 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Confirm Password
              </label>
            </div> */}
            <>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#1B99D4", border: "none" }}
              >
                Submit
              </button>
            </>
            <hr></hr>
            <div>
              <span class="psw">
                Already have an account?<Link to="/login">Login</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
