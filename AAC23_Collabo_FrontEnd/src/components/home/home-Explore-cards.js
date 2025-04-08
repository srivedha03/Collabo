import Home_explore_card1 from "./home-Explore-card";
import Home_explore_card2 from "./home-explore-card2";
import Home_explore_card3 from "./home-explore-card3";
export default function Home_Explore_Cards() {
  return (
    <div className="container" style={{ marginTop: "-2.3rem" }}>
      <div style={{ marginBottom: "-0.7rem" }}>
        <h5 style={{ textAlign: "center" }}>
          Explore Our Projects and Connect With Them
        </h5>
      </div>
      <div className="home_explore_cards_align">
        <Home_explore_card1 />
        <Home_explore_card2 />
        <Home_explore_card3 />
      </div>
    </div>
  );
}
