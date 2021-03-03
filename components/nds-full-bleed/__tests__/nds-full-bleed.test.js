import React from "react";
import { shallow, mount } from "enzyme";
import { FullBleed } from "../src/FullBleed";
import toJson from "enzyme-to-json";

describe("FullBleed component", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<FullBleed />);
    expect(wrapper).toHaveLength(1);
  });
});
