//Issue resolved below
// import React ,{useState} from "react";
// import postimage from "../images/postimage.png";
// // import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css";
// function PostPage() {
//   const [postData, setPostData] = useState({
//     idea: "",
//     description: "",
//     skills: "",
//     hoursRequired: "",
//     teamSize: "",
//   });
//   const [descriptionLength, setDescriptionLength] = useState(0);
//   // State for success message
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // If the field is "description", update the character count
//     if (name === "description") {
//       setDescriptionLength(value.length); // Update the character count for description
//     }
//     setPostData((postData) => {
//       return { ...postData, [e.target.name]: e.target.value };
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(postData);
//     fetch("http://localhost:3002/api/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     })
//       .then((response) => {
//         //response is the http response from backend
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         // data - includes message, success or not
//         console.log(data);
//         if ("success" === data.message) {
//           // console.log("Project created successfully");
//           // alert("Submitted Successfully");
//           // navigate("/MainContribute");
//           console.log("Project created successfully");
//           setSuccessMessage("Submitted Successfully");
//           // Clear the form fields
//           setPostData({
//             idea: "",
//             description: "",
//             skills: "",
//             hoursRequired: "",
//             teamSize: "",
//           });
//           setDescriptionLength(0);
//           navigate("/MainContribute");
//         } else {
//           alert(data.message);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         // Handle any errors
//       });
//   };
//   return (
//     <div className="row">
//       <div className="col-md-5">
//         <img src={postimage} className="regIcon my-5" />
//       </div>
//       <div className="col-md-7">
//         <div className="create-post-container">
//           <div>
//             <h2>Create a Post</h2>
//             <hr />
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="idea">Project idea</label>
//               <input
//                 type="text"
//                 id="idea"
//                 className="form-control mb-2"
//                 name="idea"
//                 value={postData.idea}
//                 onChange={handleChange}
//               />
//               <label htmlFor="description">Description</label>
//               <input
//                 type="text"
//                 id="description"
//                 className="form-control"
//                 name="description"
//                 value={postData.description}
//                 onChange={handleChange}
//               />
//               <span className="char-count">{descriptionLength}/100</span>
//               <label htmlFor="skills">Skills</label>
//               <input
//                 type="text"
//                 id="skills"
//                 className="form-control mb-2"
//                 name="skills"
//                 value={postData.skills}
//                 onChange={handleChange}
//               />
//               <label htmlFor="hours-required">Hours required</label>
//               <input
//                 type="text"
//                 id="hours-required"
//                 className="form-control mb-2"
//                 name="hoursRequired"
//                 value={postData.hoursRequired}
//                 onChange={handleChange}
//               />
//               <label htmlFor="team-size">Team size</label>
//               <input
//                 type="text"
//                 id="team-size"
//                 className="form-control mb-3"
//                 name="teamSize"
//                 value={postData.teamSize}
//                 onChange={handleChange}
//               />
//               <button
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ backgroundColor: "#1B99D4", border: "none" }}
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PostPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import postimage from "../images/postimage.png";
import "../App.css";

function PostPage() {
  const [postData, setPostData] = useState({
    idea: "",
    description: "",
    skills: "",
    hoursRequired: "",
    teamSize: "",
    userId: "",
  });

  const [descriptionLength, setDescriptionLength] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      setDescriptionLength(value.length);
    }
    setPostData((postData) => ({
      ...postData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", postData);
    //const userEmail = localStorage.getItem("userEmail") ;
    const userId = localStorage.getItem("userId");
    //console.log("Retrieved userEmail:", userEmail);
    const postDataWithUserInfo = {
      ...postData,
      userId: userId, // Add email to post data
    };
    console.log("187-------------" + JSON.stringify(postDataWithUserInfo));

    fetch("http://localhost:3002/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postDataWithUserInfo),
    })
      .then((response) => {
        console.log("Response received:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received from backend:", data);
        if (data.message === "success") {
          console.log("Project created successfully");
          setSuccessMessage("Submitted Successfully!!");
          // Set timeout to remove the success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage(""); // Clear the success message
          }, 1500); // 5000ms = 5 seconds
          setPostData({
            idea: "",
            description: "",
            skills: "",
            hoursRequired: "",
            teamSize: "",
          });
          setDescriptionLength(0);
          navigate("/MainContribute");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <img src={postimage} className="regIcon my-5" alt="Post" />
      </div>
      <div className="col-md-7">
        <div className="create-post-container">
          <div>
            <h2>Create a Post</h2>
            <hr />
            {successMessage && (
              <p className="success-message">{successMessage}</p>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="idea">Project idea</label>
              <input
                type="text"
                id="idea"
                className="form-control mb-2"
                name="idea"
                value={postData.idea}
                onChange={handleChange}
              />
              <label htmlFor="description">Description</label>
              <input
                type="text"
                id="description"
                className="form-control"
                name="description"
                value={postData.description}
                onChange={handleChange}
              />
              <span className="char-count">{descriptionLength}/100</span>
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                id="skills"
                className="form-control mb-2"
                name="skills"
                value={postData.skills}
                onChange={handleChange}
              />
              <label htmlFor="hours-required">Hours required</label>
              <input
                type="text"
                id="hours-required"
                className="form-control mb-2"
                name="hoursRequired"
                value={postData.hoursRequired}
                onChange={handleChange}
              />
              <label htmlFor="team-size">Team size</label>
              <input
                type="text"
                id="team-size"
                className="form-control mb-3"
                name="teamSize"
                value={postData.teamSize}
                onChange={handleChange}
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
    </div>
  );
}

export default PostPage;
