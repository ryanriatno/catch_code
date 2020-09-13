import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Index from '../index'

describe("<ProductCard /> test case", () => {
  test("Render Header without error", () => {
    const { container } = render(<Index  />);
    expect(container).toMatchSnapshot();
  });
});