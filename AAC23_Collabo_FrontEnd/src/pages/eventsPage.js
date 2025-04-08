import React from "react";
import upcomingevents from "../images/upcoming.png";
import calender from "../images/calenderevents.png";
import eventcards from "../components/eventcards";
import aac from "../images/aacExpo.jpg";
import pragya from "../images/pragya.jpg";
import sports from "../images/sports.jpg";
export default function EventsPage() {
  return (
    <>
      <div className="cont1events">
        <div className="upcevents">
          <img src={upcomingevents} style={{ width: "210px" }} />
        </div>
        <div className="events-card">
          <div className="left-events">
            <img src={aac} style={{ width: "12rem", height: "10em" }} />
          </div>
          <div className="right-events">
            <p>
              <strong>Name : AAC PROJECT EXPO</strong>
            </p>
            <p>
              <strong>Date :7th December 2024</strong>
            </p>
            <p>
              <strong>Venue : GRIET HALL 1</strong>
            </p>
            <p>
              <strong>Registration fee : FREE ENTRY</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="events-card">
        <div className="left-events">
          <img src={pragya} style={{ width: "8rem", height: "10em" }} />
        </div>
        <div className="right-events">
          <p>
            <strong>Name:PRAGNYA</strong>
          </p>
          <p>
            <strong>Date: 21st and 22nd NOV</strong>
          </p>
          <p>
            <strong>Venue: GRIET </strong>
          </p>
          <p>
            <strong>Registration fee : Depends on events</strong>
          </p>
        </div>
      </div>

      <div className="cont2events">
        <div className="calender">
          <img src={calender} alt="hI" srcset="" />
        </div>
        <div className="events-card">
          <div className="left-events">
            <img src={sports} style={{ width: "9rem", height: "11em" }} />
          </div>
          <div className="right-events">
            <p>
              <strong>Name: INVICTUS (SPORTS)</strong>
            </p>
            <p>
              <strong>Date : 25th NOV , 26th NOV </strong>
            </p>
            <p>
              <strong>Venue : GRIET College Ground</strong>
            </p>
            <p>
              <strong>Registration fee :No Fee</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
