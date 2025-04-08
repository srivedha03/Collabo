import homeImg2 from "../../images/homeImg2.png";
import "../../App.css";
export default function Home_Intro() {
  return (
    <div className="home_intro">
      <div className="container">
        COLLABO is aimed at harnessing the <br />
        collective creativity of students within GRIET <br />
        through an platform, fostering <br />
        collaborative innovation among students.
      </div>
      <div className="container">
        <img src={homeImg2} className="homeImg2" />
      </div>
    </div>
  );
}
