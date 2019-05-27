import React from "react";
import Airport from "../../components/Airport";
import Flight from "../../components/Flight";
import Ground from "../../components/Ground";
import data from "../../data.json";

const TimeLine = props => {
  return (
    <div className="timeLine">
      <h2>Berlin - Munich</h2>
      <ul>
        <Ground {...data.segments[0]} />
        <Airport {...data.segments[1]} />
        <Flight {...data.segments[2]} />
      </ul>
    </div>
  );
};

export default TimeLine;
