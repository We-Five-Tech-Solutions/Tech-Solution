import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

test("About Page > renders About Us heading", () => {
  render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  expect(screen.getByText(/about us/i)).toBeInTheDocument();
});
