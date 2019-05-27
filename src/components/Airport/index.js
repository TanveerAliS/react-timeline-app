import React from "react";
import { getTime } from "../../untils";

const Airport = ({ origin, departure, detail }) => {
  return (
    <li>
      <div className="segments">
        <div className="time"> {getTime(departure)}</div>
        <div className="content">
          <div className="icon">
            <i className="fab fa-avianex" />
          </div>
          <div className="desc">
            <span>
              {origin.value} {origin.type}
            </span>
            <br />
            <span>Terminal C</span>
          </div>
          <div className="status">
            <span className="time">Busy</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Airport;
