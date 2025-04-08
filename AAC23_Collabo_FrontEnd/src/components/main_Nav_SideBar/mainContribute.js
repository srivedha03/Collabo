import SideBar from "./mainSideBar";
import Nav from "./mainNavBar";
import { useState } from "react";
import PostPage from "../../pages/postPage";
import FeedBackPage from "../../pages/feedbackPage";
import ContributePage from "../../pages/contributePage";
import EventsPage from "../../pages/eventsPage";
import MyProfilePage from "../../pages/myProfilePage";
import ProfilePage from "../../pages/profilePage";
import SeeMorePage from "../../pages/seemorePage";
import Edit_MyProfile from "../../pages/editMyProfilePage";
import SetUpProfile from "../../pages/setUpProfilePage";

export default function MainPage_Contribute() {
  const [toggle, setToggle] = useState(true);
  const toggleSideBar = () => {
    setToggle(!toggle);
  };
  const [renderCompo, setRenderCompo] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const setComponent = (e) => {
    setRenderCompo((renderCompo) => {
      return renderCompo.map((item, idx) => {
        if (idx == parseInt(e.target.id)) {
          return true;
        } else {
          return false;
        }
      });
    });
    console.log(renderCompo);
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        {toggle ? (
          <div className="col-2 bg-white min-vh-100 shadow p-1">
            <SideBar setComponent={setComponent} />
          </div>
        ) : (
          <></>
        )}
        <div className="col">
          <div className="row p-0">
            <Nav toggleSideBar={toggleSideBar} setComponent={setComponent} />
          </div>
          <div className="row">
            {renderCompo[0] && <PostPage />}
            {renderCompo[1] && <ContributePage setComponent={setComponent} />}
            {renderCompo[2] && <EventsPage />}
            {renderCompo[3] && <FeedBackPage />}
            {renderCompo[4] && <MyProfilePage setComponent={setComponent} />}
            {renderCompo[5] && <ProfilePage />}
            {renderCompo[6] && <SeeMorePage />}
            {renderCompo[7] && <Edit_MyProfile setComponent={setComponent} />}
            {renderCompo[8] && <SetUpProfile />}
          </div>
        </div>
      </div>
    </div>
  );
}
