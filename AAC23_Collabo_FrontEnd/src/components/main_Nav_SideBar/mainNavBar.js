import "../../App.css";
import ContactUs from "./contactUs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import feed from "../../images/feedback.png";
export default function Nav({ toggleSideBar, setComponent }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to the search route
    navigate(`/seemore/${searchTerm}`);
  };

  const handleProfileClick = () => {
    const userId = localStorage.getItem("userId"); // Get userId from localStorage
    if (userId) {
      navigate(`/myProfile/${userId}`); // Navigate to profile page using userId
    } else {
      console.error("User ID not found in localStorage");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-white bg-white"
      style={{ height: "4rem" }}
    >
      <div className="container-fluid">
        <ul class="nav justify-content-start">
          <li class="nav-item">
            <a class="nav-link my1" aria-current="page" href="#">
              <i
                class="bi bi-list-stars text-black"
                style={{ fontSize: "1.6rem" }}
                onClick={toggleSideBar}
              ></i>
            </a>
          </li>
        </ul>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link"
              aria-current="page"
              href="#"
              style={{ marginTop: "0.4rem", color: "black" }}
            >
              <ContactUs></ContactUs>
            </a>
          </li>
          <ul className="nav justify-content-space-around align-items-center">
            <li class="nav-item ">
              <li className="nav-link" style={{ marginRight: "-4.2rem" }}>
                <form class="d-flex" onSubmit={handleSearchSubmit}>
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search Project"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </li>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i
                  class="bi bi-search  text-black"
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </a>
            </li>
          </ul>
          <li class="nav-item">
            <a class="nav-link" aria-disabled="true" href="#">
              <img
                src={feed}
                alt="feedback"
                // className="my-3"
                id="3"
                onClick={setComponent}
                style={{ height: "1.5rem", marginTop: "0.5rem" }}
              />
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" aria-disabled="true" href="#">
              <i
                class="bi bi-person text-black"
                style={{ fontSize: "1.5rem" }}
                id="4"
                onClick={handleProfileClick}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
