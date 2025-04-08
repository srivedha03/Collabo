import "../../App.css";
import collaboIcon from "../../images/collaboIcon.png";
import contributeIcon from "../../images/contributeIcon.png";
import event from "../../images/event.png";
import feed from "../../images/feedback.png";
import post from "../../images/post.png";
export default function SideBar({ setComponent }) {
  return (
    <div>
      <div className="m-2">
        <a class="nav-title">
          <img src={collaboIcon} width="50" className="d-inline-block " />
          <span
            style={{
              fontSize: "1.3rem",
              color: "#1B99D4",
              verticalAlign: "middle",
            }}
          >
            <b>COLLABO</b>
          </span>
        </a>
      </div>
      <div className="list-group list-group-flush border-none my-5">
        <a className="list-group-item py-3" id="0" onClick={setComponent}>
          <img
            src={post}
            alt=""
            className="me-3"
            id="0"
            onClick={setComponent}
            style={{ height: "1.5rem" }}
          />
          <span id="0" onClick={setComponent}>
            Post
          </span>
        </a>

        <a className="list-group-item py-3" id="1" onClick={setComponent}>
          <img
            src={contributeIcon}
            alt="contribute"
            className="me-3"
            id="1"
            onClick={setComponent}
            style={{ height: "1.7rem" }}
          />
          <span id="1" onClick={setComponent}>
            Contribute
          </span>
        </a>
        <a className="list-group-item py-3" id="2" onClick={setComponent}>
          <img
            src={event}
            alt="contribute"
            className="me-3"
            id="2"
            onClick={setComponent}
            style={{ height: "1.5rem" }}
          />
          <span id="2" onClick={setComponent}>
            Events
          </span>
        </a>
        {/* <a className="list-group-item py-3" id="3" onClick={setComponent}>
          <img
            src={feed}
            alt="contribute"
            className="me-3"
            id="3"
            onClick={setComponent}
            style={{ height: "1.5rem" }}
          />
          <span id="3" onClick={setComponent}>
            Feedback
          </span>
        </a> */}
      </div>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import "../../App.css";
// import collaboIcon from "../../images/collaboIcon.png";
// export default function SideBar() {
//   return (
//     <div>
//       <div className="m-2">
//         <a class="nav-title">
//           <img src={collaboIcon} width="50" className="d-inline-block " />
//           <span
//             style={{
//               fontSize: "1.3rem",
//               color: "#1B99D4",
//               verticalAlign: "middle",
//             }}
//           >
//             <b>COLLABO</b>
//           </span>
//         </a>
//       </div>
//       <div className="list-group list-group-flush border-none my-5">
//         <a className="list-group-item py-3">
//           <i class="bi bi-pencil-square me-3"></i>
//           <span id="post">Post</span>
//         </a>
//         <a className="list-group-item py-3">
//           <i class="bi bi-pencil-square me-3"></i>
//           <span id="cont">Contribute</span>
//         </a>
//         <a className="list-group-item py-3">
//           <i class="bi bi-calendar4-event me-3"></i>
//           <span id="events">Events</span>
//         </a>
//         <a className="list-group-item py-3">
//           <i class="bi bi-pencil-square me-3"></i>
//           <span id="feed">Feedback</span>
//         </a>
//       </div>
//     </div>
//   );
// }
