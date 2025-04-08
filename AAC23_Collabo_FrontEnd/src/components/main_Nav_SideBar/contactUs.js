import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
function ContactUs() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <a style={{ cursor: "pointer", color: "#1d4ed8", fontSize: "0.9rem" }}>
          collabo24@gmail.com
        </a>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <a variant="primary">Contact Us</a>
      </OverlayTrigger>
    </div>
  );
}

export default ContactUs;
