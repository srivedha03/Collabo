// import React from "react";
// import Main_Contribute_card from "../components/Main_ContributeCard";
// function ContributePage({ setComponent }) {
//   return (
//     <div className="container-fluid">
//       <div className="container" style={{ paddingTop: "3rem" }}>
//         <div className="row">
//           <div className="col-xl-4 col-md-6">
//             <Main_Contribute_card setComponent={setComponent} />
//           </div>
//           {/* <div className="col-xl-4 col-md-6">
//             <Main_Contribute_card setComponent={setComponent} />
//           </div>
//           <div className="col-xl-4 col-md-6">
//             <Main_Contribute_card setComponent={setComponent} />
//           </div>
//           <div className="col-xl-4 col-md-6">
//             <Main_Contribute_card setComponent={setComponent} />
//           </div>
//           <div className="col-xl-4 col-md-6">
//             <Main_Contribute_card setComponent={setComponent} />
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContributePage;
import React, { useEffect, useState } from "react";
import Main_Contribute_card from "../components/Main_ContributeCard";

function ContributePage({ setComponent }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the projects from the API
    fetch("http://localhost:3002/api/MainContribute")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="container" style={{ paddingTop: "3rem" }}>
        <div className="row">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div className="col-xl-4 col-md-6" key={project._id}>
                <Main_Contribute_card project={project} setComponent={setComponent} />
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContributePage;