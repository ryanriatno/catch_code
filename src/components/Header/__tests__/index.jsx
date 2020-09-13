import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Header from '../index'
import {
  getByText,
  getByTestId,
} from '@testing-library/dom'

describe("<Header /> test case", () => {
  test("Render Header without error", () => {
    const { container } = render(<Header handleSortingPrice={() => { return }} />);
    expect(container).toMatchSnapshot();
  });
  test ("Capture onChange event on sorting price", done => {
    const { container } = render(<Header handleSortingPrice={() => { return }} />);
    const node = getByText(container, "Highest Price")
    fireEvent.change(node);
    expect(getByTestId(container, 'sorting-trigger').value).toHaveTextContent(
      "Lowest Price"
    )
  })
  afterEach(cleanup);
});