import Register_NavBar from "../components/register/registerNav";
import Register from "../components/register/registerMain";
import Footer from "../components/home/home-footer";
import "../App.css";
export default function RegisterPage() {
  return (
    <div>
      <Register_NavBar />
      <Register />
      <Footer />
    </div>
  );
}
