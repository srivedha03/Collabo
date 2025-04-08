import React from "react";
import Feed_Back from "../components/Feed_Back.js";
function FeedBackPage({ setComponent }) {
  return (
    <div style={{ padding: "3rem" }}>
      <Feed_Back setComponent={setComponent} />
    </div>
  );
}

export default FeedBackPage;
