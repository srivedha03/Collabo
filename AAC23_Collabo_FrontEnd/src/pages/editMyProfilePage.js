import React from "react";
import explore from "../images/exploreIcon.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import linkedIn from "../images/linkedin.png";
export default function Edit_MyProfile({ setComponent }) {
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
                    <input
                      placeholder="Username"
                      type="text"
                      className="form-control"
                      id="Name"
                      style={{ height: "2rem" }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex flex-column">
                  <div style={{ color: "#3256D7" }}>
                    <h6> My Profile</h6>
                  </div>
                  <div className="pt-4">
                    <button
                      type="button"
                      class="btn btn-outline-primary btn-sm mt-3 contri_btn border-none"
                      id="4"
                      onClick={setComponent}
                    >
                      Save Profile
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
                <input
                  placeholder=""
                  type="text"
                  className="form-control"
                  id="Email"
                  style={{ height: "2rem" }}
                />
              </div>
              <div className="px-3 mb-1 ">
                <h6>Previous Projects</h6>
                <input
                  placeholder=""
                  type="text"
                  className="form-control"
                  id="PrevProjects"
                  style={{ height: "2rem" }}
                />
              </div>
              <div className="px-3 mb-1">
                <h6>Skills</h6>
                <input
                  placeholder=""
                  type="text"
                  className="form-control"
                  id="Skills"
                  style={{ height: "2rem" }}
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row profile_card3  shadow-sm bg-tertiary rounded">
              <div className="d-flex flex-column align-items-start justify-content-center">
                <div class="d-flex">
                  <div class="p-1">
                    <img
                      src={insta}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-1">
                    <>
                      <input
                        placeholder=""
                        type="text"
                        className="form-control"
                        id="insta"
                        style={{ height: "2rem" }}
                      />
                    </>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="p-1">
                    <img
                      src={linkedIn}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-1">
                    <input
                      placeholder=""
                      type="text"
                      className="form-control"
                      id="linkedIn"
                      style={{ height: "2rem" }}
                    />
                  </div>
                </div>
                <div class="d-flex">
                  <div class="p-1">
                    <img
                      src={github}
                      alt="MyProfile"
                      style={{ height: "1.3rem" }}
                    />
                  </div>
                  <div class="p-1">
                    <input
                      placeholder=""
                      type="text"
                      className="form-control"
                      id="github"
                      style={{ height: "2rem" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row profile_card3 shadow-sm bg-tertiary rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
