import Home_card from "./home-Card";
import "../../App.css";
import idea from "../../images/idea3.png";
import contribute from "../../images/contribute.png";
import events from "../../images/events.png";

export default function Home_Cards() {
  return (
    <div className="container">
      <div className="home_cards_align">
        <Home_card text={"Post a Project Idea"} imG={idea} />
        <Home_card text={"Contribute to a Project"} imG={contribute} />
        <Home_card text={"Checkout the Events"} imG={events} />
      </div>
    </div>
  );
}
