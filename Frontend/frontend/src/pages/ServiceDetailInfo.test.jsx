import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ServiceDetailInfo from "./ServiceDetailInfo";

test("Service Detail Info Page > renders service detail section", () => {
  render(
    <MemoryRouter>
      <ServiceDetailInfo />
    </MemoryRouter>
  );

  const elements = screen.getAllByText(/service/i);
  expect(elements.length).toBeGreaterThan(0);
});
