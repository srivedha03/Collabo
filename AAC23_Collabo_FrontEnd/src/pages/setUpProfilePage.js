import setprofile from "../images/setupprofile.png";

import profilepict from "../images/profilepict.png";

export default function SetUpProfile() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="setprofile">
          <div className="container-setup-profile">
            <h2>Set up your Profile</h2>
            <p style={{ textAlign: "left" }}>Your Profile Picture</p>
            <div className="profile-pic-container">
              <div className="upload-photo">
                <img src={profilepict} />
              </div>
              <p style={{ textAlign: "left" }}>Upload your photo</p>
            </div>
            <form>
              <input
                type="text"
                placeholder="Please enter User Name"
                className="form-control mb-4"
              />
              <input
                type="text"
                placeholder="Skills"
                className="form-control mb-4"
              />
              <input
                type="text"
                placeholder="Previous Projects"
                className="form-control mb-4"
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: "#1B99D4", border: "none" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-6 my-5">
        <img src={setprofile} className="setProIcon" />
      </div>
    </div>
  );
}
