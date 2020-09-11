import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ProductCard from '../index'

describe("<ProductCard /> test case", () => {
  test("Render Header without error", () => {
    const data = {
      quantityAvailable: 1,
      key:"asfd",
      name:"Shoe",
      imageUrl:"https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
      salePrice:1234,
      retailPrice:4321,
      id:123123123
    }
    const { container } = render(<ProductCard {...data} />);
    expect(container).toMatchSnapshot();
  });
});