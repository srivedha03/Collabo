import "../../App.css";
import explore from "../../images/exploreIcon.png";
export default function Home_explore_card3() {
  return (
    <div className="home_explore_card shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
      <div className="home_explore_about">
        <img src={explore} alt="idea" className="home_explore_icons" />
        <h5>Smart Traffic Management System</h5>
      </div>
      <div>
        Design an IoT-based system for smart cities to monitor traffic in real
        time. Use sensors and AI to predict traffic patterns.
      </div>
      <div className="container">
        <div className="home_explore_tags">
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>Python</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>Django</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>MQTT</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
