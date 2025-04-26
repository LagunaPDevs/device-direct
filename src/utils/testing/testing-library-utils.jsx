import { render } from "@testing-library/react";

// providers
import { MemoryRouter } from "react-router";

const renderWithRouter = (ui, options) => {
  render(<MemoryRouter>{ui}</MemoryRouter>, options);
};

// re-export everything
export * from "@testing-library/react";

// overrride render method
export { renderWithRouter as render };
