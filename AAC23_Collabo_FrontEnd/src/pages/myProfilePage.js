import React, { useState, useEffect } from "react";
import explore from "../images/exploreIcon.png";
import { Link, useNavigate } from "react-router-dom";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import linkedIn from "../images/linkedin.png";
export default function MyProfilePage({ setComponent }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    skills: "",
    previousProjects: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    // Get the token from localStorage or sessionStorage
    const userId = localStorage.getItem("userId");
    //const userId = "6737626e0e0045626ce56436";
    const token = localStorage.getItem("token");
    console.log("Token:", userId);
    console.log("Token from localStorage:", token);

    if (userId) {
      // Fetch user details from the backend
      fetch(`http://localhost:3002/api/myProfile/${userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include token if required
        },
      })
        .then((response) => {
          console.log("Response Status:", response.status);
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          return response.json();
        })
        .then((data) => {
          // Update user data in state
          console.log("Fetched Data:", data);
          const user = data.user;
          setUserData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            //skills: user.skills.join(", "), // Assuming skills is an array
            //previousProjects: "Proj x, Proj xyz", // You can modify this to fetch actual projects if needed
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);
  const handleEditProfile = () => {
    navigate("/editmyProfile"); // Redirect to edit profile page
  };
  const handleLogOut = () => {
    localStorage.clear();
    console.log("cleared");
    navigate("/");
  };

  return (
    <div className="container my-4" style={{ width: "60%" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="card profile_card1 shadow-sm bg-tertiary rounded">
            <div className="d-flex flex-row justify-content-between pt-3">
              <div>
                <div className="d-flex flex-column">
                  <div>
                    <img
                      src={explore}
                      alt="MyProfile"
                      style={{ height: "4rem" }}
                    />
                  </div>
                  <div className="pt-1">
                    {/* //<h6>My Name</h6> */}
                    <h6>
                      {userData.firstName + " "}

                      {userData.lastName}
                    </h6>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column">
                  <div style={{ color: "#3256D7" }}>
                    {/* <h6> My Profile</h6> */}
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm mt-3 contri_btn border-none"
                      id="7"
                      onClick={handleEditProfile}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-6 profile_card2 shadow-sm bg-tertiary rounded"
            style={{ minHeight: "20rem" }}
          >
            <div className="d-flex flex-column justify-content-between">
              <div className=" px-3 mb-1 mt-3">
                <h6>Email</h6>
                {/* <p>bjhds@gmail.com </p> */}
                <p>{userData.email}</p>
              </div>
              <div className="px-3 mb-1 ">
                <h6>Previous Projects</h6>
                <p>collabo</p>
                <p> {userData.previousProjects}</p>
              </div>
              <div className="px-3 mb-1">
                <h6>Skills</h6>
                <p>Html,css,Js </p>
                <p>{userData.skills}</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row profile_card3  shadow-sm bg-tertiary rounded">
              <div className="d-flex flex-column align-items-start justify-content-center">
                <div class="d-flex">
                  <div class="p-2">
                    <img
                      src={insta}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-2">
                    <span>srivedha_11</span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="p-2">
                    <img
                      src={linkedIn}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-2">
                    <span>srivedha</span>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="p-2">
                    <img
                      src={github}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-2">
                    <span>srivedha_11</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row profile_card3 shadow-sm bg-tertiary rounded">
              <div
                style={{
                  height: "2rem",
                  width: "6rem",
                  marginTop: "5rem",
                  marginLeft: "14rem",
                }}
              >
                <button
                  type="submit"
                  class="btn btn-outline-primary btn-sm mt-3 contri_btn border-none"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
