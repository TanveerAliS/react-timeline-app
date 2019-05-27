import React from "react";
import { render } from "react-testing-library";
import Airport from "./index";

const data = {
  segment_id: "39552e6d-6785-4e83-82dc-157a45773b45",
  type: "AIRPORT",
  origin: {
    type: "AIRPORT",
    value: "TXL"
  },
  departure: 1523599200,
  detail: {
    busyness_index: 10
  }
};

test("rendered the component and match snapshot", () => {
  const wrapper = render(<Airport {...data}/>);
  expect(wrapper).toMatchSnapshot();
});
