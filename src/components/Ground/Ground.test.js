import React from "react";
import { render } from "react-testing-library";
import Ground from "./index";

const data = {
  "segment_id": "452dfb51-0ac6-4274-b740-af6f89bc6116",
  "type": "GROUND",
  "origin": {
    "value": "Alte Schönhauser Straße 3, 10119 Berlin",
    "type": "STREET_ADDRESS"
  },
  "departure": 1523596800,
  "destination": {
    "type": "AIRPORT",
    "value": "TXL"
  }
}

test("rendered the component and match snapshot", () => {
  const wrapper = render(<Ground {...data}/>);
  expect(wrapper).toMatchSnapshot();
});
