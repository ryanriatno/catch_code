import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
// @ts-ignore
import Header from '../index'

describe("<Header /> test case", () => {
  test("Render Header without error", () => {
    const { container } = render(<Header handleSortingPrice={() => { return }} />);
    expect(container).toMatchSnapshot();
  });
});