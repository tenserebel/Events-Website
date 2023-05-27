import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "@/pages/about-us";

describe("Main Page", () => {
  it("Should render properly", () => {
    render(<AboutUs />);
    const header = screen.getByTestId("Heading Text");
    const headerText = "About us Page";

    expect(header).toHaveTextContent(headerText);
  });

  it("Should render properly", () => {
    render(<AboutUs />);
    const header = screen.getByTestId("Second Header");

    const headerText = "Dlor in reprehenderit";
    expect(header).toHaveTextContent(headerText);
  });
});
