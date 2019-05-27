import React from "react";
import { getTime } from "../../untils";

const Ground = ({ origin, departure, destination }) => {
  return (
    <li>
      <div className="segments">
        <div className="time"> {getTime(departure)}</div>
        <div className="content">
          <div className="icon">
            <i className="fas fa-bus" />
          </div>
          <div>
            <span className="pick-up">Pick up from</span>
            <br />
            <span>{origin.value}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Ground;
