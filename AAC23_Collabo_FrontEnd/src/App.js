import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Logpage from "./pages/logPage";
import RegisterPage from "./pages/registerPage";
import MainPage_Contribute from "./components/main_Nav_SideBar/mainContribute";
import EventsPage from "./pages/eventsPage";
import PostPage from "./pages/postPage";
import FeedBackPage from "./pages/feedbackPage";
import ContributePage from "./pages/contributePage";
import MyProfilePage from "./pages/myProfilePage";
import ProfilePage from "./pages/profilePage";
import Edit_MyProfile from "./pages/editMyProfilePage";
import SetUpProfile from "./pages/setUpProfilePage";
import Main_Contribute_card from "./components/Main_ContributeCard";
import See_More_Card from "./components/See_More";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Logpage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/MainContribute" element={<MainPage_Contribute />} />
      <Route path="/contribute" element={<ContributePage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/feedback" element={<FeedBackPage />} />
      <Route path="/myProfile/:userId" element={<MyProfilePage />} />
      <Route path="/viewprofile" element={<ProfilePage />} />
      <Route path="/seemore/:projectId" element={<See_More_Card />} />
      <Route path="/editmyprofile" element={<Edit_MyProfile />} />
      <Route path="/setupprofile" element={<SetUpProfile />} />
    </Routes>
  );
}
export default App;
