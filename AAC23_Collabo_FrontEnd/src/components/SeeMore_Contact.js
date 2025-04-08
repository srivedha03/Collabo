import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
function SeeMore_Connect({ text }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <a style={{ cursor: "pointer", color: "#1d4ed8", fontSize: "0.9rem" }}>
          {text}
        </a>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="top" overlay={popover}>
        <a variant="primary">Connect</a>
      </OverlayTrigger>
    </div>
  );
}

export default SeeMore_Connect;
