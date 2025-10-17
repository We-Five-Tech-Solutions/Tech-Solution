import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("App component", () => {
 it("renders at least one Home link", () => {
  render(<App />);
  const homeLinks = screen.getAllByText(/home/i);
  expect(homeLinks.length).toBeGreaterThan(0);
});

it("renders hero section content", () => {
    render(<App />);
    expect(
      screen.getByText(/transforming ideas into/i)
    ).toBeInTheDocument();
  });

});
