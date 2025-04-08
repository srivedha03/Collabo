import "../../App.css";
import explore from "../../images/exploreIcon.png";
export default function Home_explore_card2() {
  return (
    <div className="home_explore_card shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
      <div className="home_explore_about">
        <img src={explore} alt="idea" className="home_explore_icons" />
        <h5> Health Monitoring Wearable</h5>
      </div>
      <div>
        Develop a low-cost, wearable health monitoring device that tracks heart
        rate, oxygen levels, sleep patterns, and stress levels.
      </div>
      <div className="container">
        <div className="home_explore_tags">
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>Html</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>Css</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>Js</p>
          </div>
          <div class="badge rounded-pill border border-secondary-subtle text-black fw-normal home_explore_tag">
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
}
