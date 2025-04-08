import React from "react";
import { useParams } from "react-router-dom";
import See_More_Card from "../components/See_More.js";
export default function SeeMorePage() {
  const { projectId } = useParams();
  return (
    <div style={{ padding: "3rem" }}>
      <div className="container-fluid">
        <div className="col-xl-4 col-md-6">
          <See_More_Card projectId={projectId} />
        </div>
      </div>
      ;
    </div>
  );
}
