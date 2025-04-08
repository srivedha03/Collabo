// import { useEffect, useState } from "react";
// import "../App.css";
// import explore from "../images/exploreIcon.png";
// export default function Main_Contribute_card({ setComponent }) {

//   const [projects, setProjects]=useState([]);
//   useEffect(()=>{
//     fetch("http://localhost:3002/api/MainContribute")
//     .then((response) => response.json())  // Convert response to JSON
//     .then((data) => setProjects(data))   // Set the data to the state
//     .catch((error) => console.error("Error fetching projects:", error)); // Handle error
// },
// []);
//   return (
//     <div className="main_contribute_card shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
//       <h5>Projects</h5>
//       <div className = "projects-container">
//        {projects.length > 0 ? (
//           projects.map((project) => (
//             <div className="project-card" key={project._id}>

//               {/*ICON AND TITLE*/}
//       <div className="home_explore_about">
//         <a>
//           <img
//             src={explore}
//             alt="idea"
//             className="home_explore_icons"
//             id="5"
//             onClick={()=>setComponent(project._id)}
//             style={{ cursor: "pointer" }}
//           />
//         </a>
//         <h5>{project.title}</h5>
//       </div>
//             {/* Description */}

//       <div>
//         {project.description}
//       </div>

//             {/* Tags (Skills required for the project) */}
//         <div className="container">
//                 <div className="home_explore_tags">
//                   {Array.isArray(project.skills) && project.skills.length > 0 ? (
//                     project.skills.map((skill, index) => (
//                       <div
//                         key={index}
//                         className="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag"
//                       >
//                         <p>{skill}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p>No skills required</p> // Display message if no skills are available
//                   )}
//                 </div>
//               </div>

//        {/* See More Button */}
//       <button
//         type="button"
//         class="btn btn-outline-primary btn-sm mt-3 contri_btn"
//         style={{ marginLeft: "12.5rem" }}
//         id="6"
//         onClick={()=>setComponent.project._id}
//       >
//         See More
//       </button>
//     </div>
//   ))
// ):(
//   <p>No projects available</p>
//   )}
//     </div>
//   </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import explore from "../images/exploreIcon.png";
import SeeMore from "../pages/seemorePage"; // Import SeeMore component
import See_More_Card from "./See_More";
import SideBar from "./main_Nav_SideBar/mainSideBar";
import { useState } from "react";
export default function Main_Contribute_card({ project }) {
  const navigate = useNavigate(); // Initialize navigate

  const handleSeeMoreClick = () => {
    // Navigate to the SeeMorePage, passing the projectId via URL
    navigate(`/seemore/${project._id}`);
  };
  const [toggle, setToggle] = useState(true);
  const toggleSideBar = () => {
    setToggle(!toggle);
  };
  const [renderCompo, setRenderCompo] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);
  const setComponent = (e) => {
    setRenderCompo((renderCompo) => {
      return renderCompo.map((item, idx) => {
        if (idx == parseInt(e.target.id)) {
          return true;
        } else {
          return false;
        }
      });
    });
    console.log(renderCompo);
  };
  return (
    <div className="project-card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      {/* Display the title and image for the individual project */}
      <div className="home_explore_about">
        <a>
          <img
            src={explore}
            alt="idea"
            className="home_explore_icons"
            id="5"
            onClick={setComponent} // Pass the project ID or relevant data
            style={{ cursor: "pointer" }}
          />
        </a>
        <h5>{project.idea}</h5>
      </div>
      {/* Display the description for the individual project */}
      <div>{project.description}</div>
      {/* Display the skills required for the individual project */}
      <div className="container">
        <div className="home_explore_tags">
          {Array.isArray(project.skills) && project.skills.length > 0 ? (
            project.skills.map((skill, index) => (
              <div
                key={index}
                className="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag"
              >
                <p>{skill}</p>
              </div>
            ))
          ) : (
            <p>No skills required</p>
          )}
        </div>
      </div>
      {/* Button to see more details about the individual project */}
      <button
        type="button"
        className="btn btn-outline-primary btn-sm mt-3 contri_btn"
        style={{ marginLeft: "12.5rem" }}
        id="6"
        //onClick={() => setComponent(<See_More_Card projectId=${project._id} />)} // Pass the project ID or relevant data
        onClick={handleSeeMoreClick}
      >
        See More
      </button>
    </div>
  );
}
