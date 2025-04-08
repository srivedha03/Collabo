import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import SeeMore_Connect from "./SeeMore_Contact";

export default function See_More_Card({ userId }) {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState(null);
  //const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log("Fetching project with ID:", projectId);
    fetch(`http://localhost:3002/api/seemore/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setProject(data);

        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setError(error.message);
        //setLoading(false);
      });
  }, [projectId]);
  if (error) {
    return <p>Error: {error}</p>; // Show error message if fetch fails
  }
  if (!project) {
    return <p>Project not found.</p>; // Handle case where project data is not found
  }

  return (
    <div className="see_more_card shadow-sm bg-tertiary my-4 p-4 mb-4 rounded">
      <div className="see_more_about">
        <h4 style={{ fontSize: "1.5rem" }}>{project.idea}</h4>
        <br />
      </div>
      <div className="mb-3">
        <h5>Posted On</h5>
        <p>{new Date(project.datePosted).toLocaleDateString()}</p>
      </div>

      <div style={{ fontSize: "20px" }}>
        <div className="mb-4">
          <h5>Description</h5>
          <p>{project.description}</p>
        </div>

        <h5 style={{ fontSize: "20px" }}>Skills</h5>
        <div>
          <div className="container">
            <div className="see_more_tags">
              {Array.isArray(project.skills) ? ( // Check if project.skills is an array
                project.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="badge rounded-pill border border-secondary-subtle text-black fw-normal see_more_tag"
                  >
                    <p style={{ fontSize: "20px" }}>{skill}</p>
                  </div>
                ))
              ) : (
                <p>No skills available</p> // Handle case where skills are not available
              )}
            </div>
          </div>
        </div>
        <div className="team_hours">
          <div className="mb-3">
            <h5>Team Size</h5>
            <p>{project.teamSize}</p>
          </div>
          <div className="mb-3">
            <h5>Hours Required</h5>
            <p>{project.hoursRequired} hours</p>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-outline-primary btn-sm mt-3 chat_btn"
          id="7"
        >
          <SeeMore_Connect text={project.userId.email} />
        </button>
      </div>
    </div>
  );
}
