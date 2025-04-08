import Log_NavBar from "../components/login/logNav";
import Login from "../components/login/loginMain";
import Footer from "../components/home/home-footer";
import "../App.css";

export default function Logpage() {
  return (
    <div className="bgCol">
      <Log_NavBar />
      <Login />
      <Footer />
    </div>
  );
}
