import React from "react";
import { getTime } from "../../untils";

const Flight = ({ origin, departure, destination, detail }) => {
  return (
    <li className="destination">
      <div className="segments">
        <div className="time"> {getTime(departure)} </div>
        <div className="wrapper">
          <div className="details">
            <span className="date">{detail.flight_number}</span>
            <span className="boarding">Boarding {getTime(detail.boarding)}</span>
          </div>
          <div className="content">
            <span className="src-dest">
              {origin.value} <i className="fas fa-plane" /> {destination.value}
            </span>
          </div>
          <div className="details">
            <span className="date">Gate : {detail.gate}</span>
            <span className="seat">Seat : {detail.seat}</span>
            <span className="status">On Time</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Flight;
