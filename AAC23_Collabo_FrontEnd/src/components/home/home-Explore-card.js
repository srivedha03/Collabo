import "../../App.css";
import explore from "../../images/exploreIcon.png";
export default function Home_explore_card1() {
  return (
    <div className="home_explore_card shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
      <div className="home_explore_about">
        <img src={explore} alt="idea" className="home_explore_icons" />
        <h5>Smart Home Assistant App</h5>
      </div>
      <div>
        Develop an app that integrates various smart home devices into a single
        platform, allowing users to control lighting, temperature, security
        cameras, and appliances.
      </div>
      <div className="container">
        <div className="home_explore_tags">
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>React</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>NodeJs</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>PostgreSQL</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>MQTT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
