import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "./Contact";

test("Contact Page > renders contact form or contact info", () => {
  render(
    <MemoryRouter>
      <Contact />
    </MemoryRouter>
  );

  expect(screen.getByText(/contact/i)).toBeInTheDocument();
});
