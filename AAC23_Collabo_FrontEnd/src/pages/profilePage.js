import React from "react";
import explore from "../images/exploreIcon.png";
import github from "../images/github.png";
import insta from "../images/instagram.png";
import linkedIn from "../images/linkedin.png";
export default function ProfilePage() {
  return (
    <div style={{ padding: "3rem" }}>
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
                      <h6> Name </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex flex-column">
                    <div style={{ color: "#3256D7" }}>
                      <h6>Profile</h6>
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
                  <p>bjhds@gmail.com</p>
                </div>
                <div className="px-3 mb-1 ">
                  <h6>Previous Projects</h6>
                  <p>Proj x Proj xyz</p>
                </div>
                <div className="px-3 mb-1">
                  <h6>Skills</h6>
                  <p>Html,css,Js</p>
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
                      <span>collabo.123</span>
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
                      <span>collabo.123</span>
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
                      <span>collabo.123</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row profile_card3 shadow-sm bg-tertiary rounded">
                <h6 className="mt-4 mx-3">Project Progress</h6>
                <div
                  class="progress mx-4 "
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%", marginTop: "-2.5rem" }}
                >
                  <div class="progress-bar" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
