import React from "react";
import { render } from "react-testing-library";
import Ground from "./index";

const data = {
  segment_id: "07f77c9f-7fdf-446b-91d5-52e900f33723",
  type: "FLIGHT",
  origin: {
    type: "AIRPORT",
    value: "TXL"
  },
  destination: {
    type: "AIRPORT",
    value: "MUC"
  },
  departure: 1523602800,
  detail: {
    boarding: 1523601000,
    flight_number: "LH2031",
    gate: "C12",
    seat: "12C"
  }
};

test("rendered the component and match snapshot", () => {
  const wrapper = render(<Ground {...data} />);
  expect(wrapper).toMatchSnapshot();
});
