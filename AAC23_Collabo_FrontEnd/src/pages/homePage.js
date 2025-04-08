import Home_NavBar from "../components/home/navbar";
import Home_Intro from "../components/home/home-Intro";
import Home_Cards from "../components/home/home-Cards";
import Home_Explore_Cards from "../components/home/home-Explore-cards";
import Footer from "../components/home/home-footer";
import "../App.css";
export default function HomePage({ setcomponent }) {
  return (
    <div className="bgCol">
      <Home_NavBar />
      <Home_Intro />
      <Home_Cards />
      <Home_Explore_Cards />
      <Footer />
    </div>
  );
}
