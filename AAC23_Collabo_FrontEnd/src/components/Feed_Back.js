// import { useEffect, useState } from "react";
// import feedImg from "../images/feedbackPage.png";
// import "../App.css";
// import "../App.css";
// import { useNavigate } from "react-router-dom";
// export default function Feed_Back() {
//   // const [rating, setRating] = useState(0);
//   const [star, setStar] = useState([false, false, false, false, false]);
//   const [rating, setRating] = useState(0);
//   const [feedback, setFeedback] = useState("");
//   const navigate = useNavigate();

//   const change = (e) => {
//     const clickedStar = parseInt(e.target.id);
//     setStar((star) => {
//       return star.map((i, ind) => {
//         if (ind < e.target.id || ind == e.target.id) {
//           return true;
//         } else {
//           return false;
//         }
//       });
//     });
//   };

//   const handleLogout = () => {
//     // Remove the token from local storage
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");

//     // Display the "Logged Out" message
//     alert("You have been logged out.");

//     // Redirect to the home page or login page after logout
//     navigate("/");  // You can change this to the login page if preferred
//   };

//   return (
//     <div className="row">
//       <div className="col-md-7">
//         <div className="Feed_Back_Card shadow-sm bg-tertiary ">
//           <div className="feedback-rating">
//             <p className="text-center">
//               <h2>Feedback</h2>
//               <h5>Please rate your experience below</h5>
//             </p>
//             <div className="d-flex justify-content-center">
//               <div className="d-flex">
//                 <div onClick={change}>
//                   {star[0] ? (
//                     <i
//                       className="bi bi-star-fill text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="0"
//                     />
//                   ) : (
//                     <i
//                       className="bi bi-star text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="0"
//                     />
//                   )}
//                 </div>
//                 <div>
//                   {star[1] ? (
//                     <i
//                       className="bi bi-star-fill text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="1"
//                       onClick={change}
//                     />
//                   ) : (
//                     <i
//                       className="bi bi-star text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="1"
//                       onClick={change}
//                     />
//                   )}
//                 </div>
//                 <div onClick={change}>
//                   {star[2] ? (
//                     <i
//                       className="bi bi-star-fill text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="2"
//                     />
//                   ) : (
//                     <i
//                       className="bi bi-star text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="2"
//                     />
//                   )}
//                 </div>
//                 <div onClick={change}>
//                   {star[3] ? (
//                     <i
//                       className="bi bi-star-fill text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="3"
//                     />
//                   ) : (
//                     <i
//                       className="bi bi-star text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="3"
//                     />
//                   )}
//                 </div>
//                 <div onClick={change}>
//                   {star[4] ? (
//                     <i
//                       className="bi bi-star-fill text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="4"
//                     />
//                   ) : (
//                     <i
//                       className="bi bi-star text-warning"
//                       style={{ fontSize: "2.2rem" }}
//                       id="4"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mb-3 mx-4" style={{ width: "90%" }}>
//             <label for="feedback" className="form-label">
//               Additional Feedback
//             </label>
//             <input
//               placeholder="Your Feedback!!"
//               className="form-control"
//               style={{ height: "5rem" }}
//             />
//           </div>
//           <button
//             type="button"
//             class="btn btn-outline-primary btn-sm mt-2 mx-4 submit_btn"
//             id="8"
//           >
//             Submit
//           </button>
//           <div>
//             <p
//               style={{
//                 textAlign: "center",
//                 fontSize: "20px",
//                 marginTop: "1rem",
//               }}
//             >
//               OR
//             </p>
//           </div>
//           <button

//             type="button"
//             className="btn btn-outline-primary btn-sm home_btn "
//             id="9"
//             onClick={handleLogout}//Trigger Logout
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//       <div className="col-md-5">
//         <img src={feedImg} className="feedbackImg" />
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import feedImg from "../images/feedbackPage.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Feed_Back() {
  const [star, setStar] = useState([false, false, false, false, false]);
  const [rating, setRating] = useState(0); // To store the number of selected stars
  const [feedback, setFeedback] = useState(""); // To store additional feedback
  const navigate = useNavigate();

  // Update the star rating based on the clicked star
  const change = (e) => {
    const clickedStar = parseInt(e.target.id);
    setStar((star) => {
      return star.map((_, ind) => ind <= clickedStar);
    });
    setRating(clickedStar + 1); // Store the rating (number of stars clicked)
  };

  // Handle feedback input change
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Submit feedback and rating to the backend
  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User is not logged in.");
      return;
    }
    try {
      const response = await fetch("http://localhost:3002/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          feedback,
          userId,
        }),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        //redirect or reset form
        setStar([false, false, false, false, false]);
        setFeedback("");
      } else {
        alert("Failed to submit feedback. Please try again.");
      }
    } catch (error) {
      alert("Error submitting feedback. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    // Display the "Logged Out" message
    alert("You have been logged out.");

    // Redirects to the home page
    navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <div className="Feed_Back_Card shadow-sm bg-tertiary ">
          <div className="feedback-rating">
            <p className="text-center">
              <h2>Feedback</h2>
              <h5>Please rate your experience below</h5>
            </p>
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} onClick={change}>
                    {star[i] ? (
                      <i
                        className="bi bi-star-fill text-warning"
                        style={{ fontSize: "2.2rem" }}
                        id={i.toString()}
                      />
                    ) : (
                      <i
                        className="bi bi-star text-warning"
                        style={{ fontSize: "2.2rem" }}
                        id={i.toString()}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-3 mx-4" style={{ width: "90%" }}>
            <label htmlFor="feedback" className="form-label">
              Additional Feedback
            </label>
            <input
              placeholder="Your Feedback!!"
              className="form-control"
              style={{ height: "5rem" }}
              value={feedback}
              onChange={handleFeedbackChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm mt-2 mx-4 submit_btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="col-md-5">
        <img src={feedImg} className="feedbackImg" />
      </div>
    </div>
  );
}
